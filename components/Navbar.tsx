import data from "@/utils/consts";
import { bookingUrl } from "@/utils/cta";
import siteContent from "@/data/content";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav
        aria-label={siteContent.nav.ariaLabel}
        className="container mx-auto px-6 py-4 flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center"
      >
        <div className="flex flex-col md:justify-self-start">
          <a
            href="#"
            className="text-lg font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {data.basic.name}
          </a>
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
            {data.basic.title}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-gray-600 md:justify-self-center">
          {siteContent.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full border border-transparent text-gray-600 transition hover:border-gray-200 hover:text-gray-900 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={bookingUrl}
          className="hidden md:inline-flex md:justify-self-end px-5 py-2.5 rounded-lg border border-blue-600 bg-blue-600 text-white text-sm font-semibold transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {siteContent.nav.ctaLabel}
        </a>
        <a
          href={bookingUrl}
          className="md:hidden inline-flex justify-center px-5 py-2.5 rounded-lg border border-blue-600 bg-blue-600 text-white text-sm font-semibold transition hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          {siteContent.nav.ctaLabel}
        </a>
      </nav>
    </header>
  );
}
