'use client'

import React from "react";
import Image from "next/image";
import excel from "@/assets/excel.png";
import { useTranslations } from "next-intl";

export default function ToolsSection() {
  const t = useTranslations('ToolsSection')
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:py-16 mt-0 relative container">
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-100 rounded-full opacity-20 -z-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-100 rounded-full opacity-30 -z-10 blur-3xl"></div>

      <div className="text-center mb-5 sm:mb-10">
        <h2 className=" text-[22px] lg:text-3xl  font-extrabold mb-0 relative inline-block ">
          <span className="text-[#27548A]">
            {t('Title')}
          </span>
        </h2>

        <p className="hidden sm:block text-[#768296] my-1 max-w-4xl mx-auto text-[16px] lg:text-lg md:text-md leading-relaxed font-semibold">
          {t('Subtitle')}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-8 mt-10 md:mt-16 lg:w-1/2 order-2 lg:order-1 ">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold sm:text-lg mb-2">{t('QuickImport')}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
           {t('QuickImportDesc')}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold sm:text-lg mb-2">{t('SeamlessTransition')}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
            {t('SeamlessTransitionDesc')}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold sm:text-lg mb-2">{t('ProductivityBoost')}</h3>
            <p className="text-gray-600 text-sm sm:text-base">
              {t('ProductivityBoostDesc')}
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-t-4 border-green-800 hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold sm:text-lg mb-2">{t('EnhancedSecurity')}</h3>
            <p className="text-gray-600  text-sm sm:text-base">
              {t('EnhancedSecurityDesc')}
            </p>
          </div>
        </div>

        <div className="lg:w-1/2 lg:order-2">
          <Image
            src={excel}
            alt="ACE CRM"
            width={900} 
            className="sm:w-[900px] sm:h-[550px] xl:ml-20 "
          />
        </div>
        <p className="sm:hidden text-[#768296] my-1 w-full ml-3 mx-auto text-[16px] lg:text-lg md:text-md leading-relaxed font-semibold">
        {t('Subtitle')}
        </p>
      </div>
    </div>
  );
}
