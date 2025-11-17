'use client'

import Header from "@/components/Header";
import { eventTracking } from "@/lib/gtm";
import React from "react";
import { InlineWidget } from "react-calendly";
import { useTranslations } from "next-intl";


const CONVERSION_LABEL = process.env.NEXT_PUBLIC_GA_ENQ_CONVERSION_LABEL!;
if (!CONVERSION_LABEL) {
  console.error('❌ Google Conversion Label missing. Set NEXT_PUBLIC_GA_ENQ_CONVERSION_LABEL in .env.');
}

const CalendlyEmbed = () => {
  const t = useTranslations('Hero')
  const url = "https://calendly.com/acesoft-sales/ace-crm-demo";


  // Trigger Google Conversion
  eventTracking({
    eventName: 'cms_bookdemo_view',
    formId: 'engagement',
    formName: 'CMS BookDemo Visit',
    leadType: 'Demo'  
  })

  return (
    <div>
      <div className="container mx-auto" >
        <Header />
      </div>
      <div className="bg-gray-900 " >
        <h1 className=" pt-8 text-xl md:text-2xl font-bold md:font-extrabold  text-center text-shadow-lg/20 text-white">{t('BookADemo')}</h1>
        <div className="pb-32">
          <InlineWidget url={url}
            styles={{ height: '700px' }} />
        </div>
      </div>
    </div>
  );
};

export default CalendlyEmbed;