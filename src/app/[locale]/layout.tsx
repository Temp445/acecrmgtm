import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import GTM from '@/components/analytics/GTM';
import { GTMTracker } from '@/components/analytics/GTMTracker';
import { GTM_ID } from '@/lib/gtm';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

const canonicalUrl = 'https://acesoft.in/products/ace-customer-relationship-management-system';

export const metadata: Metadata = {
  title: "ACE CRM",
  description: "Switch from Excel to ACE CRM – an affordable, cloud-based CRM software built for small businesses, startups, and sales teams in India. Start free today.",
  keywords: "ACE CRM,ace crm,Best CRM software for small business,CRM for small business India,Free CRM software,CRM for Excel users,Easy CRM for small teams,CRM for lead tracking,CRM for sales pipeline,Cloud CRM India,Cloud CRM,CRM with quote generation,Affordable CRM for Indian business,Affordable CRM for Small business,Buy CRM software India,CRM for sales automation India,CRM for retail business India,CRM for retail business,CRM for small business,Affordable CRM India,Affordable CRM,CRM for startups,CRM for Excel users,Best CRM India 2025,CRM tool for small teams,Cloud CRM software,CRM for lead and deal tracking",
  alternates: {
    canonical: canonicalUrl,
  },
  robots: 'noindex,follow',

  openGraph: {
    title: "ACE CRM",
    description: "Switch from Excel to ACE CRM – an affordable, cloud-based CRM software built for small businesses, startups, and sales teams in India. Start free today.",
    url: 'https://acesoft.in/products/ace-customer-relationship-management-system',
    siteName: "ACE CRM",
    images: [
      {
        url: "https://crm.acesoftcloud.in/assets/AceLogo.png",
        width: 1200,
        height: 630,
        alt: "ACE CRM – Smart CRM Tool",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }


  // Ensure Google Tag Manager ID is set
  if (!GTM_ID) {
    console.error(
      "❌ Missing Google Tag Manager ID. Please set NEXT_PUBLIC_GTM_ID in .env."
    );
  }
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/AceLogo.png" />
        <GTM />
      </head>
      <body className={inter.variable}>
        {/* Google Tag Manager Fallback Script */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        {/* Google Tag Manager Tracker */}
        <GTMTracker />

        {/* LinkedIn Tracker */}
        {/* <LinkedInTracker partnerId={linkedInPartnerId} /> */}

        <NextIntlClientProvider> {children} </NextIntlClientProvider>
      </body>
    </html>
  );
}