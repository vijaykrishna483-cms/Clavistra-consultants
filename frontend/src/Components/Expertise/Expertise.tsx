import {  ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
import { Lightbulb, Brain, Compass } from "lucide-react";
// import Brand from '../../assets/brand.jpg'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
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
    title: "Brand Analysis",
    text: "Need a voice that speaks right to your audience's heart? That's where we come in!",
    image: "analysis.jpg",
    link: "/brandanalysis",
  },
  {
    title: "Brand Strategy",
    text: "We go beyond flashy campaigns to foster innovation and creativity.",
    image: "strategy.jpg",
    link: "/brandstrategy",
  },
  {
    title: "Social Media Management",
    text: "Take your social media game to the next level with our expert management.",
    image: "social.jpg",
    link: "/socialmediamanagement",
  },
  {
    title: "Performance Marketing",
    text: "Maximize your ROI with data-driven marketing strategies.",
    image: "performance.jpg",
    link: "/performancemarketing",
  },
  {
    title: "Search Engine Optimization",
    text: "Transform your online presence with our SEO expertise.",
    image: "seo.jpg",
    link: "/searchengineoptimization",
  },
  {
    title: "Website Development & Management",
    text: "We craft experiences, not just websites.",
    image: "webdev.jpg",
    link: "/websitedevelopmentmanagement",
  },
];
const Expertise = () => {
  const navigate =useNavigate();
  return (
    <div className="relative w-[100vw] md:h-[]  mt-[2vh] md:mt-[10vh]">
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw] md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className="border-b py-[2vh]  border-gray-500/30 text-[#333333] text-5xl md:text-[7vw] font-bold md:w-[60%] leading-tight">
          Our Area of Expertise
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
      className="md:w-[100vw] py-[5vh] gap-[10vw] px-[10%] md:gap-[10vw] mt-[7vh] flex flex-col md:flex-col items-center justify-center"
    ><div className="flex flex-row justify-between">

<div className="flex flex-row  w-[30vw] gap-[1vw] align-middle justify-center  items-center text-left space-y-4">
      <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Compass size={100} className="text-black-500" />
        </motion.div>        <div className="flex flex-col ">

    
        <h2 className="text-2xl font-bold">Strategy</h2>
        <p className="text-gray-600"> Branding & Brand Strategy</p>
        </div>
      </div>

      {/* Branding Section */}
      <div className="flex flex-row  w-[30vw] gap-[1vw] align-middle justify-center  items-center text-left space-y-4">
      <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Brain size={100} className="text-black-500" />
        </motion.div>        <div className="flex flex-col ">

        <h2 className="text-2xl font-bold">Branding</h2>
        <p className="text-gray-600">Finance & Accounting Service</p>
        </div>

      </div>

    </div>
     

    <div className="flex flex-row justify-between">



     
      <div className="flex flex-row  w-[30vw] gap-[1vw] align-middle justify-center  items-center text-left space-y-4">
      <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Brain size={100} className="text-black-500" />
        </motion.div>        <div className="flex flex-col ">

        <h2 className="text-2xl font-bold">Branding</h2>
        <p className="text-gray-600">Website & IT Solution</p>
        </div>

      </div>

      {/* Creativity Section */}
      <div className="flex flex-row  w-[30vw] gap-[1vw] align-middle justify-center  items-center text-left space-y-4">
      <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Lightbulb size={100} className="text-black-500" />
        </motion.div>        <div className="flex flex-col ">

        <h2 className="text-2xl font-bold">Creativity</h2>
        <p className="text-gray-600">Market & Digital Presence</p>
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
       
    {/* <div className='text-sm  text-[#333333] w-[90%] px-[4%] py-[5vh] md:items-center items-start justify-center flex md:flex-row flex-col'>
          
          <div className='md:w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle font-bold '><span className='font-bold text-3xl mb-[2px] mr-[5px]'>+</span> Branding & Brand Strategy</p>

          </div>
          <div className='md:w-[30%] flex flex-col justify-center items-center'>
          <p className='flex justify-center items-center align-middle font-bold'><span className='font-bold text-3xl mb-[2px]  mr-[5px]'>+</span>Market & Digital Presence</p>

          </div>
          <div className='md:w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle font-bold'><span className='font-bold text-3xl mb-[2px]  mr-[5px]'>+</span>Finance & Accounting Service</p>

          </div>

        

          <div className='md:w-[30%] flex flex-col justify-center items-start'>
          <p className='flex justify-center  items-center align-middle font-bold'><span className='font-bold text-3xl mb-[2px]  mr-[5px]'>+</span>Website & IT Solution</p>

          </div>


    </div> */}
      </motion.div>

      {/* Statistics Section */}
      {/* <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[100%] py-[5vh] gap-[5vh] md:gap-[2vw] md:items-center items-center justify-center flex md:flex-row flex-col"
      >
        <div className="flex flex-col md:w-[22%]">
            <div className="flex">
            <AnimatedNumber target={85} />  <span style={{ WebkitTextStroke: "2px black" }} className="border-b border-gray-500/30 font-bold text-8xl md:text-[6vw] text-transparent">
    +
    </span>

            </div>
          
          <p className="text-xl mt-[2vh] text-[#333333]">Clients Around the World</p>
        </div>
        <div className="flex flex-col md:w-[22%]">
        <div className="flex">
            <AnimatedNumber target={100} />  <span style={{ WebkitTextStroke: "2px black" }} className="border-b border-gray-500/30 font-bold text-8xl md:text-[6vw] text-transparent">
    +
    </span>

            </div>
          <p className="text-xl mt-[2vh] text-[#333333]">Successful Projects</p>
        </div>
        <div className="flex flex-col md:w-[22%]">
        <div className="flex">
            <AnimatedNumber target={241} />  <span style={{ WebkitTextStroke: "2px black" }} className="border-b border-gray-500/30 font-bold text-8xl md:text-[6vw] text-transparent">
    +
    </span>

            </div>
          <p className="text-xl mt-[2vh] text-[#333333]">Satisfied Customers</p>
        </div>
      </motion.div> */}

<div>
  {/* Animated Heading */}
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="w-[100vw] md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
  >
    <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333] text-5xl md:text-[7vw] font-bold md:w-[60%] leading-tight">
      What We Have to Offer
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
          className="relative h-[40vh] md:h-[63vh] rounded-2xl w-full bg-cover bg-center cursor-pointer flex items-end p-6 overflow-hidden"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0  flex flex-row justify-aroundtransition-opacity duration-300 " />
          
          {/* Rotating Cube Animation for Title */}
          {/* <motion.div
            initial={{ rotateY: 0 }}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className=" bottom-6 uppercase left-6 text-white text-md font-lighter underline"
          >
          
          </motion.div> */}
          
          {/* Text content with hover change */}
          <motion.div 
            className="relative z-10 text-white"
          
          >
            <h2 className="text-2xl font-bold">{service.title}</h2>
            <p className="text-sm mt-2 w-[80%]">{service.text}</p>
            <p className="text-sm mt-2 w-[80%] uppercase left-6 text-white text-md font-lighter underline">  Explore {service.title}</p>

          </motion.div>
          
          {/* Arrow Icon with hover animation */}
          <motion.div
            className=" bottom-4 right-4    duration-300"
        
          >
            <IoIosArrowDroprightCircle className="text-7xl font-light text-[#ffffff]"/>
            
          </motion.div>
        </motion.div>
      ))}
    </div>
 </div>
    </div>
  );
};

export default Expertise;
