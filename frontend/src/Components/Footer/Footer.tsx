import { Facebook, Twitter, Instagram, Linkedin   } from "lucide-react";
const Footer = () => {
  return (
    <div className="relative w-full h-full justify-between  gap-[7vh] items-center flex  flex-col py-[9vh] bg-[#ffffff] bg-cover bg-center">
 



      <div className="w-[100vw] h-full flex flex-col md:flex-row justify-around px-[3vw] items-center gap-[3vw]">
         <div className="md:w-[20vw] w-[80vw] flex flex-col gap-[1vh] justify-center">
            <h1 className="text-xl font-semibold">OUR SERVICES</h1>
            <p className="text-lg font-extralight">Brand Strategy & Analysis</p>
            <p className="text-lg font-extralight">Social Media & Content Strategy</p>

            <p className="text-lg font-extralight">Design & Website Solutions</p>
            <p className="text-lg font-extralight">Financial Management</p>
         </div>

      

      

         <div className="md:w-[20vw] w-[80vw] flex flex-col gap-[1vh] justify-center">
            <h1 className="text-xl font-semibold">ADDRESS </h1>
            <p className="text-lg font-extralight"> OF-614, Satya The Hive</p>
            <p className="text-lg font-extralight">Dwarka Expressway</p>
            <p className="text-lg font-extralight">Sector 102, Gurugram,</p>
            <p className="text-lg font-extralight">   Haryana, Pin code-122505</p>
         </div>
         {/* <div className="md:w-[20vw] w-[80vw] flex flex-col gap-[1vh] justify-center">
            <h1 className="text-xl font-semibold">CONTACT </h1>
            */}
            {/* <p className="text-lg font-extralight">Monday - Friday: 9:00 AM to 7:00 PM</p>
            <p className="text-lg font-extralight"> Saturday: 10:00 AM to 3:00 PM</p> */}
         {/* </div> */}


         <div className="md:w-[20vw] w-[80vw] flex flex-col  justify-center">
         <h1 className="text-xl font-semibold ">CONTACT </h1>
            <p className="text-lg font-extralight"> +91 8595305066</p>
            <p className="text-lg font-extralight"> clavistraconsultants@gmail.com</p>
            <h1 className="text-xl font-semibold mt-2">FOLLOW US ON </h1>
            <div className="flex  justify-start gap-[2vw] mt-2">
          <Facebook
            size={24}
            className="cursor-pointer hover:text-blue-600 transition"
          />
          <Twitter
            size={24}
            className="cursor-pointer hover:text-blue-400 transition"
          />
          <Instagram
            size={24}
            className="cursor-pointer hover:text-pink-500 transition"
          />
          <Linkedin
            size={24}
            className="cursor-pointer hover:text-blue-700 transition"
          />
        </div>
         </div>



      </div>

      <p className="px-[10%] font-extralight">@copyrights owned by clavistra consultants webOps team</p>
    </div>
  );
};

export default Footer;
