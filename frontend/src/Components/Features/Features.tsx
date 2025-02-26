import { Globe, AlertTriangle, PlusCircle, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const featuresData = [
  {
    icon: <AlertTriangle size={80} />,
    title: "Consultation and Meeting",
    description:
      "In this initial meeting we lay the foundation for clients’ dream office designs based on company’s aesthetic tones, budget, and timelines. We may also visit the site to get a better understanding of the project.",
  },
  {
    icon: <PlusCircle size={80} />,
    title: "Project Planning",
    description:
      "We develop a strategic plan, defining milestones, resources, and timelines to ensure smooth execution.",
  },
  {
    icon: <Globe size={80} />,
    title: "Global Standards",
    description:
      "We align designs with global standards to deliver a world-class experience tailored to client needs.",
  },
  {
    icon: <RefreshCcw size={80} />,
    title: "Execution & Review",
    description:
      "We execute the plan with precision, ensuring regular reviews and adjustments for optimal results.",
  },
];

const Features = () => {
  return (
    <div className="flex flex-col w-full py-[10vh] md:h-[100vh] px-[9%] justify-center items-center gap-6 text-black">
  

      {/* Features Section */}
      <div className="flex flex-col  md:flex-row w-full justify-center gap-[4vh] md:gap-[2vw]">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col justify-center items-left w-[100%] md:w-[22%] gap-[2vh]"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.5, // Delay each card for a sequential effect
            }}
            viewport={{ once: true }}
          >
            {feature.icon}
            <h3 className="text-left text-xl text-black font-semibold">
              {feature.title}
            </h3>
            <p className="text-left">{feature.description}</p>
          </motion.div>
        ))}
      </div>

          {/* Animated Growing Line */}
          <motion.div
        className="w-full border-b border-black mb-[8%]"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Features;
