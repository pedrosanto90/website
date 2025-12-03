import data from "../utils/consts";

export default function Hero() {
  const info = {
    name: data.basic.name,
    title: data.basic.title,
    description: data.basic.descrition,
  }
  return (
    <section className="container mx-auto px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
        {info.name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
        {info.title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
        {info.description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a 
            href="#contact" 
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
          >
            View Projects
          </a>
          <a 
            href="/blog" 
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
          >
            Blog
          </a>
        </div>
      </div>
    </section>
  );
}
