import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // For smooth animations
import { IoMdMenu, IoMdClose } from "react-icons/io"; // Icons for the menu
import Logo from "../../assets/thefinal.png"; // Adjust your logo path
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["HOME", "OUR SERVICES", "ABOUT US", "BLOG","CONTACT US"];

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Change styles when scrolled beyond 40px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-[100vw] overflow-hidden">
      {/* Desktop Navbar */}
      <nav
        className={`fixed md:block hidden z-999 top-0 pt-5 left-0 w-full border-b transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-[5vw] px-10 flex justify-around align-middle items-center h-16">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-[12vw]" />

          {/* Navigation Items */}
          <ul className="flex space-x-6 text-lg relative pb-[2.1vh]">
            {navItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(index);
                  document
                    .getElementById(item.toLowerCase().replace(/\s+/g, "-"))
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="relative cursor-pointer px-2 py-2 overflow-hidden"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: active === index ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }} // Underline appears on hover
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className={`absolute bottom-0 left-0 w-full h-[2px]
                    ${  isScrolled ? " bg-black" : " bg-white"
                      }`}
                />
                <span className="relative z-10 text-xl font-semibold transition duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed md:hidden h-[12vh] block z-50 top-0 w-full border-b border-gray-500/30 transition-all duration-300 ${
          isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
        }`}
      >
        <div className="w-full flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="w-[40vw]" />

          {/* Hamburger Menu */}
          <button
            onClick={() => setOpen(!open)}
            className={`text-3xl transition-all pb-[2vh] duration-300 ${
              isScrolled ? "text-black" : "text-black"
            }`}
          >
            {open ? (
              <IoMdClose className="z-100 text-black relative transition-transform duration-300" />
            ) : (
              <IoMdMenu />
            )}
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
          <ul className="space-y-6 text-[#545454] mt-[10vh] text-2xl font-lighter">
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
          <p className="text-[#595959] text-sm mt-[5vh] text-center">Follow Us on;</p>

          <ul className=" flex gap-[] mt-[10px] justify-around py-[4px]">

          <li><Facebook className="text-black"/></li>
          <li><Twitter className="text-black"/></li>
          <li><Instagram className="text-black"/></li>
          <li><Linkedin className="text-black"/></li>
        </ul>\
        <p className="text-[#595959] text-sm mt-[10px] text-center">Clavistra@gmail.com</p>
        <p className="text-[#595959] text-sm mt-[5px] text-center">+91 8965465545</p>

  <p className="text-[#595959] text-xs mt-[4vh] text-center">@RIGHTS OWNED BY CLAVISTRA WEBOPS</p>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
