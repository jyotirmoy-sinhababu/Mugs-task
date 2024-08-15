import React from 'react';

import Logo from '../logo/Logo';
import ContactBtn from '../contactBtns/ContactBtn';

const Footer = () => {
  return (
    <div className='flex justify-center items-center mt-[4%] flex-col gap-11 border-t-2 h-[300px] bg-slate-300'>
      <Logo />
      <div className='flex w-[71%] justify-center'>
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
      </div>
      <ContactBtn />
    </div>
  );
};

export default Footer;
