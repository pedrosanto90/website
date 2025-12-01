import Image from 'next/image'

export default function ProjectCard({
  name,
  description,
  technologies,
  link,
  image,
}: Readonly<{
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image?: string;
}>) {
  return(
    <a href = {link} target = '_black' className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <Image 
          src={image || '/placeholder.png'}
          alt={name}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
        {name}
        </h3>
        <p className="text-gray-600 mb-4">
        {description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{tech}</span>
          ))}
        </div>
      </div>
    </a>
  )
}
