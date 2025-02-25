import { ArrowUpRight } from "lucide-react";
const Expertise = () => {
  return (
    <div className='w-[100vw] h-[100vh] px-[10%] mt-[10vh]'> 
    <div className='w-[100vw] h-[40%]  flex justify-start  '>
    <h1 className='border-b border-gray-500/30 text-[#333333] text-[7vw] font-bold w-[60%] leading-tight'>Our Area of Expertise</h1>
    </div>
    

    <div className="flex flex-col justify-center items-base">

      
        <h2 className='text-3xl  font-semibold py-[3vh]'>Design is thinking made visual.</h2>
       
        <div className='flex align-baseline justify-between'>
        <p className='font-light w-[70%]'>Crafting spaces that are visually captivating, comfortable, and sustainable. With our expertise in design and construction, we address the unique challenges of healthcare and workplace interiors, providing personalized solutions tailored to your needs.</p>
        <div className='flex w-[20%] items-center text-lg'> 
            <p> All Services </p><ArrowUpRight size={24} strokeWidth={2} />
        </div>
        
        </div>
        
    </div>




    <div className='text-sm  text-[#333333] w-[100%] py-[5vh] items-center justify-center flex'>
          
          <div className='w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>

          <div className='w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>

          <div className='w-[30%] flex flex-col justify-center items-center'>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>
            <p className='flex justify-center items-center align-middle'><span className='font-bold text-3xl mb-[2px]'>+</span>Feasibility Studies</p>

          </div>


    </div>


    <div className=' w-[100%] py-[5vh] gap-[2vw] items-center justify-center flex'>
        <div className='flex flex-col w-[22%] '><p style={{ WebkitTextStroke: "2px black" }} className='border-b border-gray-500/30 font-bold  text-[6vw] text-transparent'>85+</p> <p className='text-xl mt-[2vh] text-[#333333]'>Clients Around the World</p></div>
        <div className='flex flex-col w-[22%] '><p style={{ WebkitTextStroke: "2px black" }} className='border-b border-gray-500/30 font-bold  text-[6vw] text-transparent'>100+</p> <p className='text-xl mt-[2vh] text-[#333333]'>Clients Around the World</p></div>
        <div className='flex flex-col w-[22%] '><p style={{ WebkitTextStroke: "2px black" }} className='border-b border-gray-500/30 font-bold  text-[6vw] text-transparent'>241K</p> <p className='text-xl mt-[2vh] text-[#333333]'>Clients Around the World</p></div>

    </div>
    </div>
  )
}

export default Expertise
