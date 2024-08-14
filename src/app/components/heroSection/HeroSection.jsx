import React from 'react';

import profilePic from '../../../../public/profilePic.svg';
import Image from 'next/image';

import ContactBtn from '../contactBtns/ContactBtn';

const HeroSection = () => {
  return (
    <div className='flex justify-between items-center mt-[4%] mx-[20%] flex-col sm:flex-row'>
      <div>
        <p className='text-[13px] font-semibold'>Hi I am</p>
        <p className='text-[19px] font-semibold text-orange-600'>
          Muhammad Umair
        </p>
        <p className='text-[41px] font-bold'>UI & UX</p>
        <div className='flex justify-end w-[269px]'>
          <p className='text-[41px] font-bold'>Designer</p>
        </div>
        <p className='text-[19px] w-[550px]'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <button className='w-[120px] h-[41px] bg-orange-500 text-[14px] text-slate-50 mt-[2%] rounded'>
          Hire Me
        </button>
      </div>
      <div className='flex flex-col justify-center'>
        {' '}
        <div className='flex justify-end'>
          <Image className='w-[70%] h-[60%]' src={profilePic} alt='' />
        </div>
        <div className='flex pl-[31%] justify-center mt-[3%]'>
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
