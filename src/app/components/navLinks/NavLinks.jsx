import React from 'react';

const NavLinks = () => {
  return (
    <div className='flex  w-[71%]'>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        Home
      </button>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        About Me
      </button>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        Services
      </button>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        Projects
      </button>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        Testimonials
      </button>
      <button className='flex justify-center items-center w-[100px] text-[15px]'>
        Contact
      </button>
      <button className='flex justify-center items-center w-[140px] h-[41px] bg-orange-500 text-[14px] text-slate-50 rounded'>
        Download CV
      </button>
    </div>
  );
};

export default NavLinks;
