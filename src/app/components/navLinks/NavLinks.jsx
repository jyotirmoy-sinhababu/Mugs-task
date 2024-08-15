import React from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';

const NavLinks = () => {
  return (
    <>
      <div className='sm:flex w-[71%] hidden'>
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
      <div className='sm:hidden block'>
        <RxHamburgerMenu />
      </div>
    </>
  );
};

export default NavLinks;
