import React from 'react';

import Carousel from "nuka-carousel"
import Image1 from '../img/carousell/Image1.png'
import Image2 from '../img/carousell/Image2.png'
import Image3 from '../img/carousell/Image3.png'
import Image4 from '../img/carousell/Image4.png'
import Image5 from '../img/carousell/Image5.png'


import { Link } from 'react-router-dom'




const Home = () => {
  return <section className='section bg-white'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:right-3/4 lg:absolute flex flex-col justify-center items-center lg:items-start gap-8 sm:gap-2 lg:gap-6'>
          <p1 className='h1 sm:pt-0'>
          Magia baloanelor aduce zâmbete și emoții! </p1><br/> <p1 className='lg:text-2xl'> Lasă-ne să transformăm spațiul evenimentului tău  într-un loc memorabil.
          </p1> 
          <Link to={'/contact'} className='btn  sm:text-sm'>
          Contact
          </Link>
        </div>
          <div className='flex lg:justify-end sm:justify-center max-h-200 lg:max-h-max xl:max-h-max '>
            <div className='relative overflow-hidden'>
            <Carousel className='lg:max-w-[1100px] sm:max-w-[250px]  lg:pt-28 sm:pt-0'>
              <img src={Image1} alt=''/>
              <img src={Image3} alt='' />
              <img src={Image4} alt=''/>
              <img src={Image5} alt=''/>
           </Carousel>
            </div>
          </div>
      </div>
    </div>
  </section>;
};


export default Home;
