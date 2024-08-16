import React from 'react';

import Logo from '../logo/Logo';
import ContactBtn from '../contactBtns/ContactBtn';

const Footer = () => {
  return (
    <div className='flex justify-center items-center sm:mt-[4%] mt-[6%] flex-col gap-11 border-t-2 sm:h-[300px] h-[200px] bg-slate-100'>
      <Logo />
      <div className='sm:flex w-[71%] justify-center hidden'>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          Home
        </button>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          About Me
        </button>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          Services
        </button>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          Projects
        </button>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          Testimonials
        </button>
        <button className='flex justify-center items-center w-[100px] text-[15px] font-poppins'>
          Contact
        </button>
      </div>
      <ContactBtn />
    </div>
  );
};

export default Footer;
