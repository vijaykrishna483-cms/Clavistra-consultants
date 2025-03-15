
  import { ArrowUpRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
  import "./Discovery.css";
  import { useState} from "react";
  import { motion } from "framer-motion";
  interface DiscoveryProps {
    onPrev: () => void;
    onNext: () => void;
  }
  const Discovery: React.FC<DiscoveryProps> = ({ onPrev, onNext }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const sections = [
    {
      title: "History",
      faqs: [
        { question: "From Friendship to Foundership", answer: "It all started four years ago over a cup of chai and a late-night brainstorming session. We were five friends from completely different professional walks of life — a sharp industrialist & lawyer with an eye for scalable systems, a chartered accountant who could see numbers in motion, a hands-on engineer turned consultant with a knack for solving business puzzles, a marketing expert who lived and breathed brand psychology, and a tech hacker who could build anything from scratch with sheer logic and code. Our paths crossed over collaborative work and casual debates — but soon we realized we had something powerful in common: a shared hunger to create, solve, and elevate businesses from the inside out." },
        { question: "Where Minds Align, Ideas Thrive", answer: "Our diverse backgrounds became our greatest strength. We were never just talking in silos — finance met design, operations spoke to growth, and technology enabled it all. What started as informal collaboration turned into a deep synergy. We weren’t just solving business problems; we were challenging paradigms, questioning the ‘why,’ and building better answers. Our value systems naturally aligned — INTEGRITY, IMPACT & INNOVATION became our pillars. We never believed in surface-level fixes; we believed in solving from the core, building from the roots." },
        { question: "From Projects to Purpose", answer: "What began with helping a few startups scale, optimize, and grow soon turned into a full-fledged mission. We saw how most businesses were struggling not because of lack of intent — but lack of integrated thinking. So, we formed this consulting firm — not to be just another advisor, but a TRUE PARTNER IN TRANSFORMATION. We bring not just expertise, but ownership. And our goal remains simple: to make businesses not only succeed — but SUSTAIN, SCALE, and LEAD." },
      ],
    },
    {
      title: "Vision",
      faqs: [
        { question: "What is your vision?", answer: "We envision a business world where companies, regardless of size, can access holistic, world-class consulting that goes beyond theory. A world where strategy, execution, technology, and finance aren’t separate compartments, but parts of one unified growth engine. Our vision is to be the driving force behind the next generation of sustainable, high-impact businesses — helping them move from confusion to clarity, from complexity to simplicity, and from stagnation to scale.1." },
        { question: "Co-builders of the journey", answer: "We want to become the most trusted partners — not just as consultants, but as CO-BUILDERS of their journey. Whether it’s a startup taking its first step or an enterprise pivoting for future relevance, we aim to be their compass, their catalyst, and their quiet strength behind the scenes." },
        { question: "Create an impact", answer: "Our long-term vision is to build a consulting ecosystem that mentors, accelerates, and empowers — not just clients, but even young talent and future entrepreneurs. We want to be remembered not for the services we offered, but for the IMPACT WE CREATED" },
      ],
    },
    {
      title: "Mission",
      faqs: [
        { question: "We deliver outcomes", answer: "Our mission is to solve business problems with heart, mind, and method — combining strategic thinking, tech innovation, financial wisdom, and actionable marketing intelligence. We don't deliver decks; WE DELIVER OUTCOMES. Every project we take up is an opportunity to create tangible business value, uplift processes, and make our clients stronger than yesterday." },
        { question: "Make future ready", answer: "We aim to simplify complexity. Whether it’s a tech roadmap, a go-to-market strategy, an operational bottleneck, or a finance-led growth challenge — we break it down, solve it from the inside, and build systems that scale. Our mission is to make our clients future-ready — with agility, resilience, and clear direction." },
        { question: "Always stand by clients", answer: "And most importantly, we are mission-driven to keep it ethical, personal, and purposeful. We want to be the kind of consultants who don’t just impress — but genuinely transform, inspire, and stand by our clients as partners who care." },
      ],
    },
  ];

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
    return (
      <div id="about-us" className="w-[100vw] h-full px-[10%] md:px-[10%]">
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
            className="md:w-[50%] w-[95%]  mx-[5%]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className="flex flex-col items-left  ">
              {/* Tabs */}
              {/* Static Section Tabs */}
        <div className="flex items-start gap-4 mb-4 sticky top-0 bg-white z-10">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`px-4 py-2 border-b-2 ${
                activeIndex === index ? "border-black md:text-2xl font-semibold" : "border-gray-100 text-[#838282] md:text-2xl font-semibold"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {section.title}
            </button>
          ))}
        </div>
  
              {/* Animated Content */}
              {sections[activeIndex].faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-lg font-semibold">{faq.question}</p>
                  <Plus size={20} className={`transition-transform ${expandedIndex === index ? 'rotate-45' : ''}`} />
                </div>
                {expandedIndex === index && (
                  <p className="mt-2 answer text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
  
  
           
          </motion.div>
        </div>
      </div>
    );
  };
  
  export default Discovery;
  