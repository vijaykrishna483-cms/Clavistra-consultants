import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  target: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const stepTime = Math.abs(Math.floor(duration / target));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, target]);

  return (
    <span ref={ref} style={{ WebkitTextStroke: "2px black" }} className="border-b border-gray-500/30 font-bold text-8xl md:text-[6vw] text-transparent">
      {count}
    </span>
  );
};

const Expertise = () => {
  return (
    <div className="relative w-[100vw] md:h-[100vh] px-[5%] md:px-[10%] mt-[2vh] md:mt-[10vh]">
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw] md:h-[40%] flex justify-start"
      >
        <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333] text-4xl md:text-[7vw] font-bold md:w-[60%] leading-tight">
          Our Area of Expertise
        </h1>
      </motion.div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col justify-center items-base"
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
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-[100%] py-[5vh] gap-[2vw] md:items-center items-start justify-center flex md:flex-row flex-col"
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
      </motion.div>
    </div>
  );
};

export default Expertise;
