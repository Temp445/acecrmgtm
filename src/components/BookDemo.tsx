'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCalendarDays } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import { FaWpforms } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const BookDemo = () => {
  const t = useTranslations('BookDemo');

  const [showDemo, setShowDemo] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [DemoClosed, setDemoClosed] = useState(false);
  const [CallbackClosed, setCallbackClosed] = useState(false);

  useEffect(() => {
    const demoTimer = setTimeout(() => {
      setShowDemo(true);
    }, 2000);

    const callbackTimer = setTimeout(() => {
      setShowCallback(true);
    }, 4000);

    return () => {
      clearTimeout(demoTimer);
      clearTimeout(callbackTimer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      const scrolledPercent = scrollY / pageHeight;

      if (scrolledPercent > 0.3) {
        setShowDemo(true);
        setShowCallback(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClose = () => {
    setDemoClosed(true);
    setTimeout(() => {
      setDemoClosed(false);
    }, 10000);
  };
  const handleCallbackClose = () => {
    setCallbackClosed(true);
    setTimeout(() => {
      setCallbackClosed(false);
    }, 20000);
  };

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello, I want to know more about your services."
    );
    window.open(`https://wa.me/${WhatsappNumber}?text=${message}`, "_blank");
  };


  return (
    <div className="fixed top-[60%] right-0 z-[200] space-y-2 flex flex-col items-end">

      {showDemo && !DemoClosed && (
        <div className="animate-slideInRight  flex items-center bg-[#0067FF] text-white py-2 px-2 rounded-l-lg shadow-lg relative ">
          <Link
            href="/book-demo"
            className="bg-white text-black rounded px-2 mr-5 py-1 text-[12px] font-semibold flex items-center gap-1 w-full"
          >
            {t('BookDemo')} <FaCalendarDays className="text-[13px]" />
          </Link>
          <button
            onClick={handleDemoClose}
            className="absolute right-1 text-white hover:text-red-300 text-lg font-bold"
            aria-label='Close Button'
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}

      {showCallback && !CallbackClosed && (
        <div className="animate-slideInRight  flex items-center bg-[#E42527] text-white py-2 px-2 rounded-l-lg shadow-lg relative  ">
          <Link
            href="/request_callback"
            className=" bg-white  text-black rounded px-3 mr-5 py-1 text-[13px] font-semibold flex items-center gap-1 w-full"
          >
            {t('ContactUs')} <FaWpforms className='text-lg rotate-6' />
          </Link>

          <button
            onClick={handleCallbackClose}
            className="absolute right-1 text-white hover:text-red-300 text-lg font-bold"
            aria-label='Close Button'
          >
            <AiOutlineCloseCircle />
          </button>
        </div>
      )}

      <div>
        <button
          onClick={handleClick}
          className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-2 px-3 rounded-l-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300"
          aria-label='WhatsApp Button'
        >
          <FaWhatsapp className="relative text-3xl" />
        </button>
      </div>
    </div>

  );
};

export default BookDemo;
