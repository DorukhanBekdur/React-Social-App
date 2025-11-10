import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Trends from "./components/Trends";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-6xl flex">
        <aside className="w-1/5 border-r border-slate-200 p-4">
          <Sidebar />
        </aside>

        <main className="w-3/5 border-r border-slate-200">
          <Feed />
        </main>

        <aside className="w-1/5 p-4">
          <Trends />
        </aside>
      </div>
    </div>
  );
}

export default App;
