import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import  { useState } from "react";
import "./News.css";
import Image1 from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";

const images = [Image1, Image2, Image3, Image1, Image1, Image2, Image3];

const News = () => {
  const [position, setPosition] = useState(0);

  const nextSlide = () => {
    setPosition((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setPosition((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-[100vw] flex flex-col justify-center items-center h-full mt-[5vh] md:mt-[20vh] overflow-hidden relative">
      <div className="px-[6%] md:px-[10%]">
        <motion.div
          className="flex w-full items-end justify-end text-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p>Latest News</p>
          <ArrowUpRight size={24} strokeWidth={2} />
        </motion.div>

        <motion.h1
          className="border-b border-gray-500/30 text-[#333333] text-4xl md:text-[7vw] font-bold w-[90%] pb-[4vh] md:leading-[100px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {"Latest News".split(" ").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 1.5 }}
              viewport={{ once: true }}
            >
              {char}{" "}
            </motion.span>
          ))}
        </motion.h1>

        <motion.h1
          className="text-xl md:text-3xl mt-[2vh] text-[#004aad] font-semibold w-[90%] leading-tight"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Take a read of our expert subject matter opinions, data-driven trend
          analysis of the real estate industry, and domain knowledge.
        </motion.h1>
      </div>

      {/* Carousel Section */}
      <div className="relative flex w-[75vw] h-[50vh] mt-[2vh] md:mt-[10vh] flex-col justify-center items-center gap-[4vw] overflow-hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft size={30} />
        </button>

        <motion.div
          className="flex flex-row justify-center items-center gap-[2vw]"
          animate={{ x: `-${position * 27}vw` }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2, // Stuck effect
          }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="w-[100vw] md:w-[25vw] flex gap-[2px] flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={img} alt={`news-${index}`} />
              <p className="text-md font-light">Blog</p>
              <p className="text-xl font-semibold">
                The Silent Language of Hospital Design: Insights from Interior
                Experts
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white p-3 rounded-full shadow-md"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default News;
