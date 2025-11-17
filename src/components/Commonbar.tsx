"use client";
import { FC, useState, useRef, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/AceLogo.png";
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { GoGlobe } from "react-icons/go";
import { TbChevronDown } from "react-icons/tb";
import { useTranslations } from "next-intl";

const Commonbar: FC = () => {
  const t = useTranslations('Menu');
  const router = useRouter();
  const currentLocale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English', flag: 'us' },
    { code: 'hi', label: 'हिन्दी', flag: 'in' },
    { code: 'de', label: 'Deutsch', flag: 'de' },
    { code: 'fr', label: 'Français', flag: 'fr' },
    { code: 'es', label: 'Español', flag: 'es' },
    { code: 'it', label: 'Italiano', flag: 'it' },
    { code: 'ja', label: '日本語', flag: 'jp' },
    { code: 'zh', label: '中文', flag: 'cn' },
    { code: 'br', label: 'Português (Brasil)', flag: 'br' },
    { code: 'kr', label: '한국어', flag: 'kr' },
    { code: 'be', label: 'বাংলা', flag: 'bd' },
    { code: 'ru', label: 'русский', flag: 'ru' },

  ];

  const handleLocaleChange = (locale: string) => {
    setCookie('NEXT_LOCALE', locale, { path: '/' });
    router.refresh();
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <nav className=" container mx-auto hidden md:flex items-center justify-between md:pt-1.5 pb-2  px-4 md:px-0  relative border-b-2 ">
        <div className="flex gap-5">
          <div className="md:flex items-center hidden ">
            <Link href="https://acesoft.in/" className="text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#2b2d42] flex gap-1">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="w-10 h-10 md:w-10 md:h-10"
              />
              <span className="mt-2 text-sm lg:text-base ">ACE Software <br className="lg:hidden" /> Solutions Pvt. Ltd</span>
            </Link>
          </div>


          <div className="hidden md:flex items-center space-x-4 ml-10">
            <div className="group">
              <Link
                href="https://acesoft.in/products/ace-project-management-software"
                className="flex items-cente text-sm text-gray-800 font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
              >
                Project
              </Link>
              <div className="hidden group-hover:block absolute top-11   w-52 bg-white border  text-black text-xs p-2 rounded z-[210]">
                {t('ProjectTooltip')}
              </div>
            </div>

            <div className="group">
              <Link
                href="https://acesoft.in/products/ace-calibration-management-system"
                className="flex items-center text-sm text-gray-800 font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
              >
                CMS
              </Link>
              <div className="hidden group-hover:block absolute top-11   w-52 bg-white border shadow-2xl text-black text-xs p-2 rounded z-[210]">
                {t('CMSTooltip')}
              </div>
            </div>

            <div className="group">
              <Link
                href="https://acesoft.in/products/ace-profit-ppap"
                className="flex items-center  text-sm text-gray-800 font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out   hover:scale-105"
              >
                PPAP
              </Link>
              <div className="hidden group-hover:block absolute top-11   w-52 bg-white border shadow-2xl text-black text-xs p-2 rounded z-[210]">
                {t('PPAPTooltip')}
              </div>
            </div>

            <Link
              href="https://acesoft.in/products"
              className="flex items-center text-sm text-gray-800 font-semibold relative px-4 py-2 rounded-full transition-all duration-300 ease-in-out  hover:scale-105"
            >
              {t('AllProducts')}
            </Link>
          </div>
        </div>

        <div className="relative z-[220]" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 px-2 py-1.5 mr-2 text-gray-800"
          >
            <GoGlobe className="w-5 h-5" />
            {languages.find((l) => l.code === currentLocale)?.label}
            <TbChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <ul className="absolute right-2 mt-2 w-96 bg-white border rounded shadow-lg z-50 grid grid-cols-2 gap-1 p-2">
              {languages
                .filter((lang) => lang.code !== currentLocale)
                .map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleLocaleChange(lang.code)}
                      className="flex items-center gap-2 px-2 py-1 text-[12px] text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition rounded"
                    >
                      <span className={`fi fi-${lang.flag} w-7 h-5 block shadow-sm`} />
                      <span>{lang.label}</span>
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </div>

      </nav>

    </>
  );
};

export default Commonbar;
