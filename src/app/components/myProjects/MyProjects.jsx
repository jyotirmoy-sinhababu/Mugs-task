import React from 'react';

import ProjectCards from './ProjectCards';

const MyProjects = () => {
  return (
    <div className='flex flex-col justify-center mt-[4%] mx-[20%]'>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-center font-semibold text-[45px]'>My Projects</p>
        <p className='text-center font-normal'>
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        <div className='flex sm:gap-4 sm:mt-[2%] mt-[6%] sm:justify-normal gap-6'>
          <button className='border rounded-lg flex justify-center items-center w-[51px]  sm:h-[31px] h-[47px] hover:bg-orange-500 font-normal'>
            All
          </button>
          <button className='border rounded-lg flex justify-center items-center w-[61px]  sm:h-[31px] h-[47px] hover:bg-orange-500 font-normal'>
            UI/UX
          </button>
          <button className='border rounded-lg flex justify-center items-center sm:w-[111px] sm:h-[31px] h-[47px] hover:bg-orange-500 font-normal'>
            Web Design
          </button>
          <button className='border rounded-lg flex justify-center items-center sm:w-[121px] sm:h-[31px] h-[47px] hover:bg-orange-500 font-normal'>
            App Design
          </button>
          <button className='border rounded-lg flex justify-center items-center sm:w-[131px] sm:h-[31px] h-[47px] hover:bg-orange-500 font-normal'>
            Graphic Design
          </button>
        </div>
      </div>
      <div className='mt-[2%]'>
        <ProjectCards />
      </div>
    </div>
  );
};

export default MyProjects;
