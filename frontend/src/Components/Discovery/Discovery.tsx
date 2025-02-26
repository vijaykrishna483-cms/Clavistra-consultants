
  import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
  import "./Discovery.css";
  import { useState} from "react";
  import { motion } from "framer-motion";
  interface DiscoveryProps {
    onPrev: () => void;
    onNext: () => void;
  }
  const Discovery: React.FC<DiscoveryProps> = ({ onPrev, onNext }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  
    const sections = [
      {
        title: "History",
        content:
          "Our journey commenced in 2015, driven by a mission to revolutionise workplace aesthetics. As a passionate 21st-century technology first design and build enterprise, our unwavering dedication to client satisfaction goes beyond the norm. We don't just promise; we deliver profitable, sustainable, and future-ready workplace solutions that are second to none.Our team features interior decoration services that breathe life into spaces, crafting offices that not only function flawlessly but also beckon with warmth, flexibility, and individuality. Stepping into our creations is akin to stepping into a world of inspiration and productivity..",
      },
      {
        title: "Vision",
        content:
          "HIDECOR visualises a world where workspaces are redefined for the people, blending aesthetics with eco-conscious well-being. Our goal is to be at the forefront of the industry, delivering exceptional value and garnering deep respect for our innovative designs and absolute professionalism for our peers, partners and team members alike",
      },
      {
        title: "Mission",
        content:
          "At HIDECOR, we aspire for Functional efficiency, Aesthetic appeal, Sustainable yet Technology enriched in Design. Our unwavering Ethical standards, Quality craftsmanship, and Client delight in the execution of Build are the core of our organization and reflects our mission to be the foremost interior design partner for our clients and associates. Our approach is rooted in a deep understanding of our clients' needs and the context in which we are designing, fostering company culture, brand, employee wellness.",
      },
    ];
  
  
    const skills = [
      { title: "Renovation", percentage: 75 },
      { title: "Architecture and Build Solutions", percentage: 85 },
      { title: "Functional Spaces", percentage: 95 },
    ];
  
    return (
      <div className="w-[100vw] h-full px-[10%] md:px-[10%]">
        {/* About Us */}
        <motion.div 
          className="flex w-full items-end justify-end text-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p> About Us</p>
          <ArrowUpRight size={24} strokeWidth={2} />
        </motion.div>
  
        {/* Animated Headline */}
        <motion.h1
          className="border-b border-gray-500/30 text-[#333333] text-4xl md:text-[7vw] font-bold w-[100%] md:w-[80%] leading-tight"
        >
          {"Discover Our Story".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 2 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
  
        {/* Subheading */}
        <motion.h1
          className="md:text-3xl text-2xl  mt-[2vh] text-[#004aad] font-semibold w-[100%] md:w-[80%] leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Designing the future, today - welcome to our architecture.
        </motion.h1>
  
        <div className="flex md:flex-row flex-col w-full items-center justify-center">
          {/* Image Gallery */}
          <motion.div
            className=" md:w-[50%] flex flex-col justify-center items-center align-middle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
          >
            <div className="gallery md:w-[30vw] flex  justify-center items-center  w-[100vw]">
              <img src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2083" alt="architecture 1" />
              <img src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070" alt="architecture 2" />
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070" alt="architecture 3" />
            </div>
  
            {/* Navigation Buttons */}
            <div className="flex items-center mt-[3vh] gap-1">
              <button onClick={onPrev} className="p-2 hover:bg-gray-100 transition">
                <ChevronLeft className="w-12 h-12 text-gray-400" />
              </button>
              <button onClick={onNext} className="p-2 hover:bg-gray-100 transition">
                <ChevronRight className="w-12 h-12 text-gray-400" />
              </button>
            </div>
          </motion.div>
  
          {/* Text Sections */}
          <motion.div
            className="md:w-[50%]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col items-left w-full max-w-2xl mx-auto">
              {/* Tabs */}
              <div className="flex relative gap-4 mb-4">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 border-b-2 ${
                      activeIndex === index ? "border-black text-2xl font-semibold" : "border-gray-100 text-[#838282] text-2xl font-semibold"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
  
              {/* Animated Content */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-left text-gray-700 w-[90%] text-lg"
              >
                <p>{sections[activeIndex].content}</p>
              </motion.div>
            </div>
  
            {/* Skills Progress Bars */}
            {skills.map((skill, index) => (
              <motion.p
                key={index}
                className="w-[80%] flex justify-between text-lg mt-[3vh]"
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 5, delay: 0.5 + index * 0.3 }}
              >
                <span className="border-b-2 border-black" style={{ width: `${skill.percentage}%` }}>
                  {skill.title}
                </span>
                <span className="text-right border-b-2 border-[#bcb9b9]" style={{ width: `${100 - skill.percentage}%` }}>
                  {skill.percentage}%
                </span>
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Discovery;
  