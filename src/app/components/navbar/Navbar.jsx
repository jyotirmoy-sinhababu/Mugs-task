import React from 'react';

import Logo from '../../components/logo/Logo';
import NavLinks from '../../components/navLinks/NavLinks';

const Navbar = () => {
  return (
    <div className='flex justify-between sm:mx-[20%] mx-[4%] items-center h-[117px]'>
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Navbar;
