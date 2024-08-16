import React from 'react';

import group from '../../../../public/Group.svg';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div
      id='about'
      className='flex justify-between items-center mt-[4%] mx-[20%] flex-col-reverse sm:flex-row'
    >
      <div>
        <Image src={group} alt='Profile picture' />
      </div>
      <div className='pl-[5%]'>
        <div>
          <p className='font-semibold text-[45px] sm:text-left text-center font-poppins'>
            About Me
          </p>
          <p className='font-normal sm:text-left text-center font-poppins'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            tenetur blanditiis illo repellendus provident quis, tempora minima
            fugiat dolorem exercitationem laboriosam,{' '}
          </p>
        </div>
        <div className='mt-[2%]'>
          <div>
            <p className='font-semibold'>UX</p>
            <div className='mt-[2%] flex items-center w-[99%] h-[12px] bg-slate-300 rounded'>
              <div className='w-[90%] bg-orange-600 h-[12px] rounded'></div>
              <div className='border-2  border-orange-600 w-[18px] h-[18px] rounded-[50%]'></div>
            </div>
          </div>
          <div className='mt-[2%]'>
            <p className='font-semibold font-poppins'>Website Design</p>
            <div className='mt-[2%] flex items-center w-[99%] h-[12px] bg-slate-300 rounded'>
              <div className='w-[85%] bg-orange-600 h-[12px] rounded'></div>
              <div className='border-2  border-orange-600 w-[18px] h-[18px] rounded-[50%]'></div>
            </div>
          </div>
          <div className='mt-[2%]'>
            <p className='font-semibold font-poppins'>App Design</p>
            <div className='mt-[2%] flex items-center w-[99%] h-[12px] bg-slate-300 rounded'>
              <div className='w-[95%] bg-orange-600 h-[12px] rounded'></div>
              <div className='border-2  border-orange-600 w-[18px] h-[18px] rounded-[50%]'></div>
            </div>
          </div>
          <div className='mt-[2%]'>
            <p className='font-semibold font-poppins'>Graphic Design</p>
            <div className='mt-[2%] flex items-center w-[99%] h-[12px] bg-slate-300 rounded'>
              <div className='w-[84%] bg-orange-600 h-[12px] rounded'></div>
              <div className='border-2  border-orange-600 w-[18px] h-[18px] rounded-[50%]'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
