import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const getLinkClasses = ({ isActive }) =>
    `transition-all duration-300 font-medium ${
      isActive
        ? "text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
        : "text-zinc-400 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-lg flex justify-between items-center px-8 py-4">
        <Link to="/" className="group">
          <h1 className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            Huzaifa's Academy
          </h1>
        </Link>

        {/* //? With this using anchor tag, the page will refresh every time we click on the link, we can use link instead for single page application */}
        {/* <div className="flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="/cources" className="hover:text-white transition-colors">
            Courses
          </a>
          <a href="/classroom" className="hover:text-white transition-colors">
            Classroom
          </a>
          <a href="/bootcamp" className="hover:text-white transition-colors">
            Bootcamp
          </a>
          <a href="/product" className="hover:text-white transition-colors">
            Product
          </a>
        </div> */}

        {/* //? Link is a component that is provided by react-router-dom, it is used to navigate to different routes without refreshing the page */}
        {/* <div className="flex items-center gap-8"> */}
        {/* <Link
            to="/"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            to="/cources"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Courses
          </Link>
          <Link
            to="/classroom"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            ClassRoom
          </Link>
          <Link
            to="/bootcamp"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Bootcamp
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Product
          </Link>
        </div> */}

        {/* //? Navlink gives us the same functionality as link but it also provides us with the active class */}

        <div className="flex items-center gap-8">
          <NavLink to="/" className={getLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/cources" className={getLinkClasses}>
            Courses
          </NavLink>
          <NavLink to="/classroom" className={getLinkClasses}>
            ClassRoom
          </NavLink>
          <NavLink to="/bootcamp" className={getLinkClasses}>
            Bootcamp
          </NavLink>
          <NavLink to="/product" className={getLinkClasses}>
            Product
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/5 text-sm font-semibold transition-all cursor-pointer">
            Sign In
          </button>
          <div className="h-10 w-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 ring-2 ring-white/20 flex items-center justify-center text-xs font-bold shadow-lg">
            HQ
          </div>
        </div>
      </div>
    </nav>
  );
};

// Start Helper for Link Home Title
import { Link } from "react-router-dom";

export default Navbar;
