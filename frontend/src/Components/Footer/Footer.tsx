import { Facebook, Twitter, Instagram, Linkedin ,MapPin  } from "lucide-react";
const Footer = () => {
  return (
    <div className="relative w-full h-full md:pb-[] justify-center items-center flex pb-[20vh] md:h-[50vh] bg-[url('https://images.unsplash.com/photo-1423768164017-3f27c066407f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#f9f9f957] bg-opacity-10"></div>

      {/* Content Section */}
      <div className="relative z-10 w-[100vw] pt-[15vh] flex flex-col md:flex-row  gap-[5vw] h-full md:h-[50vh] justify-around items-center text-[#4a4848] p-8 space-y-4">
        <div className="text-left">
          <h2 className="text-2xl font-semibold hover:text-gray-300 transition">
            India, Delhi
          </h2>
          <p className="text-md hover:text-gray-400 transition">
            OF-614, Satya The Hive, Dwarka expy, <br /> Sector 102, Gurugram,
            Haryana, Pin code-122505
          </p>
          <a href="https://maps.app.goo.gl/3fPAA6bXNadWnrydA?g_st=iw" className="w-fit flex items-center gap-2 p-4 bg-gradient-to-r  rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300">
    <p className="text-black text-lg font-semibold tracking-wide">
      Find us on Maps!
    </p>
    <MapPin size={24} color="black" />
  </a>
        </div>
        {/*   
                    <div className="text-left">

            <h2 className="text-2xl font-semibold hover:text-gray-300 transition">Singapore</h2>
            <p className="text-md hover:text-gray-400 transition">
              7 Temasek Boulevard, Suntec Tower One <br />
              Singapore, 038987
            </p>
          </div> */}

        <div className="text-left">
          <p className="text-md hover:text-gray-400 transition">
            Phone: +91 8595305066
          </p>
          <p className="text-md hover:text-gray-400 transition">
            Email: clavistraconsultants@gmail.com
          </p>
          <p className="text-md hover:text-gray-400 transition">
            Monday - Friday: 9:00 AM to 7:00 PM
          </p>
          <p className="text-md hover:text-gray-400 transition">
            {" "}
            Saturday: 10:00 AM to 3:00 PM
          </p>
        </div>
      </div>

      <div className="absolute  mt-[10vh]  bottom-0 px-10  text-center bg-[#fff] bg-opacity-70 w-[100vw] py-10 text-[#131111] md:text-xl   md:flex flex-row justify-center md:justify-between space-y-2">
        <p className="tracking-widest">
          © 2025 CLAVISTRA, ALL RIGHTS RESERVED | POWERED BY CLAVISTRA WEBOPS
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
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
  );
};

export default Footer;
