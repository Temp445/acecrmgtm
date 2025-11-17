'use client'

import React from "react";
import { useTranslations } from "next-intl";
// import { useLocale } from "next-intl";

export default function StatsSection() {
  const t = useTranslations('StatsSection');
  // const locale = useLocale();

  return (
    <section className="w-full pt-20 md:pt-0 md:py-20 md:mt-32 lg:mt-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="relative text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3">
            {t('Title')}
          </h2>
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-indigo-600 rounded-full"></div>
          <p className=" text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            {t('Description')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8 md:px-0">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-violet-100">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-2 md:mb-4">
                <svg
                  className="w-4 h-4 md:w-8 md:h-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <span className="text-[22px] lg:text-4xl font-extrabold text-gray-800 mb-1">
                2,000+
              </span>
              <span className="text-sm lg:text-lg font-medium text-gray-600">
                {t('ActiveCustomers')}
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white  rounded-lg shadow-lg p-4 lg:p-8 transform transition-all duration-300 hover:scale-105 border border-violet-100 hover:shadow-xl">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-2">
                <svg
                  className="w-4 h-4 lg:w-8 lg:h-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <span className="text-[22px] md:text-4xl font-extrabold text-gray-800 mb-1">
                20+
              </span>
              <span className="text-sm md:text-lg font-medium text-gray-600">
                {t('Years')}
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="hidden md:block bg-white rounded-lg shadow-lg p-4 lg:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-violet-100">
            <div className="flex flex-col items-center">
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <svg
                  className="w-4 h-4 lg:w-8 lg:h-8 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span className="text-[22px] md:text-4xl font-extrabold text-gray-800 mb-1">
                98%
              </span>
              <span className="text-sm md:text-lg font-medium text-gray-600">
                {t('Customer')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
