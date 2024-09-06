"use client"
import React, { useState, useEffect ,Suspense } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link';
import { useTranslation } from '../../i18n/clinet'
import "./style.css"
import { FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import Headers from "../_components/HeaderS"
 const  Header=({lng})=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(lng, 'home')
  const s = useRouter();
  const p = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
     console.log(t);
  };






  return (<Suspense  fallback="loading">
      <header className="header bg-white border-b  w-[100%] fixed top-0 z-20 shadow-bottom pb-2">
       <div className="cont1 flex justify-between  w-[90%] m-auto  z-10 pt-2 pb-2">
          <div className="contact-info flex gap-2 mt-2">
           <div>
           <a  href="tel:+201094487922" className={` ${lng=="ar"?"flex-row-reverse justify-end":""} bg-blue-100 gap-2 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400`}> 
                                     <span>    <FaPhoneAlt /> </span>
                                    <span>01094487922</span>
                                    </a>
           </div>
           <a  href="mailto:ahmdgawish44@gmail.com" className={` ${lng=="ar"?"flex-row-reverse justify-end":""} bg-blue-100 gap-2 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 sm:hidden`}> 
                                     <span>    <CgMail className="text-xl"/> </span>
                                    <span>AljewarTours@gmail.com</span>
                                    </a>
          </div>
     
          <div>
          </div>


           
       </div>
        <div className="cont  w-[90%] m-auto  z-10">
         
          <div className={`flex h-10  ${lng=="en"?"":"flex-row-reverse"}   items-center justify-between overflow-hidden `}>
            <div className="md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <MdOndemandVideo className="text-4xl text-[#130f40] " />
              </Link>
            </div>
            {/* <div className="call">01064880594</div> */}

            <div className={`hidden md:block nav-links ${isMenuOpen ? 'show ' : ''}`}>
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link className="text-[#130f40] lg:text-[18px] md:text-[16px] font-semibold transition hover:text-black" href={`/${lng}`} >{t("header.HomePage")}</Link>

                  </li>

                  <li>
                    <Link className="text-[#130f40] lg:text-[18px] md:text-[16px] font-semibold transition hover:text-black" href="/"  > {t("header.Elhag&Elumrah")}</Link>
                  </li>

                  <li>
                    <Link className="text-[#130f40] lg:text-[18px] md:text-[16px] font-semibold transition hover:text-black" href="/" > {t("header.Hotels")}</Link>
                  </li>

                  <li>
                    <Link className="text-[#130f40] lg:text-[18px] md:text-[16px] font-semibold transition hover:text-black" href="/" > {t("header.Flights")}</Link>
                  </li>
                  <li>
                    <Link className="text-[#130f40] lg:text-[18px] md:text-[16px] font-semibold transition hover:text-black" href="/" >  {t("header.Contact")}     </Link>
                  </li>
                  <li>
               
                  </li>

                </ul>
              </nav>
            </div>

            <div className="flex md:hidden items-center gap-4 auth" >

              <div className="block md:hidden xx">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <RiCloseFill className="text-xl" />
                  ) : (
                    <TiThMenu className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
   


</Suspense>
  )
  
}

export default Header;