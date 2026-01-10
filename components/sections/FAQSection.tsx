import faq from "@/data/faq";
import siteContent from "@/data/content";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              {siteContent.faq.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              {siteContent.faq.subtitle}
            </p>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group border border-gray-200 rounded-xl bg-white p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  <div className="flex items-center justify-between">
                    <span>{item.question}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </div>
                </summary>
                <p className="text-gray-700 mt-4">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
