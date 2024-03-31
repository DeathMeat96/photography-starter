import React from 'react';

import Socials from './Socials';
import Logo from '../img/header/Logo Ideea 5.png'
import MobileNav from './MobileNav'


import { Link} from 'react-router-dom'

 
const Header = () => {
  return <header className='bg-rose-200	fixed w-full px-[30px] lg:px-[100px] z-30 
  h-[100px] lg:h-[148px] flex items-center'>
    <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>

      <Link to={'/'} className='max-w-[150px] h-[100px] lg:max-w-[350px] lg:h-[180px]'>
        <img src={Logo} alt='' />
      </Link>
      <nav className='hidden xl:flex gap-x-12 font-bold text-2xl'>
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
