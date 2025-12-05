import React from "react";
import { ArrowRight } from "lucide-react";
import { projects } from "../data";

interface PortfolioProps {
  isDark: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDark }) => {
  return (
    <section
      id="portfolio"
      className={`py-24 px-6 ${isDark ? "bg-[#09090b]" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Portfolio /{" "}
            <span className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Case Studies
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
      group block rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2
      ${isDark ? "bg-[#18181b] text-white" : "bg-white text-black shadow-lg"}
    `}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-end">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm font-medium ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {project.category}
                    </p>
                  </div>

                  <div
                    className={`
            w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 transform 
            ${
              isDark
                ? "bg-[#27272a] text-white group-hover:bg-white group-hover:text-black"
                : "bg-gray-100 text-black group-hover:bg-black group-hover:text-white"
            }
          `}
                  >
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
