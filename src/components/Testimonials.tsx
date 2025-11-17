"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Testimonials = () => {
  const t = useTranslations ("Testimonials")

  const testimonials = [
  {
    Name: t("user1.Name"),
    Role: t("user1.Role"),
    Quote: t("user1.Quote") 
  },
  {
    Name: t("user2.Name"),
    Role: t("user2.Role"),
    Quote: t("user2.Quote") 
  },
  {
    Name: t("user3.Name"),
    Role: t("user3.Role"),
    Quote: t("user3.Quote") 
  },
  {
    Name: t("user4.Name"),
    Role: t("user4.Role"),
    Quote: t("user4.Quote") 
  },
  {
    Name: t("user5.Name"),
    Role: t("user5.Role"),
    Quote: t("user5.Quote") 
  },
  {
    Name: t("user6.Name"),
    Role: t("user6.Role"),
    Quote: t("user6.Quote") 
  },
];
  return (
    <section className="pb-10 md:py-20" id="testimonials">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-5 md:mb-16">
          {t("Title")} <span className="text-indigo-600">ACE CRM</span>
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white relative p-8 rounded-2xl shadow-md border-t-4 border-indigo-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-gray-700 md:text-lg leading-relaxed mb-8">
                “{testimonial.Quote}”
              </p>

              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{testimonial.Name}</h3>
                <p className="text-sm text-gray-500">{testimonial.Role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
