'use client'

import React, { useState, useRef } from "react";
import logo from "@/assets/AceLogo.png";

import Link from 'next/link';
import Image from "next/image";

import { CgPlayButtonO } from "react-icons/cg";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import landingGif from '@/assets/videos/landingGif.mp4';
import landingGif1 from '@/assets/videos/landingGif1.mp4';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Hero() {
  const [showVideoOverlay, setShowVideoOverlay] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const t = useTranslations('Hero');
  const locale = useLocale();

  const textSize = {
    en: 'text-4xl smm:text-5xl  sml:text-5xl sm:text-4xl   md:text-7xl lg:text-7xl xl:text-[85px] xxl:text-8xl',
    de: 'text-4xl   md:text-7xl lg:text-7xl xl:text-[85px] ',
    it: 'text-3xl smm:text-4xl  md:text-6xl lg:text-7xl xl:text-[85px] ',
    br: 'text-3xl smm:text-4xl  md:text-7xl lg:text-7xl xl:text-[80px] ',
    kr: 'text-4xl md:text-7xl lg:text-7xl xl:text-[80px] ',
    be: 'text-4xl smm:text-5xl  sml:text-5xl sm:text-4xl   md:text-7xl lg:text-6xl xl:text-[70px] ',
    ru: 'text-4xl smm:text-5xl  sml:text-[40px] sm:text-4xl   md:text-7xl lg:text-7xl xl:text-[85px] '
  }[locale] || 'text-4xl smm:text-5xl  sml:text-5xl sm:text-4xl   md:text-7xl lg:text-7xl xl:text-[85px] xxl:text-8xl';

  const button1 = {
    de: 'text-[12px] md:text-base',
    hi: 'text-sm md:text-base',
    ru: 'text-[12px] md:text-base',
    it: 'text-[12px] md:text-base',
    br: 'text-[12px] md:text-base',
    be: 'text-[12px] md:text-base',
    es: 'text-sm md:text-base',

  }[locale] || '';

  const button2 = {
    de: 'text-[12px] md:text-base',
    hi: 'text-sm md:text-base',
    ru: 'text-[12px] md:text-base',
    it: 'text-[12px] md:text-base',
    br: 'text-[12px] md:text-base',
    be: 'text-[12px] md:text-base',
    es: 'text-sm md:text-base',

  }[locale] || '';

  const handleFreeTrialClick = (): void => {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Start Free Trial',
      value: 1
    });
  };

  const handleDemoClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();

    setShowVideoOverlay(true);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 50);
  };

  const closeVideoOverlay = (): void => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setShowVideoOverlay(false);

    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Watch Demo',
      value: 1
    });
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    if ((e.target as HTMLElement).id === "videoOverlay") {
      closeVideoOverlay();
    }
  };

  return (
    <div className="mx-auto 2xl:container">
      <section
        className="w-full min-h-[600px] xl:h-[600px] relative z-[32]  mr-0 mb-0 bg-cover bg-no-repeat bg-[image:url(../assets/landingBg.png)] overflow-hidden"
      >
        <div className="flex sm:hidden w-[210px] rounded-br-3xl bg-white py-2">
          <div className="mr-2 -mt-1 sm:mr-3  ">
            <Image src={logo} alt="logo" width={38} height={38} className='h-10 sm:h-12 sm:w-15 rounded-full' />
          </div>
          <div className=''>
            <p className="font-extrabold text-[14px] sm:text-lg ">ACE CRM</p>
            <p className=" text-[12px] sm:text-sm text-gray-500">{t('Engineering')}</p>
          </div>
        </div>

        <h1 className={` ${textSize}    flex w-full px-4  leading-tight  text-center  smm:text-center smm:font-extrabold  sml:text-center lg:text-left md:mt-2  md:text-center  sm:mt-20 lg:mt-20 lg:px-0  lg:w-[500px] lg:leading-none xl:w-[600px] xxl:w-[600px] lg:h-[50.25%] justify-start items-center font-['Inter']   xl:leading-none  font-bold lg:font-extrabold   text-white tracking-[-1.5px] relative lg:absolute py-4 lg:py-0 lg:top-0  lg:left-10 xxl:left-24 xxxl:left-52 2xl:left-32 xl:left-10  z-[16]`}>
          {t('Title')}
        </h1>

        <div className=" hidden lg:block w-full h-[300px] md:h-[200px] lg:w-[550px] lg:h-[600px] xl:w-[620px] xl:h-[600px]   xl:mt-0  bg-cover bg-no-repeat relative lg:absolute  lg:left-[550px] xxl:left-[800px] 3xl:left-[1000px] xxxl:left-[1000px] xl:left-[650px]  2xl:left-[850px] z-[3]">
          <video
            className="w-full h-full object-cover"
            src={landingGif}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
        <div className="lg:hidden w-full h-[300px] md:h-[400px] md:w-[650px] lg:w-[720px] lg:h-[700px] opacity-85 bg-cover bg-no-repeat relative lg:absolute  md:left-[50px] lg:left-[800px] z-[32]">
          <video
            className="w-full h-full object-fill px-12 "
            src={landingGif1}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>

        <p className=" lg:hidden text-center  w-full px-5  lg:px-0 lg:w-[500px] xl:w-[652px]  py-6 lg:h-[14.52%] justify-start items-center font-['Inter'] text-[18px] md:px-10 md:text-[24px] lg:text-[18px] xl:text-[22px]  lg:leading-[60px] text-[#f5f5f7] tracking-[-1px] lg:tracking-[-1.5px] relative lg:absolute lg:top-[45.16%] lg:left-10 xl:left-10 2xl:left-[105px] xxl:left-24 xxxl:left-52  z-[17]">
          {t('Subtitle')}
        </p>

        <div className="flex w-full px-4 md:px-0  sm:justify-center lg:justify-start relative lg:absolute lg:bottom-[95px] lg:left-[40px] xl:left-[40px] xxxl:left-52  2xl:left-[140px] xxl:left-24 gap-4 z-[19] pb-5 lg:py-0">
          <div className="flex  sm:flex-row gap-4 pt-4 w-full md:w-auto">
            <Link
              href="https://crm.acesoftcloud.in/signup"
              onClick={handleFreeTrialClick}
              className={`${button1}  w-full md:w-auto border border-blue-500  bg-gradient-to-bl from-blue-600 to-blue-400  text-white sm:py-3 sm:px-6 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-blue-800 shadow-lg`}
            >
              {t('Button')}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <button
              onClick={handleDemoClick}
              className={` ${button2} flex items-center w-full md:w-auto  text-black py-2 sm:py-3 px-5 sm:px-6 hover:bg-blue-900 hover:text-white rounded-lg font-medium border border-black transition-all text-center shadow-lg hover:border-0 gap-2`}
            >
              <span className="text-xl"><CgPlayButtonO /></span>
              {t('WatchDemo')}
            </button>

          </div>
        </div>

        {/* Video Overlay */}
        {showVideoOverlay && (
          <div
            id="videoOverlay"
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
          >
            <div className="relative w-full max-w-4xl mx-4 aspect-video">
              <button
                onClick={closeVideoOverlay}
                className="absolute -top-12 right-0 text-white text-3xl hover:text-red-600 focus:outline-none"
                aria-label="Close video"
              >
                <IoCloseCircleOutline />
              </button>

              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/LcYOrfL1a5Q?autoplay=1&rel=0&modestbranding=1"
                title="Demo Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}