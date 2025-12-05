import React from "react";
import { testimonials } from "../data";

interface TestimonialsProps {
  isDark: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  return (
    <section
      id="testimonial"
      className={`py-24 overflow-hidden ${
        isDark ? "bg-[#09090b]" : "bg-white"
      }`}
    >
      <div className="text-center mb-20 px-6">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-3 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          Read Feedbacks,
        </h2>
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          Hire with confidence
        </h2>
      </div>

      <div className="relative w-full">
        <div
          className={`absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r pointer-events-none ${
            isDark
              ? "from-[#09090b] to-transparent"
              : "from-white to-transparent"
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r pointer-events-none ${
            isDark
              ? "from-[#09090b] to-transparent"
              : "from-white to-transparent"
          }`}
        />

        <div className="flex animate-marquee whitespace-nowrap gap-8 py-4 hover:pause-animation">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className={`
                inline-block w-[380px] md:w-[450px] p-10 rounded-[2.5rem] shrink-0 whitespace-normal transition-all duration-300 hover:-translate-y-2
                ${
                  isDark
                    ? "bg-[#18181b] border border-gray-800"
                    : "bg-gray-50 border border-gray-200 shadow-md"
                }
              `}
            >
              <div
                className={`flex gap-1 mb-8 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p
                className={`text-xl mb-10 leading-relaxed font-medium min-h-[120px] ${
                  isDark ? "text-gray-200" : "text-gray-700"
                }`}
              >
                "{t.content}"
              </p>

              <div className="flex items-center gap-5">
                <div
                  className={`w-14 h-14 rounded-full p-0.5 ${
                    isDark ? "bg-white" : "bg-black"
                  }`}
                >
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full rounded-full object-cover border-2 border-transparent"
                  />
                </div>
                <div>
                  <h4
                    className={`font-bold text-lg ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    {t.name}
                  </h4>
                  <p
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
