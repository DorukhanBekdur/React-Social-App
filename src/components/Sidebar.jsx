export default function Sidebar() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">React Social App</h1>
      <nav className="flex flex-col gap-2">
        <button className="text-left px-3 py-2 rounded hover:bg-slate-200 cursor-pointer">
          Home
        </button>
        <button className="text-left px-3 py-2 rounded hover:bg-slate-200 cursor-pointer">
          Explore
        </button>
        <button className="text-left px-3 py-2 rounded hover:bg-slate-200 cursor-pointer">
          Notifications
        </button>
        <button className="text-left px-3 py-2 rounded hover:bg-slate-200 cursor-pointer">
          Profile
        </button>
      </nav>
      <button className="mt-2 bg-[#31694E] text-white py-2 rounded-full hover:bg-[#658C58] cursor-pointer">
        New Post
      </button>
    </div>
  );
}
