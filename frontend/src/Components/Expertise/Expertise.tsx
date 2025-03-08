import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
import { Lightbulb, Brain, Compass } from "lucide-react";
import Brand from '../../assets/brand.jpg'
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

      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="md:w-[100vw] py-[5vh] gap-[10vw] px-[10%] md:gap-[10vw] flex flex-col md:flex-row items-center justify-center"
    >
      {/* Strategy Section */}
      <div className="flex flex-row  w-[30vw] gap-[1vw] align-middle justify-center  items-center text-left space-y-4">
      <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <Compass size={100} className="text-black-500" />
        </motion.div>        <div className="flex flex-col ">

    
        <h2 className="text-2xl font-bold">Strategy</h2>
        <p className="text-gray-600">Brand Strategy</p>
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
        <p className="text-gray-600">Brand Architecture</p>
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
        <p className="text-gray-600">Digital Strategy</p>
      </div>
      </div>

    </motion.div>
      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col px-[5%] md:px-[10%] justify-center items-base"
      >
        <h2 className="md:text-3xl text-xl font-semibold py-[3vh]">
          Design is thinking made visual.
        </h2>
        <div className="flex md:flex-row flex-col align-baseline justify-between">
          <p className="font-light md:w-[70%]">
            Crafting spaces that are visually captivating, comfortable, and sustainable. With our expertise in design and construction, we address the unique challenges of healthcare and workplace interiors, providing personalized solutions tailored to your needs.
          </p>
          <div className="flex mt-[3vh] md:w-[20%] items-center text-lg">
            <p>All Services</p>
            <ArrowUpRight size={24} strokeWidth={2} />
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
       
    <div className='text-sm  text-[#333333] w-[100%] py-[5vh] md:items-center items-start justify-center flex md:flex-row flex-col'>
          
          <div className='md:w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>

          <div className='md:w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>

          <div className='md:w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>


    </div>
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

  {/* Services Section */}
  <div className="w-full py-[9vh] flex flex-row mt-[5vh] px-[10%]">
    {/* Column 1 */}
    <div className="w-[35%] border-r-2 border-[#b9b8b8] flex flex-col">
      <motion.div
       onClick={() => navigate("/brandanalysis")}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Brand Analysis</h2>
        <p>Need a voice that speaks right to your audience's heart? That's where we come in! Our advertising campaigns are like a megaphone for your brand</p>
        <motion.img 
          src={Brand} 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
      </motion.div>

      <motion.div
             onClick={() => navigate("/brandstrategy")}

        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Brand Strategy</h2>
        <p>Our efforts extend beyond mere flashy campaigns and superficial metrics. They revolve around problem-solving, fostering innovation, embracing creativity</p>
        <motion.img 
          src="sss.jpg" 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: -2 }}
        />
      </motion.div>
    </div>

    {/* Column 2 */}
    <div className="w-[35%] border-r-2 border-[#b9b8b8] flex flex-col">
      <motion.div
                   onClick={() => navigate("/socialmediamanagement")}

        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Social Media Management</h2>
        <p>Get ready to embark on a social media journey that truly sets your brand apart – with Bluefrogs Agency Social Media Management.
        </p>
        <motion.img 
          src={Brand} 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
      </motion.div>

      <motion.div
                   onClick={() => navigate("/performancemarketing")}

        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Performance Marketing</h2>
        <p>We combine purpose-driven storytelling and data-driven marketing strategies to enhance brand recall and maximize your ROI.</p>
        <motion.img 
          src={Brand} 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: -2 }}
        />
      </motion.div>
    </div>

    {/* Column 3 */}
    <div className="w-[35%] border-r-2 border-[#b9b8b8] flex flex-col">
      <motion.div
                   onClick={() => navigate("/searchengineoptimization")}

        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Search Engine Optimization</h2>
        <p>At Bluefrogs, we believe in the power of Digital Marketing to transform your online presence.</p>
        <motion.img 
          src="sss.jpg" 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: 2 }}
        />
      </motion.div>

      <motion.div
                   onClick={() => navigate("/websitedevelopmentmanagement")}

        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, y: -10, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
        className="flex flex-col justify-start gap-[4vh] py-[4vh] px-[2vw]"
      >
        <h2 className="text-3xl font-medium">Website Development & Management</h2>
        <p>Elevate your digital presence with BlueFrogs - where websites transform into experiences!</p>
        <motion.img 
          src={Brand} 
          className="border-2 border-[#cac3c3]" 
          whileHover={{ scale: 1.1, rotate: -2 }}
        />
      </motion.div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Expertise;
