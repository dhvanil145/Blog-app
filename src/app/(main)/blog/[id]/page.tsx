import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  views: number;
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
};



const PostDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const details:Post = await response.json()
  return (
  <div className="max-w-3xl mx-auto mt-16 border border-gray-300 shadow-md rounded-lg p-4 flex flex-col gap-5">
    <h2 className="text-2xl font-bold">{details.title}</h2>
    <p>{details.body}</p>
    <div>
        {
            details.tags.map((tag) => {
                return (
                    <span key={details.id}>#{tag}</span>
                )
            })
        }

    </div>
    <div>likes 👍🏻: {details.reactions.likes}</div>
    <div>dislike 👎🏻:{details.reactions.dislikes}</div>
    <Link href="/blog" className="border rounded-md self-start px-2.5 py-1.5 bg-black text-white">Back to blog</Link>
  </div>
);
};

export default PostDetails;
