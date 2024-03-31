import React from 'react';

import Socials from './Socials';
import Logo from '../img/header/Logo Ideea 5.png'
import MobileNav from './MobileNav'


import { Link} from 'react-router-dom'

 
const Header = () => {
  return <header className='bg-purple-300	fixed w-full px-[30px] lg:px-[100px] z-30 
  h-[50px] lg:h-[125px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

      <Link to={'/'} className='max-w-[100px] h-[40px] lg:max-w-[230px] lg:h-[90px]'>
        <img src={Logo} alt='' />
      </Link>
      <nav className='hidden xl:flex gap-x-12 font-bold text-lg'>
        <Link
          to={'/'}
          className='text-[#696c6d] hover:text-primary transition'
          >
          Home
          </Link>
          <Link
          to={'/about'}
          className='text-[#696c6d] hover:text-primary transition'
          >
          About
          </Link>
          <Link
          to={'/portfolio'}
          className='text-[#696c6d] hover:text-primary transition'
          >
          Portfolio
          </Link>
          <Link
          to={'/contact'}
          className='text-[#696c6d] hover:text-primary transition'
          >
          Contact
          </Link>
      </nav>
    </div>
    <Socials />
    <MobileNav />
  </header>
};

export default Header;
