

import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';

const BrandAnalysis = () => {

  const cardData = [
    { title: ' Influencer Identification & Outreach', text: 'Craft a comprehensive strategy that aligns with your goals and resonates with your audience.', imgSrc: 'https://images.unsplash.com/vector-1741695667949-5b89ed5c65be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Campaign Strategy & Execution', text: 'Understand market trends and competitor positioning to make informed decisions.', imgSrc: 'https://images.unsplash.com/vector-1741240041535-9a1d6d945c93?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Affiliate Marketing Management', text: 'Establish a unique and memorable brand identity that stands out.', imgSrc:'https://images.unsplash.com/vector-1741097263398-2c75f8ee5691?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' },
    { title: 'Paid Advertising (Meta, Google, TikTok, etc.)', text: 'Identify and understand your target audience to better meet their needs.', imgSrc: 'https://images.unsplash.com/vector-1739953047277-154ad3a57890?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'ROI Analysis & Performance Optimization', text: 'Revitalize your brand’s image to stay relevant and appealing.', imgSrc: 'https://images.unsplash.com/vector-1739128047872-a82f4cced174?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'UGC (User-Generated Content) Strategy', text: 'Craft compelling stories that resonate with your audience.', imgSrc: 'https://images.unsplash.com/vector-1739647326715-454fb6be54be?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Partnership Negotiation & Contracts', text: 'Evaluate your brand’s performance to optimize strategies.', imgSrc: 'https://images.unsplash.com/vector-1740057538996-c7a46cd361ac?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];



  return (
    <div className='w-[100vw] pt-[10vh] min-h-screen'>
      {/* Heading Section */}
      <Navbar/>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[100vw] md:h-[40%] px-[5%] md:px-[10%] flex justify-start"
      >
        <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333] text-4xl md:text-[5vw] font-bold md:w-[60%] leading-tight">
        Influencer & Performance Marketing
        </h1>
      </motion.div>

      {/* Text and Image Section */}
      <div className='flex flex-col md:flex-row items-center px-[5%] md:px-[10%] py-0 gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:w-1/2 text-left'
        >
          {/* <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2> */}
          <p className='text-gray-600 text-xl mt-4'>
          Marketing isn’t just about reach—it’s about resonance. In a world filled with noise, we help you connect with the right audience in a way that feels authentic, engaging, and results-driven. Through strategic influencer partnerships and performance marketing, we bridge the gap between your brand and the people who truly matter. Our approach is data-backed yet human-centered, ensuring every campaign not only drives measurable growth but also builds lasting relationships. Let’s turn influence into impact and performance into lasting success.
          </p>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src='strategy.jpg' 
          alt='Performance Marketing' 
          className='md:w-1/2 rounded-lg h-[50vh] shadow-lg'
        />
      </div>

      {/* Cards Section */}
      <div className='px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cardData.slice(0, 4).map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg   md:w-[20vw] flex flex-col items-center text-center'
          >
            <img src={card.imgSrc} alt={card.title} className='w-40 h-40 mb-4' />
            <h3 className='text-xl font-semibold text-[#333]'>{card.title}</h3>
            <p className='text-gray-600 mt-2'>{card.text}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default BrandAnalysis;
