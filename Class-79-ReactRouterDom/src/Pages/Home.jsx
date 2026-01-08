import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-24 px-8 flex items-center justify-center overflow-hidden relative">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center gap-8">
        <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-zinc-400 backdrop-blur-sm">
          🚀 Launching New Cohorts Soon
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Master the Art of <br />
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Modern Web Development
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Join an immersive learning experience designed to take you from
          beginner to pro. Real-world projects, expert mentorship, and a
          community of builders.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            to="/bootcamp"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Explore Bootcamps
          </Link>
          <Link
            to="/classroom"
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors font-semibold backdrop-blur-sm"
          >
            Visit Classroom
          </Link>
        </div>

        {/* Simple Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-16 pt-8 border-t border-white/5 w-full">
          <div>
            <h3 className="text-3xl font-bold text-white">5k+</h3>
            <p className="text-zinc-500 text-sm">Students</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">100+</h3>
            <p className="text-zinc-500 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">50+</h3>
            <p className="text-zinc-500 text-sm">Mentors</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white">4.9</h3>
            <p className="text-zinc-500 text-sm">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
