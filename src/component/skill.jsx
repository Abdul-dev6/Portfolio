import React, { useContext } from 'react';
import Card from './Card';
import { faReact, faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from './UserContext';

function Skills() {
  const { mode } = useContext(UserContext);

  const skillData = [
    { icon: faReact, color: 'text-blue-500', title: 'React', proficiency: 'Advanced', percentage: 90, p: 90 },
    { icon: faHtml5, color: 'text-orange-500', title: 'HTML', proficiency: 'Advanced', percentage: 90, p: 90 },
    { icon: faCss3Alt, color: 'text-blue-700', title: 'CSS', proficiency: 'Advanced', percentage: 85, p: 85 },
    { icon: faJs, color: 'text-yellow-500', title: 'JavaScript', proficiency: 'Intermediate', percentage: 85, p: 85 },
    { icon: faCode, color: 'text-gray-700', title: 'Coding', proficiency: 'Intermediate', percentage: 85, p: 85 },
  ];

  return (
    <div className="flex flex-col items-start gap-5 pl-30 pcc it">
      <h1 className="w-full flex justify-center items-center text-2xl font-semibold pt-10 pr-18">
        My  <span className='text-orange-500 ml-1'>Skills</span>
      </h1>


      <div className="flex flex-wrap gap-5 its">
        {skillData.map((skill, index) => (
          <Card key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
