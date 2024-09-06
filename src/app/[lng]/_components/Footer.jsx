"use client"

import React from 'react'
import { useTranslation } from '../../i18n/clinet'
import { FaFacebookF } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTwitter } from "react-icons/io";
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';


function Footer({lng}) {
          const { t } = useTranslation(lng, 'home')

return (
    <div>
      <footer className="bg-[#03245A] dark:bg-gray-900 text-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between gap-3">
            <div className="mb-6 md:mb-0 flex-1">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt={t('footer.logo_alt')}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Al-Jewar Tours
                </span>
              </a>
              <div className="self-center xmd:w-[80%] xsm:w-[100%] sm:text-[14px] font-semibold dark:text-white md:w-[80%] pt-2 md:pl-4">
                {t('footer.description')}
              </div>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-2 md:grid-cols-3 xsm:grid-cols-1">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.quick_links')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="pb-2">
                    <a href="https://flowbite.com/" className="hover:underline">
                                   {t('footer.flight_offers')}
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="https://flowbite.com/" className="hover:underline">
                      {t('footer.hajj_offers')}
                    </a>
                  </li>
                  <li>
                    <a href="https://tailwindcss.com/" className="hover:underline">
                      {t('footer.tourism_offers')}
                    </a>
                  </li>
                  
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.pages')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="https://github.com/themesberg/flowbite" className="hover:underline">
                      {t('footer.github')}
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                      {t('footer.discord')}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">
                  {t('footer.contact_us')}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <div class="social-overlap process-scetion ">

                       <div className="icons">  
                                 <div class="social-icons flex mb-3 iconpad text-center xmd:gap-3 lg:gap-3">
                                  <a href="https://www.facebook.com/profile.php?id=100090367776829&mibextid=ZbWKwL" target="_blank"  class={`slider-nav-item ${lng=="ar"?"after:right-[100%]":"after:left-[100%]"}    w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center  hover:before:bg-[#3f345f] hover:bg-[#3f345f] hover:text-white`}><FaFacebookF /></a>
                                    <a  class={`slider-nav-item ${lng=="ar"?"after:right-[100%]":"after:left-[100%]"}  w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center  hover:before:bg-[#3f345f] hover:bg-[#3f345f] hover:text-white`}><LuInstagram /></a>
                                   
                           <a  class={`slider-nav-item ${lng=="ar"?"after:right-[100%]":"after:left-[100%]"}  w-[30px] h-[30px] xmd:w-[50px]  xmd:h-[50px] flex justify-center text-[#311f9b] items-center  hover:before:bg-[#3f345f] hover:bg-[#6CA0C8] hover:text-white`}><IoLogoTwitter /></a>
                                   </div>
                                    <a   href="tel:+01094487922" className={`text-white ${lng=="ar"?"flex-row-reverse justify-end":""} flex gap-2 items-center`}> 
                                     <span>    <FaPhoneAlt /> </span>
                                    <span>01064880594</span>
                                    </a>
                                
                              </div>
        </div>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex sm:block items-center justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {t('footer.all_rights_reserved')}
            </span>
            <div className={`flex ${lng=="ar"?"flex-row-reverse":""}  sm:mt-4`}>
              <span className="px-2 ">Develop By</span>
                 <a href="" className="text-white"> Ahmed Gawish</a>
            </div>
          </div>
        </div>
      </footer>
      {/*contact phones*/}
     <div className="icons-contact  z-20 fixed">
           <a 
        href="https://wa.me/+0201094487922" 
        className="fixed bottom-10 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse hover:animate-none"
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          animationDelay: '5s',
        }}
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
  );
}

export default Footer
