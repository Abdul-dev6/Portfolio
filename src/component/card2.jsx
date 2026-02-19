import React, { useContext, useState } from 'react';
import { Github } from "lucide-react";
import { UserContext } from './UserContext';

function Card2(props) {
        const { mode, setmode } = useContext(UserContext);
    
    return (
        <>
        <div className={` ${mode?'border-amber-100' : 'border-black'} w-80 h-80 border rounded-md flex flex-col overflow-hidden shadow-lg wl`}>
            <img
                src={props.img}
                alt={props.head}
                className="w-full h-40 object-cover  hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col flex-grow p-3">
                <h1 className='font-semibold text-lg mb-2'>{props.head}</h1>
                <p className='text-sm flex-grow'>{props.p}</p>
                <div className='flex gap-3 mt-4'>
                    <a
  href={props.code}           // your link
  target="_blank"         // opens in new tab
  rel="noopener noreferrer" // security best practice
  className="cursor-pointer 
             hover:scale-105 
             transition-transform 
             duration-200 
             bg-gray-900 
             hover:bg-gray-950 
             text-white 
             px-8 py-2 
             rounded-md 
             inline-block"
>
  Code
</a>
                    <a
  href={props.preview}           // the link you want
  target="_blank"               // opens in new tab
  rel="noopener noreferrer"     // security best practice
  className="cursor-pointer 
             hover:scale-105 
             transition-transform 
             duration-200 
             flex 
             items-center 
             gap-2 
             bg-orange-400 
             hover:bg-amber-600 
             text-white 
             px-3 py-2 
             rounded-md"
>
  <Github /> Preview
</a>

                </div>
            </div>
            
        </div>
      
            </>
    )
}

export default Card2;
