import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-[#09090b] text-white flex flex-col items-center justify-center text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-[12rem] md:text-[20rem] font-bold leading-none text-transparent bg-clip-text bg-linear-to-b from-zinc-800 to-zinc-950 select-none">
          404
        </h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Page Not Found
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link
            to="/"
            className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors inline-block shadow-lg shadow-white/10"
          >
            Back to Homepage
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-linear-to-t from-black to-transparent"></div>
    </div>
  );
};

export default NotFound;
