import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans selection:bg-gray-300 selection:text-black ${
        isDark ? "bg-[#09090b]" : "bg-white"
      }`}
    >
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Testimonials isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <Footer isDark={isDark} />
    </div>
  );
}
