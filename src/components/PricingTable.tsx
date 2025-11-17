'use client'

import React, { useState } from 'react';
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { useTranslations } from 'next-intl';
import { X, Lock } from 'lucide-react';
import Link from 'next/link';


interface Feature {
  name: string;
  standard: boolean;
  standardNote?: string;
  premium: boolean;
  premiumNote?: string;
}

interface Plan {
  name: string;
  displayName: string;
  desc: string;
  users: string;
  monthlyPerUser?: string;
  yearlyPerUser?: string;
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  buttonlink: string;
  buttonClass: string;
  highlighted: boolean;
  tag: string;
  trial?: string;
  card?: string;
  link?: string;
}

interface FeatureIconProps {
  available: boolean;
  limited?: boolean;
}

const PricingTable: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const t = useTranslations('Pricing')
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribeClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };


  const features1: Feature[] = [
    { name: t('Features.Excel'), standard: true, premium: true },
    { name: t('Features.LeadTracking'), standard: true, standardNote: t('Features.standardNote'), premium: true, premiumNote: t('Features.premiumNote') },
    { name: t('Features.AdvancedSearch'), standard: true, premium: true },
    { name: t('Features.TaskAssignment'), standard: true, premium: true },
  ];

  const autoTriggerFeatures: Feature[] = [
    { name: t('Features.Opportunity'), standard: true, premium: true },
    { name: t('Features.Quotation'), standard: true, premium: true },
    { name: t('Features.OrderManagement'), standard: true, premium: true },
  ];

  const features2: Feature[] = [
    { name: t('Features.CustomizedQuote'), standard: true, standardNote: t('Features.standardNote1'), premium: true, premiumNote: t('Features.Unlimited') },
    { name: t('Features.SalesTeam'), standard: true, premium: true },
    { name: t('Features.Calendar'), standard: true, premium: true },
    { name: t('Features.OneClick'), standard: true, standardNote: t('Features.standardNote10'), premium: true, premiumNote: t('Features.Unlimited') },
    { name: t('Features.SecureCloud'), standard: true, premium: true },
    { name: t('Features.ScheduleReport'), standard: false, premium: false },
  ];

  const plans: Plan[] = [
    {
      name: 'Standard',
      displayName: t('Plans.Standard.Name'),
      desc: t('Plans.Standard.Desc'),
      users: t('Plans.Standard.Users'),
      monthlyPerUser: t('Plans.Standard.MonthlyPerUser'),
      yearlyPerUser: t('Plans.Standard.YearlyPerUser'),
      monthlyPrice: '1,200',
      yearlyPrice: '960', // 20% 
      buttonText: t('Subscribe'),
      buttonlink: '#',
      buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      highlighted: false,
      tag: '',
      trial: t('Plans.Standard.Trial'),
      card: t('Plans.Standard.Card'),
      link: 'https://crm.acesoftcloud.in/signup'
    },
    {
      name: 'Premium',
      displayName: t('Plans.Premium.Name'),
      desc: t('Plans.Premium.Desc'),
      users: t('Plans.Premium.Users'),
      monthlyPerUser: t('Plans.Premium.MonthlyPerUser'),
      yearlyPerUser: t('Plans.Premium.YearlyPerUser'),
      monthlyPrice: '2,000',
      yearlyPrice: '1,600',
      buttonText: t('Subscribe'),
      buttonlink: '#',
      buttonClass: 'bg-indigo-600 hover:bg-indigo-700 text-white',
      highlighted: true,
      tag: t('Plans.Premium.Tag'),
      trial: t('Plans.Premium.Trial'),
      card: t('Plans.Premium.Card'),
      link: 'https://crm.acesoftcloud.in/signup',
    },
    {
      name: 'Enterprise',
      displayName: t('Plans.Enterprise.Name'),
      desc: t('Plans.Enterprise.Desc'),
      users: '',
      monthlyPrice: t('ContactUs'),
      yearlyPrice: t('ContactUs'),
      buttonText: t('Contact'),
      buttonlink: '#contact',
      buttonClass: 'bg-gray-800 hover:bg-gray-900 text-white',
      highlighted: false,
      tag: '',
      trial: '',
      card: '',
      link: undefined
    },
  ];

  const FeatureIcon: React.FC<FeatureIconProps> = ({ available }) => {
    if (!available) return <span className="text-red-500 font-medium">✗</span>;
    return <span className="text-green-500 font-medium">✓</span>;
  };

  const renderFeatureList = (featureList: Feature[], planKey: string, planName: string) => {
    return featureList.map((feature, index) => {
      const isAvailable = feature[planKey as keyof Feature] as boolean;
      const noteKey = `${planKey}Note` as keyof Feature;
      const featureNote = feature[noteKey] as string | undefined;
      const isLimited = featureNote ? featureNote.includes('limited') : false;

      return (
        <div key={`${planName}-${index}`} className="flex items-start">
          <div className="mt-0.5 mr-3">
            <FeatureIcon available={isAvailable} limited={isLimited} />
          </div>
          <span className={`${isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
            {feature.name}
            {featureNote && <span className="text-indigo-700 font-semibold text-sm"> {featureNote}</span>}
          </span>
        </div>
      );
    });
  };

  const [expandedPlans, setExpandedPlans] = useState<{ [key: string]: boolean }>({
    'Standard': false,
    'Premium': false,
    'Enterprise': false
  });


  const togglePlanFeatures = (planName: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  return (
    <div className="w-full  container mx-auto px-4  md:px-4 py-16 mb-10 md:mb-0 xl:px-10 " id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">{t('Title')}</h2>
        <p className=" md:text-lg text-gray-600">{t('Subtitle')}</p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-gray-100 rounded-full p-1 flex border border-gray-200 shadow-sm">
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${billingPeriod === 'monthly' ? 'bg-indigo-600 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
            onClick={() => setBillingPeriod('monthly')}
          >
            {t('Monthly')}
          </button>
          <button
            className={`px-6 py-2 text-sm font-medium rounded-full transition-all flex items-center ${billingPeriod === 'yearly' ? 'bg-indigo-600 text-white shadow' : 'text-gray-700 hover:text-gray-900'}`}
            onClick={() => setBillingPeriod('yearly')}
          >
            {t('Yearly')}
            <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
              {t('YearlyDiscount')}
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-5">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-xl flex flex-col border ${plan.highlighted ? 'border-indigo-500 shadow-lg ring-1 ring-indigo-500' : 'border-gray-200 shadow'} hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
          >
            {plan.tag && (
              <div className="absolute top-5 right-5">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                  {plan.tag}
                </span>
              </div>
            )}

            <div className="p-8 md:p-5">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.displayName}</h2>
              <p className="text-gray-600 mb-6">{plan.desc}</p>

              {plan.name !== 'Enterprise' ? (
                <div className="mb-2">
                  <div className="flex items-baseline">
                    <span className="text-2xl md:text-4xl font-bold text-gray-900">₹{billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</span>
                    <span className="text-base text-gray-500 ml-2">/{t('Month')}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{t('billed')} {billingPeriod === 'monthly' ? `${t('Monthly')}` : `${t('Yearly')}`}</p>
                </div>
              ) : (
                <div className="mb-2">
                  <span className="text-2xl font-bold text-gray-900">{plan.monthlyPrice}</span>
                </div>
              )}

              <p className="text-gray-600 mb-6">{plan.users} <span className='text-indigo-700'>
                {plan.name !== 'Enterprise' && billingPeriod === 'monthly' ? plan.monthlyPerUser : plan.yearlyPerUser}
              </span></p>

              <button onClick={handleSubscribeClick} className={` ${plan.buttonClass} w-full py-3 rounded font-medium shadow-sm hover:shadow transition-all duration-200 md:mb-5 text-center block`}>
                {plan.buttonText}
              </button>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[520]">
                  <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in">
                    <button
                      onClick={handleClose}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={24} />
                    </button>

                    <div className="flex justify-center mb-4">
                      <div className="bg-indigo-100 p-4 rounded-full">
                        <Lock className="text-indigo-600" size={32} />
                      </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
                      {t("Alert.title")}
                    </h2>

                    <p className="text-gray-600 text-center mb-6 leading-relaxed">
                      {t("Alert.des")}
                    </p>

                    <div className="space-y-3 ">
                      <Link href="https://crm.acesoftcloud.in/login"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 flex  items-center justify-center rounded-lg transition-colors duration-200"
                      >
                        {t("Alert.login")}
                      </Link>
                      <button
                        onClick={handleClose}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg transition-colors duration-200"
                      >
                        {t("Alert.maybe")}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <button
                className="w-full md:hidden border text-black border-black hover:bg-indigo-500 hover:text-white py-3 rounded font-medium flex items-center justify-center mt-5 mb-4"
                onClick={() => togglePlanFeatures(plan.name)}
              >
                {t('FeatureList')}
                <IoAddOutline className="ml-3 text-lg text-black  border border-black rounded-full" />
              </button>

              {/* Features section visibility */}
              <div className={`md:block transition-all duration-300 ${expandedPlans[plan.name] ? 'block' : 'hidden'}`}>

                {plan.name !== 'Enterprise' ? (
                  <>
                    <h3 className="font-medium text-gray-900 mb-4">{t('FeaturesIncluded')}</h3>
                    <div className="space-y-3">
                      {/* features-1 */}
                      {renderFeatureList(features1, plan.name.toLowerCase(), plan.name)}

                      {/*Feature-2  */}
                      <div className="py-4 pl-3  rounded-lg my-4 border border-indigo-100 shadow-lg -ml-3 hover:shadow-xl">
                        <div className="flex items-center  mb-2">
                          <span className="text-indigo-700 font-bold flex"> <span className='mr-2 text-2xl'><MdOutlineGeneratingTokens /></span>{t('AutoTrigger')}</span>
                        </div>
                        <div className="flex justify-center">
                          <div className="flex-1">
                            {autoTriggerFeatures.map((feature, index) => {
                              const planKey = plan.name.toLowerCase();
                              const isAvailable = feature[planKey as keyof Feature] as boolean;
                              const noteKey = `${planKey}Note` as keyof Feature;
                              const featureNote = feature[noteKey] as string | undefined;

                              return (
                                <div key={`auto-${index}`} className="flex items-start py-1">
                                  <div className="mt-0.5 mr-3">
                                    <FeatureIcon available={isAvailable} />
                                  </div>
                                  <span className={`${isAvailable ? 'text-gray-800' : 'text-gray-500'}`}>
                                    {feature.name}
                                    {featureNote && <span className="text-indigo-700 font-semibold text-sm"> {featureNote}</span>}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* features-3*/}
                      {renderFeatureList(features2, plan.name.toLowerCase(), plan.name)}

                      {(plan.trial || plan.card) && plan.link && (
                        <div className='bg-indigo-700 rounded-lg hover:bg-indigo-900 py-1'>
                          <a href={plan.link} className="mt-6 pt-4">
                            {plan.trial && <p className="text-white font-bold text-center">{plan.trial}</p>}
                            {plan.card && <p className="text-white text-sm text-center">{plan.card}</p>}
                          </a>
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-gray-800">
                    <p className="text-lg font-medium mb-4">{t('FeaturesIncluded')}</p>
                    <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>{t('EverythingInPremium')}</p>
                    <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>{t('Customizable')}</p>
                    <p className="mb-6"> <span className="text-green-500 font-medium mr-3">✓</span>{t('ScheduleReport')}</p>
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600">{t('ContactSales')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;