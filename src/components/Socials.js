import React from 'react';



import {
ImFacebook,
ImInstagram

} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className=''>
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
