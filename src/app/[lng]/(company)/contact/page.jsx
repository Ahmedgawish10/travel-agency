

import React from 'react';
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useTranslation } from '../../../i18n'

async function  Contact({ params: { lng } }) {
  const { t } =await useTranslation(lng, "contact");

  return (
          <div className="ElgiwarFeatures pt-16">
<section className="mb-32">
  <div id="map" className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
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
  <div className="w-[90%] mx-auto px-2 md:px-12">
    <div
      className="block rounded-lg bg-[white] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
      <div className="flex flex-wrap">
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
          <form>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary 
                  peer-focus:bg-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
              <label
                  className="pointer-events-none absolute bg-[#fffc] top-0 mt-[2px] px-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput90">                           {t('contact.form.name.label')}

                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input type="email"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
              <label
                 className="pointer-events-none absolute bg-white top-0 mt-[2px] px-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                  for="exampleInput91"> {t('contact.form.email.label')}
                </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                  className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              <label for="exampleFormControlTextarea1"
                 className="pointer-events-none absolute bg-white top-0 mt-[2px] px-2 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "> {t('contact.form.message.label')}</label>
            </div>
          
            <button type="button"
                className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
                {t('contact.form.send')}
              </button>
          </form>
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="shrink-0">
                     <div className="inline-block rounded-md bg-sky-200 p-3 text-3xl text-primary">
                   < FaPhoneVolume/>
                  </div>
                </div>
                <div className={` ${lng=="en"?"ml-6":"mr-6"}  grow`}>
                  <p className="mb-2 font-bold ">
                           {t('contact.support.technicalSupport')}

                  </p>
                  <p className="text-sm text-neutral-500">
                           {t('contact.support.email')}
                  </p>
                  <p className="text-sm text-neutral-500">
                                               {t('contact.support.phone')}

                  </p>
                </div>
              </div>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 lg:w-full lg:px-6 xl:w-6/12">
              <div className="flex items-start">
                <div className="srink-0">
                   <div className="inline-block rounded-md bg-sky-200 p-3 text-3xl text-primary">
                   < FaLocationDot/>
                  </div>
                </div>
                <div className={` ${lng=="en"?"ml-6":"mr-6"}  grow`}>
                  <p className="mb-2 font-bold ">
                   {t('contact.address.label')}

                  </p>
                  <p>                 {t('contact.address.details')}</p>
                  
                </div>
              </div>
            </div>
            <div
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12  lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-3 text-3xl text-primary">
                                  < TbDeviceLandlinePhone/>


                  </div>
                </div>
                <div className={` ${lng=="en"?"ml-6":"mr-6"}  grow`}>
                  <p className="mb-2 font-bold ">{t('contact.landline.label')}</p>
                  <p className="text-neutral-500"> {t('contact.landline.number')}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
              <div className="align-start flex">
                <div className="shrink-0">
                  <div className="inline-block rounded-md bg-sky-200 p-3 text-3xl text-primary">
                   < MdPhoneIphone/>
                  </div>
                </div>
                <div className={` ${lng=="en"?"ml-6":"mr-6"}  grow`}>
                  <p className="mb-2 font-bold ">{t('contact.mobile.label')}</p>
                  <p className="text-neutral-500"> 
                  {t('contact.mobile.number')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   
                   </div>
  );
}

export default Contact;
