import { useState } from "react";
import { posts as initialPosts } from "../data/posts";
import PostCard from "./PostCard";
import PostComposer from "./PostComposer";

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (text) => {
    if (!text.trim()) return;
    const newPost = {
      id: Date.now(),
      author: {
        name: "Dorukhan",
        username: "dorukhanbekdur",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      content: text,
      createdAt: "now",
      likes: 0,
      comments: 0,
      reposts: 0,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <div className="border-b border-slate-200 p-4">
        <h2 className="text-lg font-semibold">Home</h2>
      </div>

      <PostComposer onPost={handleAddPost} />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
