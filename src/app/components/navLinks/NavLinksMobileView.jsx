import React from 'react';

const NavLinksMobileView = () => {
  return (
    <>
      {' '}
      <div className='rounded sm:hidden flex flex-col justify-center items-center h-[55%] z-10 w-[90%] bg-transparent top-[15%] left-[5%] absolute gap-[5%]'>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          Home
        </button>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          About Me
        </button>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          Services
        </button>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          Projects
        </button>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          Testimonials
        </button>
        <button className='text-[19px] text-teal-900 font-semibold cursor-pointer bg-transparent font-vollkorn hover:text-cyan-900'>
          Contact
        </button>
        <button className='flex justify-center items-center w-[140px] h-[41px] bg-orange-500 text-[14px] text-slate-50 rounded'>
          Download CV
        </button>
      </div>
      <div className='h-[55%] w-[90%] rounded absolute top-[14%] left-[5%] bg-orange-200 opacity-1'></div>
    </>
  );
};

export default NavLinksMobileView;
