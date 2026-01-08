const Cources = () => {
  const courses = [
    {
      title: "React Native for Beginners",
      category: "Mobile Dev",
      level: "Beginner",
      duration: "12 Hours",
      chapters: 8,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Advanced Backend Arch",
      category: "Backend",
      level: "Advanced",
      duration: "24 Hours",
      chapters: 15,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps Zero to Hero",
      category: "DevOps",
      level: "Intermediate",
      duration: "18 Hours",
      chapters: 12,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "UI/UX Design Masterclass",
      category: "Design",
      level: "All Levels",
      duration: "10 Hours",
      chapters: 6,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Machine Learning A-Z",
      category: "AI/ML",
      level: "Advanced",
      duration: "40 Hours",
      chapters: 20,
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Cybersecurity Basics",
      category: "Security",
      level: "Beginner",
      duration: "8 Hours",
      chapters: 5,
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-28 px-8 pb-12 flex justify-center">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore Our Catalog
          </h1>
          <p className="text-zinc-400 text-lg">
            Choose from over 100+ premium courses crafted by experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:translate-y-[-5px]"
            >
              <div
                className={`h-40 w-full bg-linear-to-r ${course.color} opacity-80 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full text-zinc-300 border border-white/5">
                    {course.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {course.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-zinc-400 mt-4">
                  <span>🕒 {course.duration}</span>
                  <span>📚 {course.chapters} Chapters</span>
                </div>
                <button className="w-full mt-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 font-semibold transition-colors">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cources;
