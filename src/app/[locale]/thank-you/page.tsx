"use client";

import {
  CheckCircle,
  Clock,
  MessageCircle,
  Home,
  Youtube,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Logo from "@/assets/AceLogo.png";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { eventTracking } from "@/lib/gtm";

const WhatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const ThankYouPage = () => {
  
  useEffect(() => {
  const formId = sessionStorage.getItem("form_submitted");
  if (!formId) return;

  const formNames: Record<string, string> = {
    contact_form: "Contact Form",
    request_callback_form: "Request Callback Form",
    demo_popup_form: "Demo Popup Form"
  };

   eventTracking({
        eventName: 'form_submit',
        formName: formNames[formId] || "Form",
        formId,
        leadType: 'Enquiry',
      })

  sessionStorage.removeItem("form_submitted");
}, []);

  const handleClick = () => {
    const message = encodeURIComponent(
      "Hello, I want to know more about your services."
    );
    window.open(`https://wa.me/${WhatsappNumber}?text=${message}`, "_blank");
  };
  const t = useTranslations("ThankYou");

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div
              className="relative p-8 md:p-12 flex flex-col justify-between items-center text-white overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #10B981 0%, #34D399 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Image src={Logo} alt="logo" width={50} height={50} className="-ml-1.5" />
                </div>
                <div className="text-left font-bold text-lg leading-tight">
                  <div className="">ACE Software</div>
                  <div className="">Solutions Pvt. Ltd</div>
                </div>
              </div>

              <div className="relative z-10 text-center flex flex-col justify-center">
                <div className="mx-auto bg-white backdrop-blur-sm rounded-full p-6 mb-6">
                  <CheckCircle
                    className="w-16 h-16 text-green-600"
                    strokeWidth={2.5}
                  />
                </div>
                <h2 className="text-4xl font-bold mb-3">{t("Success")}</h2>
                <p className="text-white text-lg">{t("form")}</p>
              </div>

              <div className="flex items-center gap-4 mt-8 relative z-10">
                <a
                  href="https://www.facebook.com/people/Ace-Software-Solutions-Pvt-Ltd/61565550617223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Facebook className="w-5 h-5 text-emerald-600" />
                </a>
                <a
                  href="https://in.linkedin.com/company/ace-software-solutions-private-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Linkedin className="w-5 h-5 text-emerald-600" />
                </a>
                <a
                  href="https://youtube.com/@acesoftwaresolutions?si=KqZ0BFZg5pNmGBqk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Youtube className="w-5 h-5 text-emerald-600" />
                </a>
                <a
                  href="https://www.instagram.com/ace_software_solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white"
                >
                  <Instagram className="w-5 h-5 text-emerald-600" />
                </a>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {t("Title")}
              </h1>

              <p className="text-gray-600 mb-8 leading-relaxed">
                {t("Subtitle")}
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {t("Review")}{" "}
                    </h3>
                    <p className="text-sm text-gray-600">{t("para")} </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {t("Soon")}{" "}
                    </h3>
                    <p className="text-sm text-gray-600">{t("Expect")}</p>
                  </div>
                </div>

                <button
                  onClick={handleClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  {t("Chat")}
                </button>
              </div>

              <div className="space-y-3">
                <Link
                  href="/"
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Home className="w-5 h-5" />
                  {t("Home")}
                </Link>
                <Link
                  href="https://acesoft.in/products"
                  className="w-full text-gray-800 hover:bg-emerald-50 py-3 px-6 rounded-lg font-medium border-2 border-gray-800 flex items-center justify-center gap-2 transition-colors"
                >
                  {t("Explore")}
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
            <p className="text-center text-gray-600 text-sm">
              {t("need")}{" "}
              <a
                href="tel:+919840137210"
                className="text-emerald-600 font-semibold hover:text-emerald-700 underline"
              >
                +91 9840137210
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
