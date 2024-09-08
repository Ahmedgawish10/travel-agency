"use client"

import React from 'react'
import { useTranslation } from '../../i18n/clinet'
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaSearchDollar } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";


function WhyUs({lng}) {
          const { t } = useTranslation(lng, 'home')

return (
    <div>
     
      <section className="why-us text-gray-700 body-font">
      <div className="flex justify-center mt-10 text-3xl font-regular pb-6">
        {t('Whyus.whyUs')}
      </div>
      <div className="content bg-no-repeat sm:bg-cover md:bg-cover md:bg-center ">
        <div className="w-[90%] py-12 mx-auto">
          <div className="grid xmd:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:justify-around lg:justify-center md:gap-5 lg:gap-3">
            <div className=" ">
              <div className="transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <BiSolidOffer className="text-8xl text-[#04293f]" />
                </div>
                <h2 className="title-font font-regular text-2xl text-white">{t('Whyus.offersTitle')}</h2>
                <span className="text-gray-300">{t('Whyus.offersDesc')}</span>
              </div>
            </div>
            <div className=" ">
              <div className="transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <TbTruckDelivery className="text-8xl text-[#04293f]" />
                </div>
                <h2 className="title-font font-regular text-2xl text-white">{t('Whyus.servicesTitle')}</h2>
                <span className="text-gray-300">{t('Whyus.servicesDesc')}</span>
              </div>
            </div>
            <div className=" ">
              <div className="transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <FaSearchDollar className="text-8xl text-[#04293f]" />
                </div>
                <h2 className="title-font font-regular text-2xl text-white">{t('Whyus.paymentsTitle')}</h2>
                <span className="text-gray-300">{t('Whyus.paymentsDesc')}</span>
              </div>
            </div>
            <div className=" ">
              <div className="transform transition duration-500 hover:scale-110">
                <div className="flex justify-center">
                  <RiCustomerService2Fill className="text-8xl text-[#04293f]" />
                </div>
                <h2 className="title-font font-regular text-2xl text-white">{t('Whyus.customerServiceTitle')}</h2>
                <span className="text-gray-300">{t('Whyus.customerServiceDesc')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default WhyUs
