import React from 'react';

import profilePic from '../../../../public/profilePic.svg';
import Image from 'next/image';

import ContactBtn from '../contactBtns/ContactBtn';

const HeroSection = () => {
  console.log('rr');
  return (
    <div
      id='hero'
      className='flex justify-between items-center mt-[4%] mx-[20%] flex-col-reverse sm:flex-row'
    >
      <div className='sm:block flex flex-col justify-center mt-[4%] sm:mt-0'>
        <p className='text-[13px] font-semibold sm:text-left text-center font-poppins'>
          Hi I am
        </p>
        <p className='text-[19px] sm:text-left text-center font-semibold text-orange-600 font-poppins'>
          Muhammad Umair
        </p>
        <p className='text-[65px] font-bold leading-[3.8rem] sm:text-left text-center font-poppins'>
          UI & UX
        </p>
        <div className='sm:flex sm:justify-end w-[55%] block '>
          <p className='text-[65px] font-bold sm:text-left text-center font-poppins'>
            Designer
          </p>
        </div>
        <p className=' sm:w-[75%] sm:text-left text-center font-poppins'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <div className='sm:block flex justify-center items-center'>
          <button className='w-[120px] h-[41px] bg-orange-500 text-[14px] text-slate-50 sm:mt-[2%] mt-[4%] rounded font-poppins'>
            Hire Me
          </button>
        </div>
      </div>
      <div className='flex flex-col justify-center'>
        {' '}
        <div className='flex justify-end'>
          <Image
            className='w-[90%] h-[90%]'
            src={profilePic}
            alt='Profile photo'
          />
        </div>
        <div className='flex pl-[10%] justify-center mt-[3%]'>
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
