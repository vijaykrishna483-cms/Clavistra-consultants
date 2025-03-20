import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

import Navbar from "../Navbar/Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { PhoneCall, X } from "lucide-react";
import "./Hero.css";
import { InlineWidget } from "react-calendly";



const openWhatsApp = () => {


  const phoneNumber = "+916382355601";
  const message = "Hello! I'm interested in your services.";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(url, "_blank");
};

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Transforming Your Vision to Reality",
    // functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "01",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Refining and Redefining Brands",
    // functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "02",
  },

  {
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "We Implement & Deliver Results",
    // functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "03",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582578598774-a377d4b32223?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "Let's Get started",
    // functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "03",
  },
];

const Hero = () => {


  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.getElementById("root");
    console.log("Root Element:", root); // Debugging
    setRootElement(root);
  }, []);
  
 const [showCPopup, setShowCPopup] = useState(false);

const directHandle=()=>{
  setShowCPopup(true)
}

  // const [isVisible, setIsVisible] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlideCount((prev) => prev + 1);
    if (slideCount >= slides.length - 1) {
      setShowPopup(true);
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="home" className="relative min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-[2000ms] ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-105 z-10"
              : "opacity-0 scale-100 z-0"
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
            className={`absolute pl-[13vw] md:pl-[0vw] text-5xl md:text-8xl font-bold w-[100vw] md:w-[60vw] text-center transition-all duration-[1500ms] ease-in-out ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-30"
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
      <div className="fixed justify-center align-middle  z-100 md:w-fit rounded-2xl top-[94vh] w flex flex-row items-center  h-[20vh] left-[44vw] md:left-[75vw] md:top-[80vh]">
        <div className="flex bg-transparent place-items-center  gap-[1vw]">
          <div className="w-[]  md:flex flex-row rounded-2xl  bg-transparent h-[] items-center justify-center gap-4 relative">
            <div
            
              className="flex flex-row gap-[1vh] justify-center items-center w-fit"
            >
              <button onClick={directHandle} className="w-[18vw] px-[5%] py-[10px] text-xl font-light  flex justify-between items-center gap-[vw] text-white hover:text-black rounded-full  bg-[#4556c6e6]  border-0  border-gray-500 text-center shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95">
             
              Book A Call With Us!
              
   

              </button>
   
              <div 
                onClick={openWhatsApp}
              className=" rounded-full bg-[#fff] border- mb-[vh] p-4 border-grey-500  shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-green-600 active:scale-90 animate-pulse cursor-pointer">
                <FaWhatsapp size={28} color="green" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-20 left-[5vw] transform -translate-x-1/2 flex flex-col space-y-3 z-40">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer transition-all duration-300 rounded-full  ${
              index === currentIndex
                ? "bg-white w-1 h-5 scale-125"
                : "bg-[#ebe6e6] w-1 h-1 rounded-full"
            }`}
          >
            <p
              className={`cursor-pointer font-bold text-sm text-white ml-[10px]  ${
                index === currentIndex ? "flex" : "hidden"
              }`}
            >
              {" "}
              {slide.number}
            </p>
          </div>
        ))}
      </div>
      {showPopup && (
        <div className=" fixed  w-[100vw] h-[100vh] inset-0 flex items-center justify-center bg-[#1b1616c1] bg-opacity-50 z-50">
          <article className="md:w-[40vw] w-[90vw] cards py-[6vh]  bg-[#c9c7c7f7]">
            <div className="flex flex-col justify-center items-center gap-[2vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                <X size={40} />
              </button>

              <img src="thefinal.png" className="w-[18vw]" />
              <h2 className="text-3xl md:text-6xl font-bold mb-1 text-[#000]">
                Sign Up Now!
              </h2>
              <p className="text-md text-center md:text-2xl text-[#3a3838] font-lighter">
                For exclusive marketing news
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[83%] text-[#000] pl-[15px] p-2 border-b-2 bg-[#ffffff13] border-blue-700 rounded-2xl mb-2"
              />
              <button className="bg-[rgb(46,49,146)] text-xl md:text-3xl font-light shadow-2xl text-white px-[3vw] py-[2vh] rounded-4xl hover:bg-[#2e3192]">
                Subscribe
              </button>
              <div className="w-[100%] md:ml-[9vh] flex flex-row align-middle justify-center items-center gap-[10px]">
                <button className="md:w-[90%] md:h-[50px] w-[80%] px-[2%] text-black rounded-3xl bg-transparent border-2 border-[#6c6969] text-center font-extralight align-middle ">
                  Book A call With Us..!
                </button>
                <div className="bg-[#179e17] rounded-full p-[15px]">
                  <PhoneCall size={24} />
                </div>
              </div>
            </div>
            <span className="top"></span>
            <span className="right"></span>
            <span className="bottom"></span>
            <span className="left"></span>
          </article>
        </div>
      )}

{showCPopup?<div className="backdrop-blur-md  overflow-hidden relative z-999 min-h-screen"> <InlineWidget url="https://calendly.com/vijay762005/30min" />  </div> :<>  </>}


    </div>
  );
};

export default Hero;
