import siteContent from "@/data/content";

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>
          &copy; {new Date().getFullYear()} {siteContent.footer.rights}
        </p>
      </div>
    </footer>
  )
}
