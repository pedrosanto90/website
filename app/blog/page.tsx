import data from '@/utils/consts';
import Footer from '@/components/Footer';
import BlogPosts from '@/components/BlogPosts';

export default function BlogPage() {
  const blog = data.blog;
  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
        <main className="container mx-auto px-6 py-20 md:py-32">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {blog.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {blog.sub_title}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            {blog.description}
          </p>
          <BlogPosts />
        </main>
        <Footer />
      </div>
  );
}
