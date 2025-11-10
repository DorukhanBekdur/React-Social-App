export default function PostCard({ post }) {
  return (
    <div className="border-b border-slate-200 p-4 flex gap-3">
      <img
        src={post.author.avatar}
        alt={post.author.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{post.author.name}</span>
          <span className="text-slate-500 text-sm">
            @{post.author.username}
          </span>
          <span className="text-slate-400 text-sm">· {post.createdAt}</span>
        </div>
        <p className="mt-1">{post.content}</p>
        <div className="flex gap-6 mt-3 text-slate-500 text-sm">
          <button>💬 {post.comments}</button>
          <button>🔁 {post.reposts}</button>
          <button>❤️ {post.likes}</button>
        </div>
      </div>
    </div>
  );
}
