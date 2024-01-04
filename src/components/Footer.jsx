import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter } from 'react-icons/fa';
import footer from '../assets/footer.png';

export const Footer = () => {
  return (
    <div className='flex flex-col space-y-4 md:flex-row bg-[#F8F8F8] p-6 md:p-10 md:mt-10 md:gap-[150px] justify-center items-center w-full'>

      {/* image part */}
      <div className='md:mr-10 md:mt-0 mb-6 md:mb-0'>
        <img src={footer} alt='Footer Image' className='w-[161px] h-[125px]'/>
      </div>

      {/* contact us part */}
      <div className='flex flex-col space-y-3 md:mt-0'>
        <h2 className='text-[#0E2368] text-xl font-semibold'>Contact Us</h2>
        <p className='text-[#646874]'>Lorem Ipsum Pvt Ltd.5/1, Magalton <br/> Road, Phartosh Gate near YTM <br/> Market, XYZ-343434</p>
        <p className='text-[#646874]'>example2020@gmail.com</p>
        <p className='text-[#646874]'>(904) 443-0343</p>
      </div>

      {/* more part */}
      <div className='mt-6 flex flex-col space-y-3 mr-40'>
        <h3 className='text-[#0E2368] text-xl font-semibold'>More</h3>
        <p className='text-[#646874]'>About Us</p>
        <p className='text-[#646874]'>Products</p>
        <p className='text-[#646874]'>Career</p>
        <p className='text-[#646874]'>Contact Us</p>
      </div>

         {/* social link */}
      <div className='flex flex-col md:gap-[150px] mt-6 md:mt-0'>
        {/* Display the copyright text above icons on smaller screens */}
        <div className='text-[#828B9C] mt-4 md:mt-0 block md:hidden'>
          © 2022 Food Truck Example
        </div>

        <div className='md:mt-20 space-y-2 mb-12 md:mr-10'>
          {/* Conditionally render the heading on smaller screens */}
          <h3 className='text-[#0E2368] text-xl font-semibold hidden md:block'>Social Links</h3>
          <div className='flex space-x-3 '>
            <FaInstagram className='w-[21px] h-[21px] ' />
            <TiSocialFacebook className='w-[21px] h-[21px]' />
            <FaTwitter className='w-[21px] h-[21px]' />
          </div>
        </div>

        {/* Conditionally render the text above icons on larger screens */}
        <div className='text-[#828B9C] mt-4 md:mt-0 hidden md:block'>
          © 2022 Food Truck Example
        </div>
      </div>
    </div>
  );
};
