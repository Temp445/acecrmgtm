'use client'

import React from "react";
import { useRouter } from 'next/navigation';
import { FaArrowRight } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function CallToAction() {
  const t = useTranslations('CallToAction');
  const router = useRouter();

  const handleClick = (): void => {
    router.push("https://crm.acesoftcloud.in/signup");
  };

  return (
    <div className="w-full max-h-fit bg-gradient-to-r from-indigo-50 to-purple-50 py-10 px-4 md:py-16 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative md:py-10">
        <div className="relative gap-0">
          <h2 className="text-xl md:text-4xl font-bold tracking-tight text-black drop-shadow-md leading-snug">
            {t('Title')} <br className="hidden sm:block" /> {t('Subtitle')}
          </h2>
          <div className="w-40 h-40  md:w-64 md:h-64 bg-[url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-04-03/YOQNH0cfL0.png)]  bg-[length:100%_100%] bg-no-repeat hidden  absolute top-1 left-1/2 -translate-x-1/2  -translate-y-10 md:flex justify-center items-center z-[143]" />

        </div>

        <div className="mt-10 md:mt-20 flex  items-center justify-center gap-4 sm:gap-8">
          <button
            onClick={handleClick}
            className=" px-6 py-3 bg-black text-white text-sm md:text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1 group"
          >
            {t('GetStarted')}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            href="/#contact"
            className="px-6 py-3 bg-white text-black text-sm md:text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2 transition-transform hover:-translate-y-1 group"
          >
            <FaWpforms className="w-5 h-5 group-hover:rotate-12" />
            {t('ContactSales')}
          </Link>
        </div>
      </div>
    </div>
  );
}
