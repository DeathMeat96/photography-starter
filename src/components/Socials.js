import React from 'react';



import {
ImFacebook,
ImInstagram

} from 'react-icons/im'

const Socials = () => {
  return <div className='sm:hidden lg:flex lg:flex-row md:flex md:flex-row md:gap-2 ml-24'>
    <ul className='flex flex-row gap-5'>
      <li>
        <a href='http://www.facebook.com' target ='_blank'>
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href='http://www.facebook.com' target ='_blank'>
          <ImInstagram />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
