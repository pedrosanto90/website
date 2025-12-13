"use client";
import posts from "@/posts/posts";
import { useParams } from "next/navigation";

interface PostPageProps {
  params: {
    id: string;
  };
}

export default function PostPage() {
  const params = useParams();
  const postId = params.id;
  const post = posts.find((p) => p.id.toString() === postId);
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl font-bold text-gray-800">Post not found</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-4xl font-bold text-gray-800">{post.title}</h1>
    </div>
  );
}
