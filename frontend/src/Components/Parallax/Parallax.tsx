import { Parallax } from "react-parallax";
import './Parallax.css'
const CustomParallax = () => {
  return (
    <div className="w-[100vw] py-[10vh] relative h-[full] overflow-x-hidden  flex items-center">
      <Parallax
        strength={500}
        bgImage="https://images.unsplash.com/photo-1514108225820-2b602873ac36?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageStyle={{
          height: "90vh",
          width: "100vw",
          objectFit: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overflow-hidden">
      <div className="relative  md:h-[50vh] justify-center items-center flex md:space-x-10 text-black text-lg p-20 min-w-[200vw] animate-scroll">
        <p  style={{ WebkitTextStroke: "4px white" }} className=' md:font-bold text-5xl md:text-[6vw]  text-transparent'>We Ease, Structure, Implement, Deliver Impactful Results


</p>

        
      </div>
    </div>
      </Parallax>
    </div>
  );
};

export default CustomParallax;
