import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserContext';

function card(props) {
  const { mode, setmode } = useContext(UserContext);

  return (
    <>

      <div className={`${mode ? 'border-amber-100' : 'border-black'} w-80 h-45 border rounded-md flex flex-col overflow-hidden shadow-lg p-5   `}>
        <div className='flex items-center gap-10 mb-3 mt-2'>
          <div className='w-12 h-12 flex justify-center items-center bg-gray-200  rounded-sm'>
            <FontAwesomeIcon icon={props.icon} className={`${props.color} text-4xl`} />
          </div>
          <h2 className='font-medium'>{props.title}</h2>
        </div>

        <div className='flex justify-between w-full items-center mt-3'>
          <span>{props.proficiency}</span>
          <span className='text-orange-500'>{props.percentage}%</span>
        </div>

        <div className="w-60 h-2 bg-gray-300 rounded-full mt-2">
          <div
            className="h-2 bg-orange-500 rounded-full"
            style={{ width: `${props.p}%` }}
          ></div>
        </div>
      </div>



    </>
  )
}

export default card