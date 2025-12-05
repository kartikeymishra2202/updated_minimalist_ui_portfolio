import React from "react";
import {
  Layout,
  
  Monitor,
  Smartphone,
  CheckCircle2,
 
  Database,
  Code,
  Server,
  GitBranch,
  Cloud,
} from "lucide-react";

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <section
      id="about"
      className={`py-24 px-6 ${isDark ? "bg-[#09090b]" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="lg:col-span-5 space-y-8">
          <h2
            className={`text-4xl font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            About Me
          </h2>

          <div className="relative group">
            <div
              className={`aspect-square rounded-[2.5rem] overflow-hidden border-[8px] shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] ${
                isDark ? "border-white/5" : "border-black/5"
              }`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/143606720?v=4"
                alt="Kartikey Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute -z-10 top-8 -left-8 w-full h-full rounded-[2.5rem] border-2 hidden md:block opacity-30 transition-all duration-500 group-hover:top-6 group-hover:-left-6 ${
                isDark ? "border-white" : "border-black"
              }`}
            ></div>
          </div>

          <div
            className={`space-y-6 text-lg leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <p>
              I’m Kartikey Mishra — a full-stack developer specializing in
              building scalable, modern web applications using Next.js, Node.js,
              TypeScript, and MongoDB/PostgreSQL.
            </p>

            <p>
              I’ve worked on real-time chat systems, AI-powered content
              platforms, and full-stack applications with secure authentication,
              dashboards, analytics, and seamless user experiences. I enjoy
              solving complex engineering problems and turning ideas into
              production-ready products.
            </p>

            <p
              className={`italic font-medium border-l-4 pl-6 py-2 rounded-r-xl ${
                isDark
                  ? "text-white border-white bg-white/5"
                  : "text-black border-black bg-black/5"
              }`}
            >
              Fun Fact: I build and debug best late at night with music
              playlists that keep me in deep-focus mode.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-7 space-y-10 lg:pt-16">
          <div
            className={`p-10 rounded-[2.5rem] border ${
              isDark
                ? "bg-[#18181b] border-gray-800"
                : "bg-gray-50 border-gray-200"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-8 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Skills & Tools
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                { name: "Next.js", icon: <Layout size={18} /> },
                { name: "React.js", icon: <Monitor size={18} /> },
                { name: "TypeScript", icon: <Code size={18} /> },
                { name: "Node.js", icon: <Server size={18} /> },
                { name: "Express.js", icon: <Server size={18} /> },
                { name: "MongoDB", icon: <Database size={18} /> },
                { name: "PostgreSQL", icon: <Database size={18} /> },
                { name: "Prisma ORM", icon: <Database size={18} /> },
                { name: "Tailwind CSS", icon: <Layout size={18} /> },
                { name: "NextAuth.js", icon: <CheckCircle2 size={18} /> },
                { name: "WebSockets", icon: <Smartphone size={18} /> },
                { name: "Socket.io", icon: <Smartphone size={18} /> },
                { name: "REST APIs", icon: <Server size={18} /> },
                { name: "Git & GitHub", icon: <GitBranch size={18} /> },
                { name: "Docker", icon: <Cloud size={18} /> },
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className={`
                    flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-1 cursor-default
                    ${
                      isDark
                        ? "bg-[#27272a] text-gray-200 border border-white/5 hover:bg-[#3f3f46]"
                        : "bg-white text-gray-800 border border-gray-200 hover:shadow-md hover:border-gray-300"
                    }
                  `}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div
            className={`p-10 rounded-[2.5rem] shadow-xl transform transition-transform hover:scale-[1.01] ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Approach</h3>
            <p className="text-lg leading-relaxed font-medium opacity-90">
              I focus on building clean, scalable systems that balance great
              performance with user-centered design. I prefer writing
              maintainable, type-safe code and love collaborating with teams to
              ship reliable, production-ready features. Continuous learning and
              improvement drive my development workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
