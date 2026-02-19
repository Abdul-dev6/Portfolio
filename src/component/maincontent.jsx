import React from 'react'
import { Instagram, Facebook, Linkedin } from "lucide-react";
import "../App.css";
function Maincontent() {
    return (
        <>

            <div className='w-[100%] min-h-120 mt-8 flex flex-col md:flex-row'>

                <div className='w-full md:w-[60%] leading-6 justify-center items-start flex flex-col px-6 sm:px-12 md:pl-35 pt-5 ml '>
                    <h3 className='text-2xl font-medium fl '>Hello, It's Me!</h3>
                    <h1 className="ani text-4xl font-bold ft ">
                        Abdul Qadeer</h1>
                    <h3 className='font-medium mt-2'>And I'm a <span> Web Developer </span></h3>
                    <p className="w-full mw md:w-[57%] text-justify mt-2.5 noto-chorasmian">
                        I'm a Web Designer with 3+ years of experience. I create stunning websites, frontend interfaces, and digital experiences that engage and inspire.
                    </p>
                    <div className='flex gap-5.5 mt-3'>
                        <a target='a_blank' href="https://www.instagram.com/abdulqadeer1050/"><Instagram className="mr-2 hover:scale-110 text-orange-500 w-7 h-7 hover:text-orange-600 transition-all duration-100 " /></a>
                        <a target='a_blank' href="https://www.facebook.com/abdul.abdulqadeer.144"><Facebook className='mr-2 hover:scale-110 text-orange-500 w-7 h-7 hover:text-orange-600 transition-all duration-100' /></a>
                        <a target='a_blank' href="https://www.linkedin.com/in/abdul-qadeer-b83726219/"><Linkedin className='mr-2 hover:scale-110  text-orange-500 w-7 h-7 hover:text-orange-600 transition-all duration-100' /></a>
                    </div>
                    <a href="#about">
                        <button className=" mt-4 mr-1.5 bg-orange-400 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition shadow-md cursor-pointer" >
                            Get to Know Me        </button>
                    </a>
                </div>

                <div className='hidden md:block w-[40%]'></div>
                {/* Keep this in your CSS file or a <style> tag */}
                <style>{`
  @keyframes trans {
    from { transform: translate(-50%, -50%) translateY(-100px); opacity: 0; }
    to   { transform: translate(-50%, -50%) translateY(0);      opacity: 1; }
  }
  .animate-trans {
    animation: trans 2s;
  }
  .glow-circle {
    box-shadow:
      0 0 1rem white,
      inset 0 0 0.5rem white,
      0 0 1rem rgb(253, 186, 116),
      inset 0 0 1rem rgb(253, 186, 116),
      0 0 2rem rgb(253, 186, 116),
      inset 0 0 1.5rem rgb(253, 186, 116);
  }
`}</style>

<div className="design block md:flex lg:block">

                    <div className="c aspect-square absolute rounded-full animate-trans w-40 "
                        style={{ top: '42.5%', left: '70%', transform: 'translate(-50%, -50%) translateY(-10px)' }}>
                    </div>

                    <div className="c aspect-square absolute rounded-full animate-trans wc w-[25rem] border-[0.2rem] border-white glow-circle">
                    </div>


                </div>



            </div>
        </>
    )
}
export default Maincontent