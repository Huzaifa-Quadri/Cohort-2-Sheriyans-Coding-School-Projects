const ClassRoom = () => {
  const schedule = [
    {
      time: "10:00 AM",
      subject: "Frontend Mastery",
      topic: "React Hooks Deep Dive",
      status: "Live",
      color: "border-l-green-500",
    },
    {
      time: "02:00 PM",
      subject: "Backend Engineering",
      topic: "Node.js Streams",
      status: "Upcoming",
      color: "border-l-blue-500",
    },
    {
      time: "05:00 PM",
      subject: "System Design",
      topic: "Load Balancers",
      status: "Upcoming",
      color: "border-l-purple-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-28 px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-2">Classroom Dashboard</h1>
        <p className="text-zinc-400 mb-10">
          Manage your daily learning schedule
        </p>

        <div className="grid gap-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`bg-zinc-900/50 border border-white/5 p-6 rounded-xl flex items-center justify-between hover:bg-zinc-900 transition-colors ${item.color} border-l-4`}
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-medium text-zinc-500">
                    {item.time}
                  </span>
                  {item.status === "Live" && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-500 animate-pulse">
                      LIVE
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold">{item.subject}</h3>
                <p className="text-zinc-400">{item.topic}</p>
              </div>
              <button className="px-5 py-2 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors">
                {item.status === "Live" ? "Join Class" : "View Details"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-linear-to-br from-indigo-500/10 to-purple-500/10 border border-white/5 text-center">
          <h3 className="text-2xl font-bold mb-2">Weekly Assessment</h3>
          <p className="text-zinc-400 mb-6">
            Test your knowledge from the past week's modules.
          </p>
          <button className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
