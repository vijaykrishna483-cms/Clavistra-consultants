import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth animations
import Logo from "../../assets/hd.png"; // Adjust your logo path

const Navbar = () => {
    const [active, setActive] = useState<number | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);
  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT", "PROJECTS", "MEDIA", "INSIGHTS"];

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Change at scrollY > 40 (adjust as needed)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-200 top-0 pt-5 left-0 w-full z-50 border-b border-gray-500/30 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="mx-[5vw] px-10 flex justify-around items-center h-16">
        {/* Logo */}
        <img src={Logo} alt="Logo" className="w-[7vw]" />

        {/* Navigation Items */}
        <ul className="flex space-x-6 text-lg relative">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setActive(index)}
              className="relative cursor-pointer px-2 py-2 overflow-hidden"
            >
              {/* Background Growing Effect */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: active === index ? 1 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute inset-0 rounded-md origin-left ${
                  isScrolled ? "bg-black" : "bg-white"
                }`}
              />
              <span
                className={`relative z-10 text-xl font-semibold transition duration-300 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
