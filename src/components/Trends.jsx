export default function Trends() {
  const trends = [
    { title: "#react", tweets: "12.3K" },
    { title: "#javascript", tweets: "8.2K" },
    { title: "#frontend", tweets: "4.9K" },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl">
      <h3 className="font-semibold p-4">Trends</h3>
      <ul>
        {trends.map((item) => (
          <li
            key={item.title}
            className="px-4 py-3 hover:bg-slate-100 cursor-pointer"
          >
            <p className="font-medium">{item.title}</p>
            <p className="text-slate-400 text-sm">{item.tweets} posts</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
