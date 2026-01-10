import data from "./consts";
import siteContent from "@/data/content";

const quoteSubject = siteContent.contact.mail.subject;
const quoteBody = siteContent.contact.mail.bodyLines.join("\n");

export const bookingUrl = "#contact"; // Replace with your Calendly or booking link.

export const quoteMailto = `mailto:${data.contacts.email}?subject=${encodeURIComponent(
  quoteSubject
)}&body=${encodeURIComponent(quoteBody)}`;

export const contactEmail = data.contacts.email;
