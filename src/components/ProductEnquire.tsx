'use client';

import React, { FormEvent, useRef, useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

import emailjs from "@emailjs/browser";
import { sendWhatsappMessage } from "../services/whatsapp/whatsappService";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { useTranslations } from "next-intl";
import { CountryCode } from 'libphonenumber-js';
import { useRouter } from "next/navigation";


const service_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const template_ID = process.env.NEXT_PUBLIC_EMAILJS_ENQ_TEMPLATE_ID!;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

// const LI_ENQ_CONVERSION_LABEL = process.env.NEXT_PUBLIC_LI_ENQ_CONVERSION_ID!;
// if (!LI_ENQ_CONVERSION_LABEL) {
//   console.error('❌ LinkedIn Conversion Label missing. Set NEXT_PUBLIC_LI_ENQ_CONVERSION_ID in .env.');
// }

const endpoint = '/api/proxy-validate-email';

const ProductEnquire: React.FC = () => {
  const t = useTranslations('ProductEnquire');
  const countryCode = t('code') as CountryCode || 'IN';

  const form = useRef<HTMLFormElement | null>(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string>("");
  const [phone, setPhone] = useState<string | undefined>();
  const [phoneError, setPhoneError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const validateEmail = async (email: string): Promise<string> => {
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });


      if (response.status !== 200) return t('EmailError');

      const data = await response.json();
      if (data.success) {
        return data.isValid ? '' : t('EmailError');
      } else {
        return (` Failed: ${data.error}`);
      }
    } catch (err) {
      console.error('Email validation error:', err);
      return t('ValidationUnavailable');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const formCurrent = form.current;
    if (!formCurrent) return;

    const emailValidationMessage = await validateEmail(email);
    if (emailValidationMessage) {
      setEmailError(emailValidationMessage);
      return;
    } else {
      setEmailError('');
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError(t('PhoneError'));
      return;
    } else {
      setPhoneError('');
    }

    const phoneWithoutPlus = phone.replace(/[\s+]/g, '');

    const formData = {
      Full_Name: (formCurrent['Name'] as HTMLInputElement)?.value || '',
      Company_Name: formCurrent['company']?.value || '',
      Business_Email: email,
      Mobile_Number: phoneWithoutPlus,
      Location: formCurrent['location']?.value || '',
      Message: formCurrent['queries']?.value || '',
      Product_Interested: formCurrent['product']?.value || '',
      Originate_From: 'Ace CRM',
    };

    setLoading(true);

    try {
      await emailjs.send(service_ID, template_ID, formData, publicKey);
      sessionStorage.setItem("form_submitted", "contact_form");

      formCurrent.reset();
      setEmail('');
      setPhone('');
      router.push('/thank-you');
    } catch (error) {
      console.error('Email sending failed:', error);
      alert(t('Failure'));
    } finally {
      setLoading(false);
    }

    try {
      await sendWhatsappMessage(
        "enquiry_form",
        {
          originateFrom: formData.Originate_From,
          fullName: formData.Full_Name,
          companyName: formData.Company_Name,
          businessEmail: formData.Business_Email,
          mobileNumber: formData.Mobile_Number,
          location: formData.Location,
          productInterest: formData.Product_Interested,
          message: formData.Message,
        },
      );

      await sendWhatsappMessage(
        'customer_greetings',
        {
          fullName: formData.Full_Name,
          product: formData.Product_Interested,
          siteUrl: 'https://acesoft.in',
          imageUrl:
            'https://res.cloudinary.com/dohyevc59/image/upload/v1749124753/Enquiry_Greetings_royzcm.jpg',
        },
        phoneWithoutPlus,
      );
    } catch (error) {
      console.error('WhatsApp sending error:', error);
    }
  };

  return (
    <div className="relative container mx-auto pb-10 lg:pb-20">
      <div className="relative flex flex-col lg:flex-row justify-center lg:px-10">
        <div className="min-h-screen w-full lg:py-12 px-2 md:px-4" id="contact">
          <div className="relative max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-200 ">
            <h2 className="text-2xl font-bold text-center mb-6">{t('Title')}</h2>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('Name')}:
                </label>
                <input
                  id="name"
                  name="Name"
                  type="text"
                  required
                  placeholder={`${t('NamePlaceholder')} *`}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  {t('Company')}:
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  placeholder={`${t('CompanyPlaceholder')} *`}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t('Email')}:
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={`${t('EmailPlaceholder')} *`}
                  onChange={(e) => setEmail(e.target.value.trim())}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>

              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  {t('Mobile')}:
                </label>
                <PhoneInput
                  international
                  defaultCountry={countryCode}
                  name="number"
                  value={phone}
                  onChange={setPhone}
                  required
                  className=" !shadow-none  !bg-transparent rounded-md border border-gray-300 mt-1 p-2 [&>input]:border-none [&>input]:outline-none [&>input]:bg-transparent"
                />
                {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  {t('Location')}:
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  required
                  placeholder={`${t('LocationPlaceholder')} *`}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="flex flex-wrap gap-2 w-full items-center">
                <label className="block text-sm font-medium text-gray-700 ">
                  {t('Product')}:
                </label>
                <input
                  type="text"
                  name="product"
                  defaultValue="ACE CRM"
                  readOnly
                  className="text-sm font-bold py-1"
                  aria-label="Product Interested"
                />
              </div>

              <div>
                <label htmlFor="queries" className="block text-sm font-medium text-gray-700">
                  {t('Queries')}:
                </label>
                <textarea
                  id="queries"
                  name="queries"
                  rows={3}
                  placeholder={`${t('QueriesPlaceholder')}`}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="flex">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white text-[14px] px-3 py-2 md:px-5 md:py-2.5 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2"
                  disabled={loading}
                >
                  {loading ? t('Submitting') : t('Submit')}

                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="py-10 md:py-16" id="contact">
          <div className="container mx-auto px-6 lg:px-0 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-5 md:mb-12">
              {t("ContactUs")}
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="bg-white border p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
                <div className="bg-indigo-500 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">{t("contact.Email")}</h3>
                <p className="text-gray-700 text-lg hover:text-indigo-600 transition">
                  sales@acesoft.in
                </p>
              </div>

              <div className="bg-white border p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
                <div className="bg-indigo-500 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">{t("contact.Phone")}</h3>
                <p className="text-gray-700 text-lg hover:text-indigo-600 transition">
                  +91 9840137210
                </p>
              </div>

              <div className="md:col-span-2 border bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center">
                <div className="bg-indigo-500 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">{t("contact.Location")}</h3>
                <p className="text-gray-700 text-center text-md md:text-lg">
                  {t("contact.Address")}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductEnquire;
