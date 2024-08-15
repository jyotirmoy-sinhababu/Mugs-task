import React from 'react';

import grpone from '../../../../public/Group-32.svg';
import grptwo from '../../../../public/Group-33.svg';
import grpthree from '../../../../public/Group-34.svg';
import Image from 'next/image';

const TestimonialCard = () => {
  return (
    <div className='flex'>
      <div className='sm:block hidden'>
        <Image src={grpone} alt='testimonial' />
      </div>
      <div>
        <Image src={grpthree} alt='testimonial' />
      </div>{' '}
      <div className='sm:block hidden'>
        <Image src={grptwo} alt='testimonial' />
      </div>
    </div>
  );
};

export default TestimonialCard;
