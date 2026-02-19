import React from 'react'

function Aboutus() {
  return (
    <>

      <div className='w-full h-130 mt-2 flex'>
        <div className='w-[42%] ' ></div>
        <div className='design1'>
          <div
            className='absolute rounded-full'
            style={{
              aspectRatio: '1',
              top: '116%',
              left: '20%',
              transform: 'translate(-50%, -50%) translateY(-10px)',
              animation: 'trans 2s',
              width: '10rem',
            }}
          ></div>
          <div className="absolute rounded-full wa"></div>

        </div>
        <div className='w-[58%]  flex flex-col items-start justify-center p-18 ' >
          <h1 className='font-bold text-3xl'>About <span className='text-orange-400'>Us</span> </h1>
          <h2 className='font-semibold text-xl mt-2'> Full Stack Developer!</h2>
          <div className='mt-2.5 leading-7 pm'>
            <p>

              I'm a skilled web developer with over 3 years of experience building captivating, user-friendly websites. My passion lies in combining creativity with functionality to deliver seamless digital experiences.
              I believe great web design goes beyond aesthetics—it's about creating intuitive interactions that engage visitors. For every project, I research the target audience and client requirements to craft unique solutions that align with their brand identity.
              Staying current with design trends and modern development practices, I'm committed to building websites that make a lasting impression.
            </p>
          </div>
          <a href="#skills">
            <button className="hover:scale-105 transition-transform duration-200 mt-4 mr-1 bg-white border-amber-500 border-2 shadow-amber-100 hover:bg-orange-500 text-black px-4 py-2 rounded-full font-medium transition shadow-md cursor-pointer">
              Learn More
            </button>
          </a>

        </div>
      </div>


    </>
  )
}

export default Aboutus
