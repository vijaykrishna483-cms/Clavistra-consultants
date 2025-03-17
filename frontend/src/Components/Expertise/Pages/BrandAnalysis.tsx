

import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';
import '../Expertise.css'
import '../../Hero/Hero.css'
import { useState } from 'react';
import { PhoneCall, X } from 'lucide-react';
const BrandAnalysis = () => {
const [showPopup, setShowPopup] = useState(false);
  const cardData = [
    { title: 'Brand Strategy Development', text: 'Craft a strategic roadmap to define your brand’s vision, mission, and long-term goals.', imgSrc: 'https://images.unsplash.com/vector-1741695667949-5b89ed5c65be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Competitor & Market Analysis', text: ' Gain insights into your market landscape and competition to position your brand effectively.', imgSrc: 'https://images.unsplash.com/vector-1741240041535-9a1d6d945c93?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Identity & Positioning', text: 'Establish a distinct identity and market positioning that aligns with your target audience.', imgSrc: 'https://images.unsplash.com/vector-1741097263427-f83d88ebfb0a?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Customer Personal Development', text: 'Build detailed audience personas to enhance brand communication and engagement.', imgSrc: 'https://images.unsplash.com/vector-1739803880192-a247d1337285?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Rebranding & Brand Refresh', text: ' Revitalize your brand’s look, feel, and messaging to stay relevant and impactful.', imgSrc: 'https://images.unsplash.com/vector-1739128047872-a82f4cced174?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Messaging & Storytelling', text: 'Develop compelling narratives that authentically connect with your audience.', imgSrc: 'https://images.unsplash.com/vector-1739647326715-454fb6be54be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Brand Audit & Performance Review', text: 'Assess your brand’s strengths, weaknesses, and opportunities for growth.', imgSrc: 'https://images.unsplash.com/vector-1740057539117-42cb2c6da083?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

const clickHdnler=()=>{
  setShowPopup(true);

}

  return (
    <div className='w-[100vw] pt-[] min-h-screen b'>
   <Navbar/>
      <div className='w-[100vw] h-[80vh]'>

      <div className='w-[100vw] pt-[7%] h-[45vh] bg-[#858484]'>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw]  md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className=" py-[2vh] text-[#fff] text-4xl md:text-[5vw] font-bold md:w-[60%] leading-tight">
        Brand Building & Analysis
        </h1>
      </motion.div>



      </div>



      <div className='w-[100vw] h-[45vh]'>




      <div className='flex flex-col md:flex-row items-center px-[5%] md:px-[10%] py-0 gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:w-1/2 text-left'
        >
          {/* <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2> */}
          <p className='text-gray-600 text-xl mt-4'>
          Your brand is more than just a logo or a tagline—it’s the heart of your business, the story you tell, and the feeling you leave behind. We’re here to help you shape that story with clarity, purpose, and impact. Through deep analysis and thoughtful strategy, we uncover what makes you unique, refine your message, and create a brand that not only stands out but truly connects. Whether you’re building from the ground up or redefining your presence, we’re your partners in bringing your vision to life—authentically, powerfully, and with purpose.
          </p>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src='https://wallpaperbat.com/img/418492-six-industries-that-have-benefited-by-big-data-analytics.jpg' 
          alt='Performance Marketing' 
          className='absolute ml-[46vw]  backdrop-shadow md:w-[40vw] mb-[20vh] rounded-lg h-[55vh] shadow-blue-500/50'
        />
      </div>




      </div>





      </div>
      {/* Heading Section */}
   
     

      {/* Text and Image Section */}
      

      {/* Cards Section */}
      <div className='px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.slice(0, 4).map((card, index) => (
          <motion.div 
            key={index} 
            onClick={clickHdnler}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white hovercard p-6 rounded-lg shadow-lg flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4 rounded-2xl' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>

      <div className='px-[5%] flex md:flex-row flex-col justify-center  gap-[3vw] md:px-[10%] py-10'>
        {cardData.slice(4).map((card, index) => (
          <motion.div 
            key={index} 
            onClick={clickHdnler}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 hovercard rounded-lg shadow-lg  w-[90vw] md:w-[20vw] flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>


      {showPopup && (
        <div className=" fixed  w-[100vw] h-[100vh] inset-0 flex items-center justify-center bg-[#0000007e] bg-opacity-50 z-50">
        
          <article className="cards py-[6vh]  bg-[#fffffff7]">
            <div className="flex flex-col justify-center items-center gap-[2vh]">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setShowPopup(false)}
              >
                <X size={40} />
              </button>

              <img src="thefinal.png" className="w-[18vw]" />
              <h2 className="text-4xl font-bold mb-1 text-[#000]">
               Want to know more!
              </h2>
              <p className="text-2xl text-[#3a3838] font-lighter">
                For exclusive marketing news and trends
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-[83%] text-[#000] pl-[15px] p-2 border-b-2 bg-[#ffffff13] border-blue-700 rounded-2xl mb-2"
              />
              <button className="bg-[rgb(46,49,146)] text-3xl font-light shadow-2xl text-white px-[3vw] py-[2vh] rounded-4xl hover:bg-[#2e3192]">
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

export default BrandAnalysis;
