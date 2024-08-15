import React from 'react';

import grpOne from '../../../../public/Group-27.svg';
import grpTwo from '../../../../public/Group-26.svg';
import grpThree from '../../../../public/Group-25.svg';
import Image from 'next/image';

const ProjectCards = () => {
  return (
    <div className='flex sm:flex-row flex-col  gap-4  sm:mt-0 mt-[2%] '>
      <div>
        <Image src={grpThree} alt='first pic' />
      </div>
      <div>
        <Image src={grpTwo} alt='first pic' />
      </div>
      <div>
        <Image src={grpOne} alt='first pic' />
      </div>
    </div>
  );
};

export default ProjectCards;
