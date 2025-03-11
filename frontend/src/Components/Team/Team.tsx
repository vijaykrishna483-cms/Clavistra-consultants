import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
// import Team1 from "../../assets/team1.png";
// import Team2 from "../../assets/team2.png";
// import Team3 from "../../assets/team3.png";
// import Team4 from "../../assets/team4.png";
import './Team.css'
import { motion } from "framer-motion";



const Team = () => {
  return (
    <div className="w-full mt-[5vh] md:mt-[30vh] px-[6%] md:px-[10%]">
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
        className="text-xl md:text-3xl mt-[2vh] text-[#004aad] font-semibold w-[90%] leading-tight"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -20 }}
        transition={{ duration: 1.2 }}
      >
Our Team is comprised of experienced Management consultants, startup leaders, CA Rankers, Lawyer, Marketing Manager & Project Managers who share a common goal of creating exceptional Consulting experiences and delivering results.
</motion.h1>





<div className="container mt-[8vh]">
  <div className="row flex justify-around gap-[2vw]">
    <div className=" flex ">
      <div className="our-team shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=1027"/>
        </div>
        <div className="team-content">
          <h3 className="name">Michele Miller</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social flex gap-[10px] justify-around py-[4px]">
          <li><Facebook className="text-white"/></li>
          <li><Twitter className="text-white"/></li>
          <li><Instagram className="text-white"/></li>
          <li><Linkedin className="text-white"/></li>
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=839"/>
        </div>
        <div className="team-content">
          <h3 className="name">Patricia Knott</h3>
          <h4 className="title">Web Developer</h4>
        </div>
        <ul className="social flex gap-[10px] justify-around py-[4px]">
          <li><Facebook className="text-white"/></li>
          <li><Twitter className="text-white"/></li>
          <li><Instagram className="text-white"/></li>
          <li><Linkedin className="text-white"/></li>
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=856"/>
        </div>
        <div className="team-content">
          <h3 className="name">Justin Ramos</h3>
          <h4 className="title">Web Developer</h4>
        </div>
       <ul className="social flex gap-[10px] justify-around py-[4px]">
          <li><Facebook className="text-white"/></li>
          <li><Twitter className="text-white"/></li>
          <li><Instagram className="text-white"/></li>
          <li><Linkedin className="text-white"/></li>
        </ul>
      </div>
    </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team shadow-xl rounded-2xl">
        <div className="picture">
          <img className="img-fluid" src="https://picsum.photos/130/130?image=836"/>
        </div>
        <div className="team-content">
          <h3 className="name">Mary Huntley</h3>
          <h4 className="title">Web Developer</h4>
        </div>
       <ul className="social flex gap-[10px] justify-around py-[4px]">
          <li><Facebook className="text-white"/></li>
          <li><Twitter className="text-white"/></li>
          <li><Instagram className="text-white"/></li>
          <li><Linkedin className="text-white"/></li>
        </ul>
      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Team;
