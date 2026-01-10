"use client";

import type { FormEvent } from "react";
import { useRef, useState } from "react";
import data from "@/utils/consts";
import siteContent from "@/data/content";

type FieldErrors = Partial<{
  name: string;
  email: string;
  message: string;
}>;
export default function Contact() {
  const contactInfo = data.contacts;
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const errors: FieldErrors = {};
    if (name.length < 2) {
      errors.name = siteContent.contact.form.validation.name;
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValid) {
      errors.email = siteContent.contact.form.validation.email;
    }
    if (message.length < 10) {
      errors.message = siteContent.contact.form.validation.message;
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus("error");
      setStatusMessage(siteContent.contact.form.invalidMessage);
      const firstInvalid = form.querySelector<HTMLElement>(
        "[aria-invalid='true']"
      );
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    setFieldErrors({});

    setStatus("sending");
    setStatusMessage("");

    const submit = async () => {
      const honeypot = String(formData.get("company_website") ?? "");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            honeypot,
          }),
        });

        const payload = await response.json().catch(() => null);

        if (response.ok && payload?.ok) {
          form.reset();
          setStatus("success");
          setStatusMessage(siteContent.contact.form.successMessage);
          statusRef.current?.focus();
          return;
        }

        setStatus("error");
        setStatusMessage(
          payload?.error ?? siteContent.contact.form.errorMessage
        );
        statusRef.current?.focus();
      } catch {
        setStatus("error");
        setStatusMessage(siteContent.contact.form.errorMessage);
        statusRef.current?.focus();
      }
    };

    void submit();
  };

  const isSending = status === "sending";

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              {siteContent.contact.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {siteContent.contact.subtitle}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="text-sm font-medium text-gray-700">
                {siteContent.contact.form.nameLabel}
                <input
                  type="text"
                  name="name"
                  minLength={2}
                  placeholder={siteContent.contact.form.namePlaceholder}
                  required
                  disabled={isSending}
                  aria-invalid={Boolean(fieldErrors.name)}
                  aria-describedby="contact-name-error"
                  className={`mt-2 w-full rounded-lg border px-4 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    fieldErrors.name ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {fieldErrors.name && (
                  <span
                    id="contact-name-error"
                    className="mt-2 block text-xs text-red-600"
                  >
                    {fieldErrors.name}
                  </span>
                )}
              </label>
              <label className="text-sm font-medium text-gray-700">
                {siteContent.contact.form.emailLabel}
                <input
                  type="email"
                  name="email"
                  placeholder={siteContent.contact.form.emailPlaceholder}
                  required
                  disabled={isSending}
                  aria-invalid={Boolean(fieldErrors.email)}
                  aria-describedby="contact-email-error"
                  className={`mt-2 w-full rounded-lg border px-4 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                    fieldErrors.email ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {fieldErrors.email && (
                  <span
                    id="contact-email-error"
                    className="mt-2 block text-xs text-red-600"
                  >
                    {fieldErrors.email}
                  </span>
                )}
              </label>
            </div>
            <label className="block text-sm font-medium text-gray-700 mt-6">
              {siteContent.contact.form.messageLabel}
              <textarea
                name="message"
                rows={5}
                placeholder={siteContent.contact.form.messagePlaceholder}
                required
                disabled={isSending}
                minLength={10}
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby="contact-message-error"
                className={`mt-2 w-full rounded-lg border px-4 py-2 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
                  fieldErrors.message ? "border-red-400" : "border-gray-300"
                }`}
              />
              {fieldErrors.message && (
                <span
                  id="contact-message-error"
                  className="mt-2 block text-xs text-red-600"
                >
                  {fieldErrors.message}
                </span>
              )}
            </label>
            <label className="sr-only" htmlFor="company_website">
              {siteContent.contact.form.honeypotLabel}
            </label>
            <input
              id="company_website"
              name="company_website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              className="sr-only"
            />
            <div className="mt-8 flex flex-col gap-6">
              <button
                type="submit"
                disabled={isSending}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {isSending
                  ? siteContent.contact.form.sendingLabel
                  : siteContent.contact.form.submitLabel}
              </button>
              <div className="text-sm text-gray-500 text-center">
                {siteContent.contact.form.trustNote}{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {siteContent.contact.form.directEmailLabel} {contactInfo.email}
                </a>
              </div>
              <div
                ref={statusRef}
                tabIndex={-1}
                role={status === "error" ? "alert" : "status"}
                aria-live={status === "error" ? "assertive" : "polite"}
                className={`text-sm ${
                  status === "success"
                    ? "text-green-600"
                    : status === "error"
                      ? "text-red-600"
                      : "text-gray-600"
                }`}
              >
                {statusMessage}
              </div>
              <div className="text-sm text-gray-600 text-center">
                {siteContent.contact.quickLinks.prefix}{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {contactInfo.email}
                </a>{" "}
                {siteContent.contact.quickLinks.middle}{" "}
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {siteContent.contact.quickLinks.linkedInLabel}
                </a>{" "}
                {siteContent.contact.quickLinks.and}{" "}
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {siteContent.contact.quickLinks.githubLabel}
                </a>
                {siteContent.contact.quickLinks.suffix}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
