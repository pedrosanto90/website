import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import siteContent from "@/data/content";

const rateLimitStore = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(10).max(3000),
  company: z.string().trim().max(120).optional(),
  honeypot: z.string().optional(),
});

const defaultRateLimitWindowSeconds = 600;
const defaultRateLimitMaxRequests = 5;

const getRateLimitConfig = () => {
  const windowSeconds = Number(
    process.env.CONTACT_RATE_LIMIT_WINDOW_SECONDS ??
      defaultRateLimitWindowSeconds
  );
  const maxRequests = Number(
    process.env.CONTACT_RATE_LIMIT_MAX_REQUESTS ?? defaultRateLimitMaxRequests
  );

  return {
    windowMs:
      Number.isFinite(windowSeconds) && windowSeconds > 0
        ? windowSeconds * 1000
        : defaultRateLimitWindowSeconds * 1000,
    maxRequests:
      Number.isFinite(maxRequests) && maxRequests > 0
        ? maxRequests
        : defaultRateLimitMaxRequests,
  };
};

const getClientIp = (request: NextRequest) => {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  return "unknown";
};

const isRateLimited = (ip: string) => {
  const { windowMs, maxRequests } = getRateLimitConfig();
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxRequests) {
    return true;
  }

  entry.count += 1;
  rateLimitStore.set(ip, entry);
  return false;
};

export async function POST(request: NextRequest) {
  if (process.env.CONTACT_FORM_ENABLED === "false") {
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.unavailable },
      { status: 503 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.invalidPayload },
      { status: 400 }
    );
  }

  const rawHoneypot = (payload as { honeypot?: unknown }).honeypot;
  const honeypot = typeof rawHoneypot === "string" ? rawHoneypot : "";

  if (honeypot.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.rateLimited },
      { status: 429 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.invalidDetails },
      { status: 400 }
    );
  }

  const { name, email, message, company } = parsed.data;

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM;
  const contactFromName = process.env.CONTACT_FROM_NAME;

  if (
    !smtpHost ||
    !smtpPort ||
    !smtpUser ||
    !smtpPass ||
    !contactTo ||
    !contactFrom ||
    !contactFromName
  ) {
    console.error("[contact] Missing SMTP/contact env vars", {
      hasSmtpHost: Boolean(smtpHost),
      hasSmtpPort: Boolean(smtpPort),
      hasSmtpUser: Boolean(smtpUser),
      hasSmtpPass: Boolean(smtpPass),
      hasContactTo: Boolean(contactTo),
      hasContactFrom: Boolean(contactFrom),
      hasContactFromName: Boolean(contactFromName),
    });
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.serverError },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const submittedAt = new Date().toISOString();
  const subject = `New website inquiry from ${name}`;

  const textLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Message: ${message}`,
    `Timestamp (UTC): ${submittedAt}`,
    `IP: ${clientIp}`,
  ].filter(Boolean);

  const htmlLines = [
    `<p><strong>Name:</strong> ${name}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`,
    company ? `<p><strong>Company:</strong> ${company}</p>` : null,
    `<p><strong>Message:</strong></p>`,
    `<p>${message.replace(/\n/g, "<br />")}</p>`,
    `<p><strong>Timestamp (UTC):</strong> ${submittedAt}</p>`,
    `<p><strong>IP:</strong> ${clientIp}</p>`,
  ].filter(Boolean);

  try {
    await transporter.sendMail({
      to: contactTo,
      from: `${contactFromName} <${contactFrom}>`,
      replyTo: `${name} <${email}>`,
      subject,
      text: textLines.join("\n"),
      html: htmlLines.join("\n"),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    const err = error as { message?: string; code?: string; response?: string };
    console.error("[contact] Email send failed", {
      message: err?.message,
      code: err?.code,
      response: err?.response,
    });
    return NextResponse.json(
      { ok: false, error: siteContent.contact.apiMessages.serverError },
      { status: 500 }
    );
  }
}
