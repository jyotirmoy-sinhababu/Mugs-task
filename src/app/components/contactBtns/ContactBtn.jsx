import React from 'react';

import { MdFacebook } from 'react-icons/md';
import { IoLogoTwitter } from 'react-icons/io5';
import { FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const ContactBtn = () => {
  return (
    <div className='flex justify-center '>
      <button className='w-[50px] flex justify-center items-center'>
        <MdFacebook className='text-[31px]' />
      </button>
      <button className='w-[50px] flex justify-center items-center'>
        <IoLogoTwitter className='text-[31px]' />
      </button>
      <button className='w-[50px] flex justify-center items-center'>
        <FiInstagram className='text-[31px]' />
      </button>
      <button className='w-[50px] flex justify-center items-center'>
        <FaLinkedin className='text-[31px]' />
      </button>
    </div>
  );
};

export default ContactBtn;
