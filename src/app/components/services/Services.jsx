import React from 'react';

import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <div
      id='services'
      className='flex flex-col justify-center mt-[4%] mx-[20%] '
    >
      <div className='flex flex-col justify-center items-center '>
        <p className='text-center font-semibold text-[45px]'>Services</p>
        <p className='text-center font-normal'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Services;
