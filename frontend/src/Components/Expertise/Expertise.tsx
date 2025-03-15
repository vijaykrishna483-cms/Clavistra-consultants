import {  ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
import { Brain, Compass } from "lucide-react";
// import Brand from '../../assets/brand.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import {  FaCreditCard } from "react-icons/fa"; 
// interface AnimatedNumberProps {
//   target: number;
// }

// const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef<HTMLSpanElement | null>(null);
//   const inView = useInView(ref, { once: true });

//   useEffect(() => {
//     if (inView) {
//       let start = 0;
//       const duration = 2000; // 2 seconds
//       const stepTime = Math.abs(Math.floor(duration / target));

//       const timer = setInterval(() => {
//         start += 1;
//         setCount(start);
//         if (start >= target) clearInterval(timer);
//       }, stepTime);

//       return () => clearInterval(timer);
//     }
//   }, [inView, target]);

//   return (
//     <span ref={ref} style={{ WebkitTextStroke: "2px black" }} className="border-b border-gray-500/30 font-bold  text-8xl md:text-[6vw] text-transparent">
//       {count}
//     </span>
//   );
// };
const services = [
  {
    title: "Brand Building & Analysis",
    text: "Need a voice that speaks right to your audience's heart? That's where we come in!",
    image: "https://i.pinimg.com/736x/70/6f/ea/706feaf29a1853424352fdc376291c59.jpg",
    link: "/brandanalysis",
  },
  {
    title: "Influencer & Performance Marketing",
    text: "We go beyond flashy campaigns to foster innovation and creativity.",
    image: "strategy.jpg",
    link: "/influencer",
  },
  {
    title: "Website Development & Management",
    text: "Take your social media game to the next level with our expert management.",
    image: "https://i.pinimg.com/736x/30/27/bd/3027bda94ae45c94964a187482e3c4ad.jpg",
    link: "/Website",
  },
  {
    title: "Social Media & Design Solution ",
    text: "Maximize your ROI with data-driven marketing strategies.",
    image: "https://i.pinimg.com/736x/df/81/ff/df81ff756d7b232bf5e54a82e9fb3243.jpg",
    link: "/performancemarketing",
  },
  {
    title: "Content Strategy & Content Creation",
    text: "Transform your online presence with our SEO expertise.",
    image: "https://i.pinimg.com/736x/1f/dd/6d/1fdd6d4964ba15d4b986c7c3b895c010.jpg",
    link: "/content",
  },
  {
    title: "Financial Management & Compliance",
    text: "We craft experiences, not just websites.",
    image: "performance.jpg ",
    link: "/financial",
  },
];
const Expertise = () => {
  const navigate =useNavigate();
  return (
    <div  className="relative w-[100vw] md:h-[]  mt-[2vh] md:mt-[]">
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw] md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className="border-b py-[2vh]  border-gray-500/30 text-[#333333]md:w-[60%] leading-tight">
    

          <span className="text-5xl md:text-[5vw] font-extralight"> Our Area  of </span><br/> <span className=" font-bold text-5xl md:text-[7vw]">      Expertise</span> 



        </h1>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col px-[5%] md:px-[10%] justify-center items-base"
      >
        <h2 className="md:text-3xl text-xl font-semibold py-[3vh]">
        Strategic Thinking. Tailored Solutions. Measurable Outcomes.
        </h2>
        <div className="flex md:flex-row flex-col align-baseline justify-between">
          <p className="font-light md:w-[70%]">
          We partner with businesses to craft data-driven strategies, define powerful brand architectures, and execute innovative digital solutions. With deep expertise across industries, we help you navigate complexity, unlock growth opportunities, and build sustainable competitive advantages—turning challenges into outcomes and ideas into lasting impact.          </p>
          <div className="flex mt-[3vh] md:w-[20%] items-center text-lg">
            <p>All Services</p>
            <ArrowUpRight size={24} strokeWidth={2} />
          </div>
        </div>
      </motion.div>



      <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  className="md:w-[100vw] py-[5vh] gap-[1vw] px-[10%] md:gap-[] mt-[2vh] flex items-start md:items-center justify-center"
>
  <div className="flex flex-col md:flex-row justify-start gap-[vw]">

    <div className="flex flex-col  rounded-2xl w-[90vw] md:w-[20vw] gap-[6vw] md:gap-[1vw] align-middle justify-center items-center text-left space-y-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Brain size={100} className="text-black-500" />
      </motion.div>        
      <div className="flex flex-col text-center">
        <h2 className="md:text-2xl font-bold">Branding & <br/> Brand Strategy</h2>
      </div>
    </div>

    {/* Finance Section */}
    <div className="flex flex-col  rounded-2xl w-[90vw] md:w-[20vw] gap-[6vw] md:gap-[1vw] align-middle justify-center items-center text-left space-y-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Compass size={100} className="text-black-500" />
      </motion.div>        
      <div className="flex flex-col text-center">
        <h2 className="md:text-2xl font-bold">Market &<br/> Digital Presence</h2>
      </div>
    </div>

    
  </div>

  <div className="flex flex-col md:flex-row justify-start gap-[]">
    {/* Website Section */}
    <div className="flex flex-col  rounded-2xl w-[90vw] md:w-[20vw] gap-[6vw] md:gap-[1vw] align-middle justify-center items-center text-left space-y-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Brain size={100} className="text-black-500" />
      </motion.div>        
      <div className="flex flex-col  text-center">
        <h2 className="md:text-2xl font-bold">Website &<br/> IT Solution</h2>
      </div>
    </div>

    {/* Market Section */}
    <div className="flex flex-col mt-[2vh] rounded-2xl w-[90vw] md:w-[20vw] gap-[6vw] md:gap-[1vw] align-middle justify-center items-center text-left space-y-4">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <FaCreditCard className="text-7xl text-black-500" />
      </motion.div>        
      <div className="flex flex-col  text-center">
        <h2 className="md:text-2xl font-bold">Finance &<br/> Accounting Service</h2>
      </div>
    </div>
  </div>
</motion.div>

      {/* Services Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-sm text-[#333333] w-[100%] py-[vh] md:items-center items-start justify-center flex md:flex-row flex-col"
      >

      </motion.div>

     
<div id="our-services" >
  {/* Animated Heading */}
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-[100vw] md:h-[40%] px-[5%] mt-[10vh] md:px-[10%] flex justify-start"
  >
    <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333]  md:w-[60%] leading-tight">
     <span className="text-5xl md:text-[5vw] font-extralight">What We  </span><br/> <span className=" font-bold text-5xl md:text-[7vw]">Have to Offer </span> 
    </h1>
  </motion.div>
  <div className="w-full px-[10%] py-[9vh] grid grid-cols-1 md:grid-cols-3 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      onClick={() => navigate(service.link)}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
      className="relative h-[55vh] md:h-[63vh] rounded-2xl w-full bg-cover bg-center cursor-pointer flex items-end p-6 overflow-hidden"
      style={{ backgroundImage: `url(${service.image})` }}
    >
      {/* Dark overlay with blur effect */}
   

      {/* Text content */}
      <motion.div className="relative z-10 text-white">
        <h2 className="md:text-2xl text-xl font-bold">{service.title}</h2>
        <p className="md:text-sm md:mt-2 w-[80%]">{service.text}</p>
        <p className="md:mt-2 w-[80%] uppercase left-6 text-white md:text-md text-xs font-lighter underline">
          Explore {service.title}
        </p>
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-[#0b0b0b1d] bg-opacity-50 transition-all duration-300 ease-in-out"
        
        // Apply opacity change on hover for the blur effect
     
      />
      {/* Arrow Icon with hover animation */}
      <motion.div className="bottom-4 right-4 duration-300 z-20">
        <IoIosArrowDroprightCircle className="text-7xl font-light text-[#ffffff]" />
      </motion.div>
    </motion.div>
  ))}
</div>

 </div>
    </div>
  );
};

export default Expertise;
