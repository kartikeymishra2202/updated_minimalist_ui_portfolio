import React, { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`
        flex items-center justify-between px-2 py-2 rounded-full shadow-2xl transition-all duration-300
        w-full max-w-2xl border backdrop-blur-md
        ${
          isDark
            ? "bg-[#18181b]/90 text-white border-white/10"
            : "bg-white/90 text-black border-black/5"
        }
      `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-full ${
            isDark ? "hover:bg-white/10" : "hover:bg-black/5"
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex items-center space-x-1 pl-4 font-semibold text-sm tracking-wide">
          {["Home", "About", "Portfolio", "Testimonial"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                isDark ? "hover:bg-white/10" : "hover:bg-black/5"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 pr-2">
          <button
            className={`
            px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 shadow-sm text-sm border
            ${
              isDark
                ? "bg-white text-black border-transparent hover:bg-gray-200"
                : "bg-black text-white border-transparent hover:bg-gray-800"
            }
          `}
          >
            Resume
          </button>

          <button
            onClick={toggleTheme}
            className={`
              p-2.5 rounded-full transition-all flex items-center justify-center
              ${
                isDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-black/5 text-black hover:bg-black/10"
              }
            `}
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div
          className={`
          absolute top-full mt-4 left-4 right-4 rounded-3xl shadow-2xl overflow-hidden
          ${
            isDark
              ? "bg-[#18181b] text-white border border-gray-800"
              : "bg-white text-black border border-gray-100"
          }
          md:hidden
        `}
        >
          <div className="flex flex-col p-6 space-y-6 text-center">
            {["Home", "About", "Portfolio", "Testimonial"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold hover:opacity-50 transition-opacity"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
