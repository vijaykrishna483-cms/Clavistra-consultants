import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
      <div className="relative w-full h-full md:pb-[] pb-[20vh] md:h-[50vh] bg-[url('https://images.unsplash.com/photo-1423768164017-3f27c066407f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#f9f9f957] bg-opacity-10"></div>
  
        {/* Content Section */}
        <div className="relative z-10 flex flex-col md:flex-row gap-[5vw] h-full md:h-[50vh] justify-center items-center text-[#4a4848] p-8 space-y-4">
          <div className="text-left">
            <h2 className="text-2xl font-semibold hover:text-gray-300 transition">India, Bengaluru</h2>
            <p className="text-md hover:text-gray-400 transition">
              #12, 3rd floor, 60 ft Road, 6th Block, Koramangala<br />
              Bengaluru, Karnataka 560034, India
            </p>
          </div>
  
                    <div className="text-left">

            <h2 className="text-2xl font-semibold hover:text-gray-300 transition">Singapore</h2>
            <p className="text-md hover:text-gray-400 transition">
              7 Temasek Boulevard, Suntec Tower One <br />
              Singapore, 038987
            </p>
          </div>
  
                    <div className="text-left">

            <p className="text-md hover:text-gray-400 transition">Phone: +91 7411712121</p>
            <p className="text-md hover:text-gray-400 transition">Email: info@hidecor.in</p>
            <p className="text-md hover:text-gray-400 transition">
              Monday - Friday: 9:00 AM to 7:00 PM 
          
            </p>
            <p className="text-md hover:text-gray-400 transition">    Saturday: 10:00 AM to 3:00 PM</p>

          </div>
        </div>
  
        <div className="absolute   bottom-0 px-10  text-center bg-[#fff] bg-opacity-70 w-[100vw] py-10 text-[#131111] md:text-xl   md:flex flex-row justify-center md:justify-between space-y-2">
        <p className="tracking-widest">© 2023 HIDECOR, ALL RIGHTS RESERVED | POWERED BY SKILFINITY</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <Facebook size={24} className="cursor-pointer hover:text-blue-600 transition" />
          <Twitter size={24} className="cursor-pointer hover:text-blue-400 transition" />
          <Instagram size={24} className="cursor-pointer hover:text-pink-500 transition" />
          <Linkedin size={24} className="cursor-pointer hover:text-blue-700 transition" />
        </div>
      </div>
      </div>
    );
  };
  
  export default Footer;
  