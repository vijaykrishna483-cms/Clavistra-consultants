import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Bg1 from "../../assets/office.jpg";
import Bg2 from "../../assets/bg2.jpg";
import Bg3 from "../../assets/bg3.jpg";
import Navbar from "../Navbar/Navbar";

const slides = [
  {
    image: Bg1,
    quote: "Innovation begins with a single idea.",
    functn: "Incorporate your Company’s Branding and Values. | Details",
    link: "https://www.youtube.com/",
    number:"01",
  },
  {
    image: Bg2,
    quote: "Vision to Reality.",
    functn: "Incorporate your Company’s Branding and Values. | Details",
    link: "https://www.youtube.com/",
    number:"02",

  },
  {
    image: Bg3,
    quote: "Transforming ideas into structures",
    functn: "Incorporate your Company’s Branding and Values. | Details",
    link: "https://www.youtube.com/",
    number:"03",

  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Navbar />

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        ></div>
      ))}

      {/* Overlay Shade */}
      <div className="absolute inset-0 flex justify-center">
        {slides.map((_slide, index) => (
          <div
            key={index}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            className={`absolute z-10 top-0 left-1/2 w-[30vw] h-[60vh] transition-transform duration-[1500ms] ${
              index === currentIndex ? "translate-y-0" : "-translate-y-full"
            }`}
          ></div>
        ))}
      </div>

      {/* Quote Text */}
      <div className="absolute inset-0 flex items-center justify-center pr-16 text-white z-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute text-5xl md:text-8xl font-bold w-[100vw] md:w-[60vw] text-center transition-all duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
            }`}
          >
            {slide.quote}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-[30vw] md:right-20 top-[90vh] md:top-1/2 transform -translate-y-1/2 flex flex-row md:flex-col gap-4 z-30">
        <button
          onClick={prevSlide}
          className="md:w-14 md:h-14 w-12 h-12 border border-white flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={nextSlide}
          className="md:w-14 md:h-14 w-12 h-12  border border-white flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          <ChevronRight size={30} />
        </button>
      </div>

      {/* Function Text Box */}
      <div className="absolute z-100 md:w-[35vw] top-[97vh] w-[56vw] flex justify-center items-center h-[10vh] bg-[#fff] left-[44vw] md:left-[65vw] md:top-[90vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => window.open(slide.link, "_blank")} 
            className={`md:block hidden absolute   text-md font-lighter text-center cursor-pointer transition-all duration-[1500ms] ease-in-out ${
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-30"
            }`}
          >
            {slide.functn}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-[5vw] transform -translate-x-1/2 flex flex-col space-y-3 z-40">
  {slides.map((slide, index) => (
    <div
      key={index}
      onClick={() => setCurrentIndex(index)}
      className={`cursor-pointer transition-all duration-300 rounded-full  ${
        index === currentIndex ? "bg-white w-1 h-5 scale-125" : "bg-[#ebe6e6] w-1 h-1 rounded-full"
      }`}
    >
        <p 
          className={`cursor-pointer font-bold text-sm text-white ml-[10px]  ${
            index === currentIndex ? "flex" : "hidden"
          }`}>        {slide.number}

        </p>
    </div>
  ))}
</div>

    </div>
  );
};

export default Hero;
