'use client';

import React from 'react';
import { Sparkles, Gift, X, Zap, Star, Check, Users, TrendingUp, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface FreeTrialPopupProps {
  onClose: () => void;
}

const FreeTrialPopup: React.FC<FreeTrialPopupProps> = ({ onClose }) => {

  const t = useTranslations("Popup")
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[220] p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl max-w-xl w-full relative animate-scale-in overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-2xl" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-all duration-200 z-20 bg-white/20 backdrop-blur-sm rounded-full p-2"
          aria-label='Close'
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative z-10 px-2 md:px-8 pt-10 pb-8">
          <div className="relative mb-6">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto shadow-xl border-4 border-indigo-100 transform hover:scale-110 transition-transform duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-20 h-20 rounded-full flex items-center justify-center">
                <Gift className="w-10 h-10 text-white" />
              </div>
            </div>

            <Star
              className="w-6 h-6 text-yellow-400 absolute top-0 left-1/4 animate-pulse"
              fill="currentColor"
            />
            <Star
              className="w-5 h-5 text-yellow-400 absolute top-2 right-1/4 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: '0.3s' }}
            />
            <Star
              className="w-4 h-4 text-yellow-400 absolute bottom-2 left-1/3 animate-pulse"
              fill="currentColor"
              style={{ animationDelay: '0.6s' }}
            />
          </div>

          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-yellow-100 border-2 border-yellow-300 text-yellow-700 px-4 py-1.5 rounded-full mb-4 shadow-sm">
              <Zap className="w-4 h-4" fill="currentColor" />
              <span className="text-xs font-bold uppercase tracking-wider">
                {t('Offer')}
              </span>
            </div>

            <h2 className=" text-xl md:text-2xl font-bold text-gray-800 mb-3">
              {t("Try")}
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              {t("Get")} {' '}
              <span className="font-bold text-blue-600">
                ACE CRM
              </span>{' '}
              {t("Platform")}  <br />{t("Free")}
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-4 border border-blue-100">
              <p className="text-sm font-semibold text-gray-800 mb-3">
                {t("All")}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 text-left">
                  <div className="bg-blue-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <strong>{t("Manage")}</strong> {t("Track")}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="bg-green-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <strong>{t("Sales")}</strong> {t("Visualize")}
                  </span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <div className="bg-purple-100 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <BarChart3 className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-700">
                    <strong>{t("Advanced")}</strong> {t("Make")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="https://crm.acesoftcloud.in/signup"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105  transition-all duration-200  mb-6 flex items-center justify-center gap-2 group"
          >
            {t("Start")}
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Link>

          <div className="text-center space-y-2 border-t border-gray-200 pt-5">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <div className="bg-green-100 rounded-full p-1">
                <Check className="text-green-700 w-4 h-4" />
              </div>
              <span className="text-sm font-semibold">
                {t("Credit")}
              </span>
            </div>
            <p className="text-xs text-gray-500">
              {t("Cancel")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrialPopup;