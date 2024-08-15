import React from 'react';

const ContactForm = () => {
  return (
    <div className='mt-[4%]'>
      <div>
        <p className='text-center font-semibold text-[45px]'>
          Lets Design Together
        </p>
        <p className='text-center font-normal mt-[2%]'>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      <div className='mt-[4%] flex justify-center gap-4'>
        <form className='flex'>
          <input
            type='email'
            placeholder='Enter Your Email'
            className='rounded-[14px] pl-[20px] sm:w-[627px] w-[261px] sm:h-[65px] h-[41px] border'
          />
        </form>
        <button
          className='flex justify-center items-center bg-orange-500 hover:bg-orange-700 sm:w-[222px] w-[110px] sm:h-[65px] h-[41px] text-gray-50 rounded-[14px]'
          type='submit'
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
