import {  Linkedin } from "lucide-react";
// import Team1 from "../../assets/team1.png";
// import Team2 from "../../assets/team2.png";
// import Team3 from "../../assets/team3.png";
// import Team4 from "../../assets/team4.png";
import './Team.css'
import { motion } from "framer-motion";



const Team = () => {
  return (
    <div className="w-full mt-[vh] md:mt-[20vh] px-[6%] md:px-[10%]">
      {/* Animated Heading */}
      <motion.h1
        className="border-b border-gray-500/30 text-[#333333] text-4xl md:text-[7vw] font-bold w-[90%] pb-[4vh] md:leading-[100px]"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
Meet Our Core Team
      </motion.h1>

      {/* Animated Subheading */}
      <motion.h1
        className="text-lg md:text-2xl mt-[2vh] text-[#2e3192] font-semibold md:w-[90%] leading-tight"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1.2 }}
      >
Our team brings together experienced management consultants, startup leaders, top-ranking Chartered Accountants (CAs), legal experts, marketing strategists, and certified project managers—united by a shared commitment to delivering impactful consulting solutions. With diverse expertise across industries and functions, we aim to create exceptional client experiences and drive meaningful business outcomes.</motion.h1>





<div className="container mt-[8vh] ">
  <div className="row flex md:flex-row flex-col justify-center md:justify-around gap-[2vw] md:ml-[0] ml-[3vw]">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team md:w-[18vw] w-[80vw] shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="image2.jpg"/>
        </div>
        <div className="team-content">
          <h3 className="name">K Goutham</h3>
          <h4 className="title">IIT Madras, consultant </h4>
        </div>
        <ul className="social flex gap-[10px] justify-around py-[4px]">
        <a href="https://www.linkedin.com/in/goutham-kumaresan-8aa594b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><Linkedin className="text-white"/></a>
          {/* <li><Instagram className="text-white"/></li>
          <li><Twitter className="text-white"/></li> */}

          
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
      <div className="our-team md:w-[18vw] w-[80vw] shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="image1.jpg"/>
        </div>
        <div className="team-content">
          <h3 className="name">CA Purva Batra</h3>
          <h4 className="title"> Finance and Tax Consultant </h4>
        </div>
        <ul className="social flex gap-[10px] justify-around py-[4px]">
        <a href="https://in.linkedin.com/in/purva-batra-49457a17b"><Linkedin className="text-white"/></a>
          {/* <li><Instagram className="text-white"/></li>
          <li><Twitter className="text-white"/></li> */}

         
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team md:w-[18vw] w-[80vw] shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="image3.jpg"/>
        </div>
        <div className="team-content">
          <h3 className="name">Vaishali Singh</h3>
          <h4 className="title">Marketing Consultant </h4>
        </div>
       <ul className="social flex gap-[10px] justify-around py-[4px]">
       <a ><Linkedin className="text-white"/></a>
         

         
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team md:w-[18vw] w-[80vw] shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="image4.jpg"/>
        </div>
        <div className="team-content">
          <h3 className="name">Samuel M Philip</h3>
          <h4 className="title">Lawyer & Legal Consultant</h4>
          
        </div>
       <ul className="social flex gap-[10px] justify-around py-[4px]">
       <a href=""><Linkedin className="text-white"/></a>
          {/* <a href="https://www.instagram.com/imsamuel26?igsh=MTJweGR5eGZyaGFiOQ=="><Instagram className="text-white"/></a>
          <li><Twitter className="text-white"/></li> */}

          
        </ul>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Team;
