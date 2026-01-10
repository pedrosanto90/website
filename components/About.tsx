import data from "@/utils/consts";
import siteContent from "@/data/content";
export default function About() {
  const aboutInfo = {
    firstLine: data.about.first_line,
    secondLine: data.about.second_line,
  };
  return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              {siteContent.about.title}
            </h2>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-center mb-6">
                {aboutInfo.firstLine}
              </p>
              <p className="text-center">
                {aboutInfo.secondLine}
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
