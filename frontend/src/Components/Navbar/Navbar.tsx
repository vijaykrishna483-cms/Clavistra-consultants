import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth animations
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for the menu
import Logo from "../../assets/hd.png"; // Adjust your logo path

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "ABOUT", "SERVICES", "CONTACT", "PROJECTS", "MEDIA", "INSIGHTS","SEARCH"];

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Change styles when scrolled beyond 40px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Desktop Navbar */}
      <nav
        className={`fixed md:block hidden z-999 top-0 pt-5 left-0 w-full border-b border-gray-500/30 transition-all duration-300 ${
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
                  className={`absolute inset-0 rounded-md origin-right ${
                    isScrolled ? "bg-[#ebe6e6]" : "bg-black"
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

      {/* Mobile Navbar */}
      <nav
        className={`fixed md:hidden block z-50 top-0 w-full border-b border-gray-500/30 transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-[10vw]" />

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen(!open)}
            className={`text-3xl transition-all duration-300 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            {open ? <IoMdClose className="z-100 text-black relative transition-transform duration-300" /> : <IoMdMenu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: open ? 0 : "-100%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={`fixed top-0 left-0 w-full px-[3vw] h-full bg-white bg-opacity-90 flex flex-col justify-center items-left ${
            open ? "visible" : "invisible"
          }`}
        >
          <ul className="space-y-6 text-[#545454] text-2xl font-lighter">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                  setOpen(false); // Close menu on click
                }}
                className="cursor-pointer border-b py-[1vh] border-gray-500/30 hover:text-gray-300 transition duration-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
