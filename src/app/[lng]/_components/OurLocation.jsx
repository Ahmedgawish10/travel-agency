"use client"; // Ensure client-side rendering

import React from 'react';
import { useTranslation } from '../../i18n/clinet';
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function OurLocaton({ lng }) {
  const { t } = useTranslation(lng, 'home');
console.log(1);
  return (
    <section className="mt-12 overflow-hidden">
      <div className="ourloaction w-[80%] mx-auto text-center pb-3"> 
        <motion.h2 
          initial={{ opacity: 0, x: `-25vw` }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="text-3xl font-extrabold text-[#03245a]"
        >
          {t('ourlocation.title')}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, x: `25vw` }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} 
          transition={{
            delay: 0.2,
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="text-xl text-gray-500"
        >
          {t('ourlocation.description')}
        </motion.p>
      </div>
      
      <div className="overlay bg-gray-100">
        <div className="w-[90%] mx-auto pb-10">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center"></div>
          
          <div className="grid pt-5 grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
          
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d213.43583626708704!2d30.656243!3d31.138254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f65b002f3d6351%3A0xe4382e4225cb418b!2z2KfZhNis2YjYp9ixINmE2YTYs9mK2KfYrdip!5e0!3m2!1sen!2sus!4v1726570170401!5m2!1sen!2sus" width="100%" 
                height="300px" 
                style={{ border: "5px" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            
            <div>
              <div className="max-w-full mx-auto rounded-lg overflow-hidden pt-6">
                <motion.div
                  initial={{ opacity: 0, y: `-10px` }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{
                    delay: 0.1,
                    duration: 0.1,
                    ease: "easeInOut"
                  }} 
                  className="box1 pb-2"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.address-title')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                    <FaLocationDot className="sm:text-[20px] md:text-[20px]" />
                    {t('ourlocation.address')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: `-100px` }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{
                    delay: 0.4,
                    duration: 0.1,
                    ease: "easeInOut"
                  }} 
                  className="border-t border-gray-200 box2 pt-3 pb-2"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.hours.time-work')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                    <FaCalendarDays className="sm:text-[20px]" />
                    {t('ourlocation.hours.saturday_to_thursday')}
                  </p>
                  <p className="mt-1 text-gray-600 md:pl-2">
                    {t('ourlocation.hours.friday')}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: `-100px` }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{
                    delay: 0.6,
                    duration: 0.1,
                    ease: "easeInOut"
                  }} 
                  className="border-t border-gray-200 box3 pt-3"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    {t('ourlocation.contact.contact')}
                  </h3>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                    <a 
                      href="mailto:aljewargawish@gmail.com" 
                      className="gap-2 text-sm font-medium inline-flex items-center py-0.5 dark:bg-gray-700 dark:text-blue-400"
                    >
                      <CgMail className="sm:text-[20px] text-[20px]" />
                      <span>{t('ourlocation.contact.email')}</span>
                    </a>
                  </p>
                  <p className="mt-1 text-gray-600 flex items-center gap-2 md:pl-2">
                    <a 
                      href="tel:+201094487922" 
                      className="gap-2 text-sm font-medium inline-flex items-center py-0.5 rounded dark:bg-gray-700 dark:text-blue-400"
                    >
                      {lng == "ar" ? (
                        <FaPhoneFlip className="sm:text-[20px] text-[16px]" />
                      ) : (
                        <FaPhoneAlt className="sm:text-[20px] text-[16px]" />
                      )}
                      <span>{t('ourlocation.contact.phone')}</span>
                    </a>
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
