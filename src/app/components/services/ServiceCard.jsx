import React from 'react';

import Image from 'next/image';
import ui from '../../../../public/ui-logo.svg';
import web from '../../../../public/web-logo.svg';
import app from '../../../../public/app-logo.svg';
import graphic from '../../../../public/graphic-logo.svg';

const ServiceCard = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-[4%] mt-[4%]  '>
      <div className='bg-slate-100 sm:w-[330px] w-[260px] sm:h-[246px] h-[246px] rounded flex flex-col justify-center gap-4 pl-[15px] sm:mt-0 mt-[2%]'>
        <Image src={ui} alt='ui logo' />
        <p className='font-semibold'>UI/UX</p>
        <p className='font-normal mt-[2%]'>
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </p>
      </div>
      <div className='bg-slate-100 sm:w-[330px] w-[260px] sm:h-[246px] h-[246px] rounded flex flex-col justify-center gap-4 pl-[15px] sm:mt-0 mt-[2%]'>
        <Image src={web} alt='web logo' />
        <p className='font-semibold'>Web Design</p>
        <p className='font-normal'>
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </p>
      </div>
      <div className='bg-slate-100 sm:w-[330px] w-[260px] sm:h-[246px] h-[246px] rounded flex flex-col justify-center gap-4 pl-[15px] sm:mt-0 mt-[2%]'>
        <Image src={app} alt='app logo' />
        <p className='font-semibold'>App Design</p>
        <p className='font-normal'>
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </p>
      </div>
      <div className='bg-slate-100 sm:w-[330px] w-[260px] sm:h-[246px] h-[246px] rounded flex flex-col justify-center gap-4 pl-[15px] sm:mt-0 mt-[2%]'>
        <Image src={graphic} alt='app logo' />
        <p className='font-semibold'>Graphic Design </p>
        <p className='font-normal'>
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
