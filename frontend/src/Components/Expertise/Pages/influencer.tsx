import { motion } from "framer-motion";
import Navbar from "../../Navbar/Navbar";
import { FormEvent, useState } from "react";
import { X, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

// Define type for card data structure
interface Card {
  title: string;
  text: string;
  imgSrc: string;
}


const BrandStrategy = () => {
   const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_4bjtg5w",
      "template_rqxa83f",
      e.target as HTMLFormElement,
      "hEOfHJqTU-k_3aG_e"
    );
  };


  const handleCardClick = (card:Card) => {
    setSelectedCard(card);
    setShowPopup(true);
  };

  const cardData: Card[] = [
    {
      title: " Influencer Identification & Outreach",
      text: "Connect with the right influencers to amplify your brand’s reach and credibility.",
      imgSrc:
        "https://images.unsplash.com/vector-1741695667949-5b89ed5c65be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Partnership Negotiation & Contracts",
      text: "Secure strategic partnerships with clear agreements for long-term success.",
      imgSrc:
        "https://images.unsplash.com/vector-1740057538996-c7a46cd361ac?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Campaign Strategy & Execution",
      text: "Design and implement high-impact influencer and performance marketing campaigns.",
      imgSrc:
        "https://images.unsplash.com/vector-1741240041535-9a1d6d945c93?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "ROI Analysis & Performance Optimization",
      text: "Track, measure, and refine campaigns to maximize conversions and efficiency.",
      imgSrc:
        "https://images.unsplash.com/vector-1739128047872-a82f4cced174?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UGC (User-Generated Content) Strategy",
      text: "Leverage authentic customer content to boost engagement and trust.",
      imgSrc:
        "https://images.unsplash.com/vector-1739647326715-454fb6be54be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Affiliate Marketing Management",
      text: "Build and manage profitable affiliate programs to drive sustainable growth.",
      imgSrc:
        "https://images.unsplash.com/vector-1741097263398-2c75f8ee5691?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    },
    {
      title: "Paid Advertising (Meta, Google, TikTok, etc.)",
      text: " Optimize paid media strategies across platforms for maximum ROI.",
      imgSrc:
        "https://images.unsplash.com/vector-1739953047277-154ad3a57890?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="w-[100vw] min-h-screen overflow-hidden">
      <Navbar />
      <div className="w-[100vw] h-full">
        <div className="w-full pt-[30%] md:pt-[7%] md:h-[45vh] bg-[#858484]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-[100vw]  md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
          >
            <h1 className=" py-[2vh] text-[#fff] w-[100%] text-4xl md:text-[4vw] font-bold md:w-[60%] leading-tight">
              Influencer & Performance Marketing
            </h1>
          </motion.div>
        </div>

        <div className="w-[100vw] md:h-[45vh]">
          <div className="flex flex-col md:flex-row items-center ] md:px-[10%]  py-0 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="md:w-1/2 w-[100vw] md:px-[0] px-[5%] text-left"
            >
              {/* <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2> */}
              <p className="text-gray-600 md:text-xl mt-4 ">
                Marketing isn’t just about reach—it’s about resonance. In a
                world filled with noise, we help you connect with the right
                audience in a way that feels authentic, engaging, and
                results-driven. Through strategic influencer partnerships and
                performance marketing, we bridge the gap between your brand and
                the people who truly matter. Our approach is data-backed yet
                human-centered, ensuring every campaign not only drives
                measurable growth but also builds lasting relationships. Let’s
                turn influence into impact and performance into lasting success.
              </p>
            </motion.div>
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="strategy.jpg"
              alt="Performance Marketing"
              className="md:absolute relative md:ml-[46vw] w-[95vw]  backdrop-shadow md:w-[40vw] md:mb-[20vh] rounded-lg md:h-[55vh] shadow-blue-500/50"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.slice(0, 4).map((card, index) => (
          <motion.div
            onClick={() => handleCardClick(card)}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-40 h-40 mb-4 rounded-2xl"
            />
            <h3 className="text-xl font-semibold text-[#333]">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="px-[5%] flex md:flex-row flex-col justify-center  gap-[3vw] md:px-[10%] py-10">
        {cardData.slice(4).map((card, index) => (
          <motion.div
            onClick={() => handleCardClick(card)}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg   md:w-[20vw] flex flex-col items-center text-center"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="w-40 h-40 mb-4"
            />
            <h3 className="text-xl font-semibold text-[#333]">{card.title}</h3>
            <p className="text-gray-600 mt-2">{card.text}</p>
          </motion.div>
        ))}
      </div>

      
    
      {showPopup && selectedCard && (
  <div className="fixed w-[100vw] h-[100vh] inset-0 flex items-center justify-center bg-[#1b1616c1] bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out">
    <article className="md:w-[40vw] w-[90vw] cards py-[6vh] bg-white bg-opacity-90 rounded-2xl shadow-xl relative transform transition-all duration-300 ease-in-out scale-95 hover:scale-100">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-all duration-200 ease-in-out transform hover:scale-110"
        onClick={() => setShowPopup(false)}
      >
        <X size={40} />
      </button>

      <img src="thefinal.png" className="w-[30vw] md:w-[15vw] mx-auto mb-4 rounded-lg " />
      <h2 className="text-3xl md:text-2xl font-extralight mb-1 text-black text-center">Want to know more!</h2>
      <h2 className="text-2xl md:text-2xl font-semibold mb-1 text-black text-center">
        About {selectedCard.title}
      </h2>

      <form
  className="contact-form mt-4 w-[80%] flex items-center gap-2 border-2 rounded-3xl border-blue-700 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200"
  onSubmit={sendEmail}
>
  <input
    type="text"
    name="email_from"
    id="emailFrom"
    placeholder="Enter your email"
    className="w-full h-[40px] text-black bg-transparent pl-4 outline-none placeholder-gray-500"
  />
  <button
    type="submit"
    className="h-[40px] px-6 bg-[#2e3192] text-white font-semibold rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"
  >
    Submit
  </button>
</form>


      <div className="w-[80%]  mt-[2vh] flex flex-row justify-center items-center gap-[10px]">
        <button className="md:w-[90%] md:h-[50px] h-[60px] w-[80%] px-[2%] text-black rounded-3xl bg-transparent border-2 border-[#6c6969] text-center font-extralight hover:bg-gray-200 transition-all duration-200">
          Book A Call With Us!
        </button>
        <div className="bg-[#179e17] rounded-full p-[15px] shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-110">
          <PhoneCall size={24} />
        </div>
      </div>

    </article>
  </div>
)}



    </div>
  );
};

export default BrandStrategy;
