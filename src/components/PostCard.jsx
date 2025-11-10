import { useState } from "react";
import { MessageCircle, Repeat, Heart } from "lucide-react";

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(false);
  const [reposted, setReposted] = useState(false);

  return (
    <div className="border-b border-slate-200 p-4 flex gap-3 bg-white/60">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-10 h-10 rounded-full"
      />

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-textDark">
            {post.author.name}
          </span>
          <span className="text-slate-500 text-sm">
            @{post.author.username}
          </span>
          <span className="text-slate-400 text-sm">· {post.createdAt}</span>
        </div>

        <p className="mt-1 text-textDark">{post.content}</p>

        {/* Alt Aksiyon Buttonları */}
        <div className="flex gap-8 mt-3 text-slate-500 text-sm select-none">
          <button
            className="flex items-center gap-1 group transition-colors cursor-pointer"
            title="Comment"
          >
            <MessageCircle
              size={18}
              className="transition-colors group-hover:text-[#4FA88F]"
            />
            <span className="group-hover:text-[#4FA88F]">{post.comments}</span>
          </button>

          <button
            onClick={() => setReposted((prev) => !prev)}
            className={`flex items-center gap-1 group transition-colors cursor-pointer ${
              reposted ? "repost-bounce" : ""
            }`}
            title="Repost"
          >
            <Repeat
              size={18}
              className={`transition-colors ${
                reposted ? "text-[#4FA88F]" : "group-hover:text-[#4FA88F]"
              }`}
            />
            <span
              className={`transition-colors ${
                reposted ? "text-[#4FA88F]" : "group-hover:text-[#4FA88F]"
              }`}
            >
              {post.reposts + (reposted ? 1 : 0)}
            </span>
          </button>

          <button
            onClick={() => setLiked((prev) => !prev)}
            className={`flex items-center gap-1 group transition transform cursor-pointer ${
              liked ? "scale-110" : "hover:scale-110"
            }`}
            title="Like"
          >
            <Heart
              size={18}
              fill={liked ? "#ef4444" : "none"}
              className={`transition-colors ${
                liked ? "text-red-500" : "group-hover:text-[#4FA88F]"
              }`}
            />
            <span
              className={`transition-colors ${
                liked ? "text-red-500" : "group-hover:text-[#4FA88F]"
              }`}
            >
              {post.likes + (liked ? 1 : 0)}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
