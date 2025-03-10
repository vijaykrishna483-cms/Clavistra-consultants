import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Team1 from "../../assets/team1.png";
import Team2 from "../../assets/team2.png";
import Team3 from "../../assets/team3.png";
import Team4 from "../../assets/team4.png";
import './Team.css'
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "John Doe", role: "UI/UX Designer", img: Team1 },
  { id: 2, name: "Jane Smith", role: "Project Manager", img: Team2 },
  { id: 3, name: "Michael Brown", role: "Architect", img: Team3 },
  { id: 4, name: "Emily Davis", role: "Interior Designer", img: Team4 },
];

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

      {/* Team Cards with whileInView Animation */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="team-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image */}
            <img src={member.img} alt={member.name} className="team-image" />

            {/* Hover Effect - White Overlay */}
            <div className="overlay">
              <p className="name">{member.name}</p>
              <p className="role">{member.role}</p>

              {/* Social Media Icons */}
              <div className="icons">
                <Facebook size={20} className="icon" />
                <Twitter size={20} className="icon" />
                <Instagram size={20} className="icon" />
                <Linkedin size={20} className="icon" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
