import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import Bg1 from "../../assets/office.jpg";
import Bg2 from "../../assets/bg2.jpg";
import Bg3 from "../../assets/bg3.jpg";
import Navbar from "../Navbar/Navbar";
import { PhoneCall } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

import "./Hero.css";
const slides = [
  {
    image: Bg1,
    quote: "Transforming Your Vision to Reality",
    functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "01",
  },
  {
    image: Bg2,
    quote: "Refining and Redefining Brands",
    functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "02",
  },
  {
    image: Bg3,
    quote: "Let's Get started",
    functn: "You have a vision? | We have a solution",
    link: "https://www.youtube.com/",
    number: "03",
  },
];

const Hero = () => {
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
    <div className="relative h-screen w-full overflow-x-hidden">
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
            className={`absolute text-5xl md:text-8xl font-bold w-[100vw] md:w-[60vw] text-center transition-all duration-[1500ms] ease-in-out ${
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
      <div className="fixed justify-center align-middle   z-100 md:w-[25vw] rounded-2xl top-[94vh] w-[56vw] flex flex-row   items-center shadow-3xl h-[20vh]  left-[44vw] md:left-[72vw] md:top-[70vh]">
        <div className="flex justify-baseline gap-[5px]">
          <div className="w-[20vw] flex flex-row rounded-2xl shadow-2xl bg-white h-[30vh] items-center justify-center gap-4">
            <div className="flex flex-col gap-[1vh] justify-center">
              <p className="text-xl text-light text-center">
                Have an Idea in Mind? <br />{" "}
              </p>
              <p className="text-xl text-light text-center">
                {" "}
                We are Here To Help You..! <br />{" "}
              </p>

              <button className="w-[110%] h-[50px] text-black rounded-3xl px-[5%] bg-transparent hover:bg-gray-100 border-1 font-extralight  border-gray-500 text-lg  text-center shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95">
                Book A Call With Us..!
              </button>
              <div className="flex justify-center gap-[2vw]">
                {" "}
                <Facebook className="text-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"/> 
                <Twitter className="text-2xl  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"/> 
                <Instagram className="text-2xl  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg active:scale-95"/>
              </div>
            </div>
          </div>
          <div className="bg-green-500 rounded-full p-5  h-[65px] shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl hover:bg-green-600 active:scale-90 animate-pulse">
            <PhoneCall size={28} className="text-white" />
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
          {/* <div className="box bg-white w-[40vw] h-[60vh] p-6 rounded-lg flex flex-col gap-[4vh] items-center justify-center shadow-lg text-center relative ">
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={() => setShowPopup(false)}>
              <X size={20} />
            </button>
            <p className="text-xl">Lets Get started.!</p>
            <h2 className="text-4xl font-bold mb-2">Sign Up Now!</h2>
            <p className="text-lg">For exclusive marketing news and trends</p>
            <input type="email" placeholder="Enter your email" className="w-[70%] p-2 border-b-2 bg-[#ffffff13] border-gray-700 rounded-2xl mb-4" />
            <button className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800">Subscribe</button>
          </div> */}

          <article className="card py-[6vh]  bg-[#c9c7c7f7]">
            <div className="flex flex-col justify-center items-center gap-[2vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                <X size={40} />
              </button>

              <img src="thefinal.png" className="w-[18vw]" />
              <h2 className="text-6xl font-bold mb-1 text-[#000]">
                Sign Up Now!
              </h2>
              <p className="text-2xl text-[#3a3838] font-lighter">
                For exclusive marketing news and trends
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[83%] text-[#000] pl-[15px] p-2 border-b-2 bg-[#ffffff13] border-blue-700 rounded-2xl mb-2"
              />
              <button className="bg-[rgb(46,49,146)] text-white px-[3vw] py-[2vh] rounded-4xl hover:bg-[#2e3192]">
                Subscribe
              </button>
              <div className="w-[100%] ml-[9vh] flex flex-row align-middle justify-center items-center gap-[10px]">
                <button className="w-[90%] h-[50px] text-black rounded-3xl bg-transparent border-2 border-[#6c6969] text-center font-extralight align-middle ">
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
    </div>
  );
};

export default Hero;
