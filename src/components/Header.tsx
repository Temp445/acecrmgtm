'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { LuLogIn } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { TbFileDownload } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { IoReorderThree } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { useTranslations } from 'next-intl';
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const t = useTranslations('Header')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" fixed w-full bottom-0 z-[200] shadow-lg md:shadow-none  md:border-0 md:px-0 md:relative md:bottom-0   md:py-2 lg:px-6   flex items-center justify-between container mx-auto">
      <div className="flex items-center ml-0">

        <Link href='/' className='hidden sm:block'>
          <p className="font-bold text-sm sm:text-xl text-gray-800">ACE CRM</p>
          <p className=" text-[12px] sm:text-sm text-gray-600">{t('Engineering')}</p>
        </Link>

      </div>
      <div className="w-full grid grid-cols-[2fr_60px]  sm:hidden">
        <Link href="https://crm.acesoftcloud.in/signup" className="h-[50px] bg-red-500 flex items-center justify-center">
          <span className="font-bold text-[14px] text-white ml-10">{t('Signup')}</span>
        </Link>
        <Link href="/BookDemo" className="h-[50px] bg-[#3d71d3]  flex items-center justify-center">
          <LuMessageSquareMore className="text-2xl text-white" />
        </Link>
      </div>


      <div className="hidden lg:flex items-center space-x-8">
        <Link href="/#features" className="flex items-center text-gray-700 hover:text-gray-900 text-sm 2xl:text-base">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
          {t('Features')}
        </Link>
        <Link href="/#pricing" className="flex items-center text-gray-700 hover:text-gray-900 text-sm 2xl:text-base">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
          {t('Pricing')}
        </Link>

        <Link href="/#contact" className="flex items-center text-gray-700 hover:text-gray-900 text-sm 2xl:text-base">
          <RiContactsLine className='mr-1.5  w-5 h-[18px] mb-0.5 ' />
          {t('ContactUs')}
        </Link>

        <Link href="/CRM_Brochure.pdf" className="flex items-center text-gray-700 hover:text-gray-900 hover:cursor-pointer text-sm 2xl:text-base " download="/CRM_Brochure.pdf">
          <TbFileDownload className='mr-1.5  w-5 h-[18px] mb-0.5 ' />
          {t('Brochure')}
        </Link>
      </div>



      <Link href="https://crm.acesoftcloud.in/login" className="hidden md:flex lg:hidden items-center ml-64 text-gray-700  hover:text-white hover:bg-green-800 p-1 border border-gray-800  rounded-[5px] hover:border-0 ">
        <span className='mr-2'><LuLogIn /></span>
        {t('SignIn')}
      </Link>

      <div className="hidden lg:flex items-center space-x-8">
        <Link href="https://crm.acesoftcloud.in/login" className="flex items-center text-gray-700 text-sm 2xl:text-base hover:text-white hover:bg-green-800 p-1 border border-gray-800  rounded-[5px] px-2 hover:border-0  ">
          <span className='mr-2'><LuLogIn /></span>
          {t('SignIn')}
        </Link>
        <Link href="mailto:sales@acesoft.in" className="flex items-center text-gray-700 hover:text-gray-900 lg:hidden xl:flex text-sm 2xl:text-base ">
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          sales@acesoft.in
        </Link>
      </div>

      <div className="absolute md:relative lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center text-gray-700 pe-4 px-3 bg-[#eef1f0] md:bg-white h-[50px] w-full "
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 28" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" className='text-gray-400 md:text-black'></path>
            ) : (
              <IoReorderThree className='text-3xl text-gray-400 md:text-black' />

            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute bottom-[52px] rounded-lg border shadow-sm md:top-14 left-1 right-16 md:left-0  md:right-0 bg-white border-b border-gray-200 lg:hidden z-[100] md:bg-white">
          <div className="flex flex-col space-y-4 px-6 py-4 md:bg-white">
            <Link href="/" className="flex items-center text-gray-700 hover:text-gray-900 ">
              <span className='text-lg mr-2'><GoHome /></span>
              Home
            </Link>
            <Link href="/#features" className="flex items-center text-gray-700 hover:text-gray-900 ">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
              {t('Features')}
            </Link>
            <Link href="/#pricing" className="flex items-center text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
              </svg>
              {t('Pricing')}
            </Link>
            <Link href="/#contact" className="flex items-center text-gray-700 hover:text-gray-900">
              <RiContactsLine className='mr-1.5  w-5 h-[18px]  ' />
              {t('ContactUs')}
            </Link>
            <Link href="https://crm.acesoftcloud.in/login" className=" md:hidden flex items-center text-gray-700 hover:text-gray-900">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              {t('SignIn')}
            </Link>
            <Link href="mailto:sales@acesoft.in" className="flex items-center text-gray-700 hover:text-blue-500">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              sales@acesoft.in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;