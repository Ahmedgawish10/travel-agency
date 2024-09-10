"use client";
import React from 'react';
import { useTranslation } from '../../i18n/clinet'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

export default function OurLocaton({lng}) {
  const { t } = useTranslation(lng,'home');

  return (
    <section className="mt-12">
      <div className="ourloaction w-[80%] mx-auto text-center pb-3"> 
        <h2 className="text-3xl font-extrabold text-[#03245a]">
          {t('ourlocation.title')}
        </h2>
        <p className="text-xl text-gray-500">
          {t('ourlocation.description')}
        </p>
      </div>
      <div className="overlay bg-gray-100">
        <div className="w-[90%] mx-auto pb-10">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            {/* Optional content */}
          </div>
          <div className="grid pt-5 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.016018329415!2d30.656121!3d31.138207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA4JzE4LjAiTiAzMMKwMzknMjIuMCJF!5e0!3m2!1sen!2sus!4v1694179730921!5m2!1sen!2sus"
                width="100%" 
                height="300px" 
                style={{ border: "5px" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden pt-6">
                <div className="box1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.address-title')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                  <div>                  <FaLocationDot className="sm:text-[20px] md:text-[20px]"/></div>
                    {t('ourlocation.address')}
                  </p>
                </div>
                <div className="border-t border-gray-200 box2 pt-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.hours.time-work')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                  <div>                  <FaCalendarDays className="sm:text-[20px]"/></div>
                    {t('ourlocation.hours.saturday_to_thursday')}
                  </p>
                  <p className="mt-1 text-gray-600 md:pl-2">
                    {t('ourlocation.hours.friday')}
                  </p>
                </div>
                <div className="border-t border-gray-200 box3 pt-3">
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.contact.contact')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                   <a  href="mailto:ahmdgawish44@gmail.com" className={`  gap-2 text- font-medium inline-flex items-center  py-0.5  dark:bg-gray-700 dark:text-blue-400  `}> 
                  <div>             <CgMail className="sm:text-[20px] text-[20px] "/></div>
                                    <span> {t('ourlocation.contact.email')}</span>
                                    </a>
                   
                  </p>
                  <p className="mt-1  text-gray-600 flex items-center gap-2 md:pl-2">
                 <a  href="tel:+201094487922" className={`  gap-2  text-sm font-medium inline-flex items-center  py-0.5 rounded dark:bg-gray-700 dark:text-blue-400`}> 
                  <div>                  <FaPhoneAlt className="sm:text-[20px] text-[16px]"/></div>
                                    <span>    {t('ourlocation.contact.phone')}</span>
                                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

  
