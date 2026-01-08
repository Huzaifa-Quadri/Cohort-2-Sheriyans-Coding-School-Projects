import { useParams, Link } from "react-router-dom";

const About = () => {
  const { id } = useParams();

  const profiles = {
    huzaifa: {
      name: "Huzaifa",
      role: "Lead Instructor",
      bio: "Passionate about teaching and building scalable web applications.",
      image: "👨‍💻",
    },
    sheryians: {
      name: "Sheryians Coding School",
      role: "Education Platform",
      bio: "Transforming careers through code.",
      image: "🚀",
    },
  };

  const profile = profiles[id] || {
    name: "Unknown Profile",
    role: "N/A",
    bio: "Profile not found.",
    image: "❓",
  };

  return (
    <div className="min-h-screen w-full bg-[#09090b] text-white pt-28 px-8 flex flex-col items-center justify-center text-center">
      <div className="w-32 h-32 rounded-full bg-zinc-800 border-2 border-white/10 flex items-center justify-center text-6xl shadow-2xl mb-8">
        {profile.image}
      </div>

      <h1 className="text-5xl font-bold mb-2 capitalize">{profile.name}</h1>
      <p className="text-blue-400 font-medium text-lg tracking-wide uppercase mb-6">
        {profile.role}
      </p>

      <p className="text-zinc-400 text-xl max-w-2xl leading-relaxed mb-12">
        {profile.bio}
      </p>

      <Link
        to="/"
        className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default About;
