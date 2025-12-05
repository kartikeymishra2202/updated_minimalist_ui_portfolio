import React from "react";
import {
  Linkedin,
  Instagram,
  Twitter,
  Layout,
  Smartphone,
  Mail,
  Download,
  Github,
} from "lucide-react";

interface ContactProps {
  isDark: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDark }) => {
  // Your real experience data
  const experience = [
    {
      id: 1,
      company: "Pear Solution (Remote)",
      role: "Web Developer Intern",
      period: "June 2025 – Aug 2025",
      type: "Internship",
    },
    {
      id: 2,
      company: "Technical Society",
      role: "Backend Lead",
      period: "2023 – Present",
      type: "Backend Experiance",
      description:
        "Leading backend development for multiple society projects, mentoring juniors, and designing Node.js + MongoDB based systems.",
    },
    {
      id: 3,
      company: "GenHub – AI Based Creator Collaboration Platform",
      role: "Full-Stack Developer",
      period: "2024 – Present",
      type: "Project Experience",
      description:
        "Building a real-time MERN + WebSocket based Creator collaboration platform with authentication, Post sharing, and live syncing.",
    },
    {
      id: 4,
      company: "ShareSphere – Community Sharing Platform",
      role: "Full-Stack Developer",
      period: "2024",
      type: "Project Experience",
      description:
        "Developed a MERN + Prisma + PostgreSQL product enabling users to borrow/lend items within their neighborhood.",
    },
    {
      id: 5,
      company: "Freelance / Personal Projects",
      role: "Full-Stack Developer",
      period: "2022 – Present",
      type: "Freelance",
      description:
        "Built multiple production-ready applications including authentication systems, portfolio websites, weather apps, and movie rating platforms.",
    },
  ];

  // Your real social media links
  const socials = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/kartikey-mishra-252877256/",
    },
    {
      name: "GitHub",
      icon: <Github size={22} />,
      href: "https://github.com/kartikeymishra2202",
    },
    {
      name: "Instagram",
      icon: <Instagram size={22} />,
      href: "https://instagram.com/",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={22} />,
      href: "https://twitter.com/",
    },
    {
      name: "WhatsApp",
      icon: <Smartphone size={22} />,
      href: "https://wa.me/91XXXXXXXXXX", // put your number 91xxxxxxxxxx
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 px-4 md:px-6 ${isDark ? "bg-[#09090b]" : "bg-gray-50"}`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-[3rem] p-8 md:p-16 ${
          isDark ? "bg-[#18181b]" : "bg-white shadow-xl"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT — EXPERIENCE */}
          <div>
            <div className="flex justify-between items-baseline mb-12 border-b border-gray-700/50 pb-6">
              <div>
                <h3
                  className={`text-4xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Work
                </h3>
                <h3
                  className={`text-4xl font-bold ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Experience
                </h3>
              </div>
              <span
                className={`text-sm font-mono tracking-wider ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              ></span>
            </div>

            <div className="space-y-10 relative pl-4">
              <div className="absolute left-[3px] top-3 bottom-10 w-0.5 bg-gray-700/50"></div>

              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-10 group">
                  <div
                    className={`absolute left-[-5px] top-2.5 w-4 h-4 rounded-full border-[3px] transition-colors duration-300 
                      ${
                        isDark
                          ? "border-[#18181b] bg-white group-hover:bg-gray-400"
                          : "border-white bg-black group-hover:bg-gray-700"
                      }
                    `}
                  ></div>

                  <h4
                    className={`text-xl font-bold mb-1 group-hover:opacity-70 transition-colors ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {exp.company}
                  </h4>

                  <p
                    className={`text-base font-medium mb-2 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {exp.role}
                  </p>

                  <div className="flex justify-between items-center text-sm">
                    <span
                      className={`${
                        isDark ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      {exp.period}
                    </span>

                    {exp.type && (
                      <span
                        className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isDark
                            ? "bg-[#27272a] text-gray-300"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {exp.type}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Resume Button */}
              <div className="pt-10 pl-10">
                <a
                  href="/kartikey_resume.pdf"
                  download
                  className={`
                    font-bold py-3.5 px-8 rounded-full flex items-center gap-3 hover:scale-105 transition-all shadow-lg text-sm uppercase tracking-wide w-fit
                    ${
                      isDark
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }
                  `}
                >
                  <Download size={18} /> Resume
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — SOCIALS + EMAIL */}
          <div>
            <div className="mb-12 border-b border-gray-700/50 pb-6">
              <h3
                className={`text-4xl font-bold mb-2 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                Connect
              </h3>
              <h3
                className={`text-4xl font-bold ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                With Me
              </h3>
            </div>

            <div className="space-y-6">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    flex items-center gap-6 group transition-all p-4 rounded-2xl
                    ${
                      isDark
                        ? "text-gray-300 hover:bg-white/5 hover:text-white"
                        : "text-gray-700 hover:bg-black/5 hover:text-black"
                    }
                  `}
                >
                  <span
                    className={`
                      p-3 rounded-xl transition-colors
                      ${
                        isDark
                          ? "bg-[#27272a] text-gray-400 group-hover:bg-white group-hover:text-black"
                          : "bg-gray-200 text-gray-600 group-hover:bg-black group-hover:text-white"
                      }
                    `}
                  >
                    {social.icon}
                  </span>

                  <span className="text-lg font-bold">{social.name}</span>
                </a>
              ))}
            </div>

            {/* EMAIL BOX */}
            <div
              className={`mt-12 p-8 rounded-[2rem] border relative overflow-hidden group transition-colors ${
                isDark
                  ? "bg-[#1f1f22] border-gray-800 hover:border-gray-700"
                  : "bg-gray-50 border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-6 transition-transform ${
                    isDark ? "bg-white text-black" : "bg-black text-white"
                  }`}
                >
                  <Mail size={28} strokeWidth={2.5} />
                </div>

                <h4
                  className={`font-bold text-xl mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Let's talk about your Project
                </h4>
                <p className="text-gray-500 text-sm mb-1">Drop me a mail -</p>

                <a
                  href="mailto:kartikeymishra.official@gmail.com"
                  className={`font-bold text-lg hover:underline decoration-2 underline-offset-4 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  kartikeymishra160@gmail.com
                </a>
              </div>

              <div
                className={`absolute top-0 right-0 w-32 h-32 blur-[80px] opacity-10 rounded-full pointer-events-none ${
                  isDark ? "bg-white" : "bg-black"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
