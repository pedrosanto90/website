import data from "@/utils/consts";
import CTAButtons from "@/components/ui/CTAButtons";
import siteContent from "@/data/content";

export default function Hero() {
  return (
    <section className="container mx-auto px-6 py-20 md:py-28">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          {data.basic.name}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          {siteContent.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-5 max-w-3xl mx-auto">
          {siteContent.hero.subheadline}
        </p>
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          {siteContent.hero.differentiator}
        </p>
        <CTAButtons />
      </div>
    </section>
  );
}
