import React from 'react';

import Carousel from "nuka-carousel"
import Image1 from '../img/carousell/Image1.png'
import Image2 from '../img/carousell/Image2.png'
import Image3 from '../img/carousell/Image3.png'
import Image4 from '../img/carousell/Image4.png'
import Image5 from '../img/carousell/Image5.png'


import { Link } from 'react-router-dom'




const Home = () => {
  return <section className='section bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute translate-z-0 lg:bg-explosion lg:bg-cover lg:bg-right lg:bg-no-repeat md:bg-explosion md:bg-cover md:bg-right sm:bg-no-repeat sm:bg-explosion sm:bg-cover sm:bg-right   xs:bg-explosion xs:bg-cover xs:bg-right  xs:bg-no-repeat '>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col space-x-32 justify-center '>
        <div className='w-full pt-36 pb-14 lg:p-5 lg:max-w-[600px] z-10 lg:right-4/4 lg:absolute flex flex-col justify-center items-center lg:items-start gap-0 sm:gap-2 lg:gap-6 md:gap-13 lg:bg-white md:absolute md:max-w-[300px] md:p-12 md:w-auto md:items-center md:bg-white '>
          <p1 className='h1 sm:pt-0'>
          Magia baloanelor aduce zâmbete și emoții! </p1><br/> <p1 className='lg:text-2xl'> Lasă-ne să transformăm spațiul evenimentului tău  într-un loc memorabil.
          </p1> 
          <Link to={'/contact'} className='btn sm:text-sm'>
          Contact
          </Link>
        </div>
          <div className='flex lg:justify-end sm:justify-center max-h-200 lg:max-h-max  xl:max-h-max md:max-h-max  md:justify-end '>
            <div className='relative overflow-hidden  '>
            <Carousel className='lg:max-w-[1100px] md:max-w-[780px] sm:max-w-[400px]  lg:pt-28 md:pt-20 sm:pt-4    '>
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
