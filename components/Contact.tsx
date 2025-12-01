import data from '../utils/consts';
export default function Contact() {
  const contactInfo = data.contacts;
  return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              I&apos;m currently available for freelance projects. 
              Let&apos;s discuss how I can help bring your ideas to life.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Email Me
              </a>
              <a 
                href={contactInfo.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
              >
                GitHub
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
