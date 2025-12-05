import React from "react";

const PenNibIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M100 180 L130 130 Q160 80 160 50 A60 60 0 0 0 40 50 Q40 80 70 130 Z" />
    <circle cx="100" cy="70" r="20" />
    <line x1="100" y1="180" x2="100" y2="130" />
  </svg>
);

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  return (
    <section
      id="home"
      className={`
      relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20
      ${isDark ? "bg-[#09090b] text-white" : "bg-[#fafafa] text-[#111111]"}
    `}
    >
      {/* Background Decor */}
      <div
        className={`absolute left-[-10%] top-1/4 w-64 h-64 md:w-96 md:h-96 opacity-[0.03] rotate-[-15deg] transition-colors duration-500 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <PenNibIcon className="w-full h-full" />
      </div>
      <div
        className={`absolute right-[-10%] bottom-1/4 w-64 h-64 md:w-96 md:h-96 opacity-[0.03] rotate-15 transition-colors duration-500 ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <PenNibIcon className="w-full h-full" />
      </div>

      <div className="z-10 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div
          className={`md:hidden w-32 h-32 mx-auto mb-6 rounded-2xl overflow-hidden border-4 shadow-2xl ${
            isDark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <img
            src="[https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400](https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400)"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={`
          inline-flex items-center gap-3 backdrop-blur-md px-5 py-2.5 rounded-full border mb-4 transition-colors cursor-default
          ${
            isDark
              ? "bg-white/5 border-white/10 text-white"
              : "bg-black/5 border-black/5 text-black"
          }
        `}
        >
          <div className="w-10 h-12 rounded-lg overflow-hidden border-2 border-white/20 shadow-sm hidden md:block">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNiCMq-LRwU1zZZGW22r-3v4_7837Zo6_zQw&s"
              alt="Small Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-lg tracking-wide">
            Hi, I'm Kartikey 👋
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.15]">
          Building Scalable <br />
          Full-Stack Experiences <br />
          <span className="relative inline-block mt-2">
            For the Modern Web
            <svg
              className={`absolute -bottom-3 left-0 w-full h-4 ${
                isDark ? "text-gray-600" : "text-gray-400"
              }`}
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 12 100 5"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          className={`text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          MERN + Next.js full-stack developer with experience building scalable
          web apps, real-time systems, and AI-powered platforms. I specialize in
          Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and modern frontend
          engineering.
        </p>

        <div className="pt-8">
          <button
            className={`
            font-extrabold text-lg px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg
            ${
              isDark
                ? "bg-white text-black hover:bg-gray-200 shadow-white/10"
                : "bg-black text-white hover:bg-gray-800 shadow-black/20"
            }
          `}
          >
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
