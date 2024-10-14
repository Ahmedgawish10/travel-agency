'use client';
import React,{Suspense} from 'react';
import { FaFacebookF, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from '../../i18n/clinet';

import { LuInstagram } from "react-icons/lu";
import { IoLogoTwitter } from "react-icons/io";
import Link from 'next/link';


function Footer({ lng }) {
  const { t } = useTranslation(lng, 'home');

  return (
      <Suspense  fallback="loading">
    <div>
      <footer className="bg-[#0a1931] dark:bg-gray-900 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between gap-3">
            <div className="mb-6 md:mb-0 flex-1">
              <a href="#" className="flex items-center w-fit">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt={t('footer.logo_alt')}
                />
                <span className="self-center pb-2 text-2xl sm:text-[1.3rem] font-semibold whitespace-nowrap dark:text-white">
                  {t('footer.company_name')}
                </span>
              </a>
              <div className="self-center xmd:w-[80%] text-gray-500 xsm:w-[100%] sm:text-[14px] font-semibold dark:text-white md:w-[80%] pt-2 md:pl-4">
                {t('footer.description')}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-2 md:grid-cols-3 xsm:grid-cols-1">
              {/* Quick Links */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.quick_links')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="pb-2">
                    <Link href={`/${lng}/flightTickets`} className="hover:underline">
                      {t('footer.flight_offers')}
                    </Link>
                  </li>
                  <li className="pb-2">
                    <Link href={`/${lng}/elhag&elumrah`} className="hover:underline">
                      {t('footer.hajj_offers')}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      {t('footer.tourism_offers')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pages */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.pages')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-2">
                    <Link href={`/${lng}/contact`} className="hover:underline">
                      {t('footer.contact')}
                    </Link>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      {t('footer.terms_conditions')}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.contact_us')}
                </h2>
                <div className="social-overlap process-scetion">
                  <div className="social-icons flex mb-3 w-[100%] text-center xmd:gap-3 lg:gap-3">
                    <a
                      href="https://www.facebook.com/profile.php?id=100090367776829&mibextid=ZbWKwL"
                      target="_blank"
                      className={`icon-up ${lng == "ar" ? "after:right-[100%]" : "after:left-[100%]"} w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center hover:before:bg-[#3f345f] hover:bg-[#3f345f] hover:text-white`}
                    >
                      <FaFacebookF />
                    </a>
                    <a
                  href="#"
                      className={`icon-up ${lng == "ar" ? "after:right-[100%]" : "after:left-[100%]"}  w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center hover:before:bg-[#3f345f] hover:bg-[#3f345f] hover:text-white`}
                    >
                      <LuInstagram />
                    </a>
                    <a
                                       href="#"
                      className={`icon-up ${lng == "ar" ? "after:right-[100%]" : "after:left-[100%]"} w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center hover:before:bg-[#3f345f] hover:bg-[#6CA0C8] hover:text-white`}
                    >
                      <IoLogoTwitter />
                    </a>
                  </div>
                  <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    className="inline-block rounded bg-primary md:ml-[-10px] lg:ml-0 px-2 pb-2 pt-2 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                  >
                    <a
                      href="tel:+01094487922"
                      className={`text-white ${lng == "ar" ? "flex-row-reverse justify-end" : ""} flex gap-2 items-center`}
                    >
                      <FaPhoneAlt/>
                      <span>01094487922</span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <div className="flex sm:block items-center justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {t('footer.all_rights_reserved')}
            </span>
            <div className={`flex ${lng == "ar" ? "flex-row-reverse" : ""} text-gray-500 sm:mt-4`}>
              <span className="px-2">Develop By</span>
              <a href="https://portfolio-react-1-mauve.vercel.app/" target="_blank" className="text-white">Ahmed Gawish</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Icons */}
      <div className="icons-contact z-20 fixed">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+0201094487922"
          className="fixed bottom-10 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse hover:animate-none"
          target="_blank"
          rel="noopener noreferrer"
          style={{ animationDelay: '5s' }}
        >
          <FaWhatsapp size={30} />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+01094487922"
          className="fixed bottom-24 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-pulse hover:animate-none"
        >
          <FaPhoneAlt size={30} />
        </a>
      </div>
    </div>
      </Suspense>
  );
}

export default Footer;

