import React from "react";

interface FooterProps {
  isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => (
  <footer
    className={`py-10 text-center ${
      isDark ? "bg-[#09090b] text-gray-600" : "bg-white text-gray-500"
    }`}
  >
    <p className="font-medium text-sm">© 2025, Kartikey Mishra</p>
  </footer>
);

export default Footer;
