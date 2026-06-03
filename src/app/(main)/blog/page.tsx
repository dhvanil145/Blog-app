import { Button } from "@/components/ui/button";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
  views: number;
  userId: number;
};
type PostResponse = {
  posts: Post[];
};

const Blog = async () => {
  new Promise((resolve) => setTimeout((resolve),3000))
  const response = await fetch("https://dummyjson.com/posts");
  const data: PostResponse = await response.json();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 mt-16">
        {data.posts.map((users) => {
          return (
            <Link key={users.id} href={`/blog/${users.id}`}>
                <div
                  
                  className="border border-gray-300 rounded-lg shadow-lg p-4 my-4 h-48 overflow-hidden"
                >
                  <h2 className="text-2xl font-bold mb-4">{users.title}</h2>
                  <p>{users.body}</p>
                </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
