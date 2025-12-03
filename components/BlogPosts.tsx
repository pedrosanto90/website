import posts from "../posts/posts";

export default function BlogPosts() {
  const blogPosts = posts || [];
  return (
    <div className="container mx-auto px-6 py-10 flex flex-col content-left items-center">
      {blogPosts.map((post, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h2>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700 mt-4">{post.date}</p>
        </div>
      ))}
    </div>
  );
}
