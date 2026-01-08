import React from "react";
import { Link } from "react-router-dom";

const Bootcamp = () => {
  const bootcamps = [
    {
      id: "fullstack-web",
      title: "Full Stack Web Development",
      description: "Become a MERN stack wizard in 6 months.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "data-science",
      title: "Data Science & AI",
      description: "Master Python, ML, and Deep Learning.",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "cyber-security",
      title: "Cyber Security Specialist",
      description: "Learn ethical hacking and network defense.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-28 px-8 flex justify-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold mb-4">Available Bootcamps</h1>
        <p className="text-zinc-400 mb-12 text-lg">
          Intensive, project-based learning programs to fast-track your career.
        </p>

        <div className="grid gap-6">
          {bootcamps.map((camp) => (
            <div
              key={camp.id}
              className="relative group p-1 rounded-2xl bg-zinc-900 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-linear-to-r ${camp.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              ></div>
              <div className="relative bg-zinc-950 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between border border-white/5 group-hover:border-transparent transition-colors">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{camp.title}</h2>
                  <p className="text-zinc-400">{camp.description}</p>
                </div>
                <Link
                  to={`/bootcamp/${camp.id}`}
                  className="mt-4 md:mt-0 px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-zinc-200 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bootcamp;
