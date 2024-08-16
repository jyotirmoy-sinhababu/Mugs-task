import React from 'react';

import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div id='testimonials' className='mt-[4%]'>
      <div>
        <p className='text-center font-semibold text-[45px] font-poppins'>
          Testimonials
        </p>
        <p className='text-center font-normal mt-[2%] font-poppins'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className='mt-[2%]'>
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
