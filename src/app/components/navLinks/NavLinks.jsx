import React from 'react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';

import { useState } from 'react';

import NavLinksMobileView from './NavLinksMobileView';

import Link from 'next/link';

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const controlIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className='sm:flex w-[71%] hidden'>
        <Link
          href='#hero'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          Home
        </Link>
        <Link
          href='#about'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          About Me
        </Link>
        <Link
          href='#services'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          Services
        </Link>
        <Link
          href='#myProjects'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          Projects
        </Link>
        <Link
          href='#testimonials'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          Testimonials
        </Link>
        <Link
          href='#contact'
          className='flex justify-center items-center w-[100px] text-[15px]'
        >
          Contact
        </Link>
        <button className='flex justify-center items-center w-[140px] h-[41px] bg-orange-500 text-[14px] text-slate-50 rounded'>
          Download CV
        </button>
      </div>
      <button
        className='flex absolute left-[88%] sm:hidden  z-50'
        onClick={controlIsOpen}
      >
        {isOpen ? (
          <RxCross1 className='text-2xl text-cyan-900 font-extrabold' />
        ) : (
          <RxHamburgerMenu className='text-[31px]' />
        )}
      </button>
      {isOpen && (
        <div>
          <NavLinksMobileView />
        </div>
      )}
    </>
  );
};

export default NavLinks;
