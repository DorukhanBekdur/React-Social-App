import { useState } from "react";

export default function PostComposer({ onPost }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onPost(text);
    setText("");
  };

  return (
    <div className="border-b border-slate-200 p-4 flex gap-3">
      <img
        src="https://i.pravatar.cc/100?img=1"
        alt="avatar"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={2}
          placeholder="What's happening?"
          className="w-full resize-none outline-none bg-transparent"
        />
        <div className="flex justify-end mt-2">
          <button
            onClick={handleSubmit}
            className="bg-[#31694E] text-white px-4 py-1 rounded-full hover:bg-[#658C58] text-sm cursor-pointer"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
