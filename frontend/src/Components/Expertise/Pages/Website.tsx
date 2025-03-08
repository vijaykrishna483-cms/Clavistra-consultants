

import { motion } from 'framer-motion';
import Navbar from '../../Navbar/Navbar';

const Website = () => {
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
        <h1 className="border-b py-[2vh] border-gray-500/30 text-[#333333] text-5xl md:text-[7vw] font-bold md:w-[60%] leading-tight">
        Website Development& Management
        </h1>
      </motion.div>

      {/* Text and Image Section */}
      <div className='flex flex-col md:flex-row items-center px-[5%] md:px-[10%] py-10 gap-10'>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className='md:w-1/2 text-left'
        >
          <h2 className='text-3xl md:text-4xl font-semibold text-[#333]'>Drive Results with Performance Marketing</h2>
          <p className='text-gray-600 mt-4'>
            Our data-driven approach ensures that every dollar spent delivers measurable outcomes. 
            We specialize in targeted campaigns, optimizing for conversions and maximizing your ROI.
            Our data-driven approach ensures that every dollar spent delivers measurable outcomes. 
            We specialize in targeted campaigns, optimizing for conversions and maximizing your ROI.  Our data-driven approach ensures that every dollar spent delivers measurable outcomes. 
            We specialize in targeted campaigns, optimizing for conversions and maximizing your ROI.
          </p>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src='sss.jpg' 
          alt='Performance Marketing' 
          className='md:w-1/2 rounded-lg shadow-lg'
        />
      </div>

      {/* Cards Section */}
      <div className='px-[5%] md:px-[10%] py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[1, 2, 3, 4].map((item) => (
          <motion.div 
            key={item} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center'
          >
            <img src='illus.jpg' alt={`Illustration ${item}`} className='w-40 h-40 mb-4' />
            <h3 className='text-xl font-semibold text-[#333]'>Feature {item}</h3>
            <p className='text-gray-600 mt-2'>
              This feature helps you optimize your marketing strategies for better engagement.
              This feature helps you optimize your marketing strategies for better engagement.

            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Website;
