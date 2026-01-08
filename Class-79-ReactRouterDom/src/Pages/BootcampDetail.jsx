import React from "react";
import { useParams, Link } from "react-router-dom";

const BootcampDetail = () => {
  const { id } = useParams();

  // Mock Data Lookup
  const getBootcampDetails = (id) => {
    const details = {
      "fullstack-web": {
        title: "Full Stack Web Development",
        description: "Become a MERN stack wizard in 6 months.",
        modules: [
          "HTML/CSS/JS",
          "React & Redux",
          "Node.js & Express",
          "MongoDB & Databases",
          "Deployment & DevOps",
        ],
      },
      "data-science": {
        title: "Data Science & AI",
        description: "Master Python, ML, and Deep Learning.",
        modules: [
          "Python Basics",
          "Data Analysis (Pandas)",
          "Machine Learning",
          "Deep Learning",
          "AI Projects",
        ],
      },
      "cyber-security": {
        title: "Cyber Security Specialist",
        description: "Learn ethical hacking and network defense.",
        modules: [
          "Networking Basics",
          "Ethical Hacking",
          "Cryptography",
          "Network Security",
          "Penetration Testing",
        ],
      },
    };
    return (
      details[id] || {
        title: "Unknown Bootcamp",
        description: "This bootcamp does not exist.",
        modules: [],
      }
    );
  };

  const course = getBootcampDetails(id);

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-28 px-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <Link
          to="/bootcamp"
          className="inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors mb-8"
        >
          ← Back to Bootcamps
        </Link>

        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900 border border-white/5 relative overflow-hidden">
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4">
              BOOTCAMP
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
              {course.title}
            </h1>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl">
              {course.description}
            </p>

            <div className="mt-12">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                Curriculum Highlights
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.modules.length > 0 ? (
                  course.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 border border-white/5"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <span className="font-medium text-zinc-300">{mod}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-red-400">No details available.</p>
                )}
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <button className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-lg shadow-blue-500/20">
                Enroll Now
              </button>
              <button className="px-8 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold transition-all border border-white/10">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default BootcampDetail;
