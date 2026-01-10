import { bookingUrl, quoteMailto } from "@/utils/cta";
import siteContent from "@/data/content";

export default function CTAButtons({
  align = "center",
  className = "",
}: Readonly<{
  align?: "left" | "center" | "right";
  className?: string;
}>) {
  const alignment =
    align === "left"
      ? "justify-start"
      : align === "right"
        ? "justify-end"
        : "justify-center";

  return (
    <div className={`flex flex-wrap gap-4 ${alignment} ${className}`.trim()}>
      <a
        href={bookingUrl}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {siteContent.ctaButtons.primaryLabel}
      </a>
      <a
        href={quoteMailto}
        className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        {siteContent.ctaButtons.secondaryLabel}
      </a>
    </div>
  );
}
