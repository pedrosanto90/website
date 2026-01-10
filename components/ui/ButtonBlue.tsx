export default function ButtonBlue({
  link,
  text 
}: Readonly<{
  link: string;
  text: string;
}>) {
  return (
    <a 
      href={link} 
      className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      {text}
    </a>
  )
}
