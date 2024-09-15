

import React from 'react';
import { useTranslation } from '../../../i18n'
import Link from 'next/link';
import { MdOutlineLanguage } from "react-icons/md";
import { TiHome } from "react-icons/ti";

async function  Contact({ params: { lng } }) {
  const { t } =await useTranslation(lng, "flighTicket");

  return (
          <section className="section-elhag ] mb-32 overflow-hidden">
                       <div className={`elhag-langSwitcher  fixed top-[8px] z-20 ${lng=="ar"?"left-[5%] ":"right-[5%]"} `}>
            <Link href={`/${lng=="en"?"ar":"en"}/flightTickets`} className="text-[black] flex items-center gap-2 text-[20px]">
                                   
                         <span> {lng=="en"?"العربية":"English"}</span>
                         <MdOutlineLanguage/>
            </Link>

           </div>
<div className="bg-img pt-[200px]">
 <div className=" elhag-overlay w-[100%]  xmd:h-[200px] md:h-[300px] t flex items-center justify-center text-white bg-[#2121217a]">

       <div className=" containerr text-center">
        <span className="text-4xl text-white font-bold">           {t('breadcrumb.title')}</span>
<nav class="flex pt-5 justify-center" aria-label="Breadcrumb ">

  <ol class="inline-flex px-2 items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
    <li class="inline-flex items-cente ">
      <Link href={`/${lng}`} class="flex gap-2 items-center text-xl font-medium text-white hover:text-blue-200 dark:text-gray-400 dark:hover:text-white">
     <TiHome/>
          {t('breadcrumb.home')}

      </Link>
    </li>
    <li>
      <div class="flex items-center">
        <svg class="rtl:rotate-180 w-3 h-3  mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
        <a href="#" class="ms-1 text-xl font-medium text-white hover:text-blue-200  md:ms-2 dark:text-gray-400 dark:hover:text-white">          {t('breadcrumb.flightTicket')}</a>
      </div>
    </li>
 
  </ol>
</nav>

  </div>
    </div>
  
</div>
   
       <div className="elhag-content pt-6">
            <div className="w-[90%] mx-auto">
                
                <div className="boxs">
                ...
                </div>
                
            </div>   
        
           
           
       </div>           
                  
                  
                  
                  
                  
                  
                  
                   </section>
  );
}

export default Contact;
