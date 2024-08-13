import React from 'react';

import mumair from '../../../../public/Mumair.svg';
import subtract from '../../../../public/Subtract.svg';

import Image from 'next/image';

const Logo = () => {
  return (
    <div className='flex'>
      <Image src={subtract} alt='' />
      <Image src={mumair} alt='' />
    </div>
  );
};

export default Logo;
