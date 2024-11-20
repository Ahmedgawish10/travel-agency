"use client"
import React,{useEffect,useState} from 'react';
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdPhoneIphone } from "react-icons/md";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { useTranslation } from '../../../i18n/clinet'
import Link from 'next/link';
import { MdOutlineLanguage } from "react-icons/md";
import { initFlowbite } from 'flowbite';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendEmail } from '../../services/EmailJs';

 
 function  Contact({ params: { lng } }) {
 const { t } = useTranslation(lng, "contact");
     
 const schema = z.object({
  username: z.string().nonempty(t("contact.validation.username.required")).min(3, t("contact.validation.username.min")),
  email: z.string().nonempty(t("contact.validation.email.required")).email(t("contact.validation.email.invalid")),
  message: z.string().nonempty(t("contact.validation.message.required")).min(10, t("contact.validation.message.min")),
});
     
 useEffect(() => {
    initFlowbite(); 
  }, []);
     
 const [popupEmail,setpopupEmail]=useState(false);
 const [isButtonDisabled, setIsButtonDisabled] = useState(false);

 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  
  const onSubmit = async (data) => {
      setIsButtonDisabled(true);
    const result = await sendEmail(data);
    if (result.success) {
        setpopupEmail(true)
              setIsButtonDisabled(false);

      reset();
    } else {
     setIsButtonDisabled(false);
      alert('Failed to send message. Please try again later.');
    }
  };
    
  return (
          <div className="ElgiwarFeatures pt-16">
                       <div className={`home-langSwitcher  fixed top-[8px] z-20 ${lng=="ar"?"left-[5%] ":"right-[5%]"} `}>
            <Link href={`/${lng=="en"?"ar":"en"}/contact`} className="text-[black] flex items-center gap-2 text-[20px]">
                                   
                         <span> {lng=="en"?"العربية":"English"}</span>
                         <MdOutlineLanguage/>
            </Link>

           </div>
           
    {popupEmail &&  <div onClick={()=>setpopupEmail(false)} id="alert-border-1" className={`popup-email  fixed top-[100px]  z-[100] flex items-center p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert`} >
    <svg  className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div className="ms-3 text-sm font-medium">
     {`${lng=="en"?"Your message was sent successfully,We will contact you soon! ":"تم ارسال استفساركم وسيتم التواصل معكم قريبا!"}`}
   </div>
    <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-1" aria-label="Close">
      <span className="sr-only">Dismiss</span>
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
</div>
           }
           
           
           
           
<section className="mb-32">
  <div id="map" className="relative h-[400px] overflow-hidden bg-cover bg-[50%] bg-no-repeat">
     <iframe
              title="company-map-location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d213.43583626708704!2d30.656243!3d31.138254!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f65b002f3d6351%3A0xe4382e4225cb418b!2z2KfZhNis2YjYp9ixINmE2YTYs9mK2KfYrdip!5e0!3m2!1sen!2sus!4v1726570170401!5m2!1sen!2sus"
                width="100%" 
                height="400px" 
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
        <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12 lg:px-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-6" data-te-input-wrapper-init>
               <label
                  htmlFor="exampleInput90">                       
                      {t('contact.form.name.label')}

                </label>
              <input type="text" {...register("username")}
                  className="mt-2 peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary 
                  peer-focus:bg-black data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput90" />
                   
                    {errors.username && <p className="text-red-600 pt-2">{errors.username.message}</p>}

            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <label
                  htmlFor="exampleInput91"> {t('contact.form.email.label')}
                </label>
              <input type="email" {...register("email")}
                  className="mt-2 peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleInput91" />
                     {errors.email && <p className="text-red-600 pt-2">{errors.email.message}</p>}

            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlTextarea1"> {t('contact.form.message.label')}</label>
              <textarea {...register("message")} 
                  className="mt-2 peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                  id="exampleFormControlTextarea1" rows="3"></textarea>
                          {errors.message && <p className="text-red-600 pt-2">{errors.message.message}</p>}


            </div>
          
            <button type="submit" disabled={isButtonDisabled}
                className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal   lg:mb-0">
{isButtonDisabled 
        ? (lng == 'en' ? "Sending..." : "جاري الإرسال...")
        : (lng == 'en' ? t('contact.form.send'):t('contact.form.send'))
      }                
              </button>
          </form>
        </div>
        <div className="w-full flex items-center shrink-0 grow-0 basis-auto lg:w-7/12 ">
          <div className="flex flex-wrap">
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12  lg:w-full lg:px-6 xl:w-6/12">
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
            <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12  lg:w-full lg:px-6 xl:mb-12 xl:w-6/12">
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
