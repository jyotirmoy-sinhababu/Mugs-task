import React from 'react';

import mumair from '../../../../public/Mumair.svg';
import subtract from '../../../../public/Subtract.svg';

import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex gap-[4%]'>
      <Image className='w-[37px]' src={subtract} alt='' />
      <Image className='w-[122px]' src={mumair} alt='' />
    </div>
  );
};

export default Logo;
