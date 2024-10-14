"use client"
import React, { useState, useEffect ,Suspense } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link';
import { useTranslation } from '../../i18n/clinet'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

import { CgMail } from "react-icons/cg";
import Image from "next/image"
import CompanyLogo from "../../../../public/imgs/eljewar-logo.jpg"
import "./style.css"

 const  Header=({lng})=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation(lng, 'home')

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (<Suspense  fallback="loading">
  
     
      <header className="header  bg-white border-b  w-[100%] fixed top-0 z-20 shadow-bottom pb-2">
         {/*social icons-fixed */}
                <nav className="social-fixed z-[200]">
  
  
          <ul>
              <li className="bg-[#3b5998]">
              <Link href="https://www.facebook.com/profile.php?id=100090367776829&mibextid=ZbWKwL"
                className={`flex gap-3 items-center ${lng=="en"?"justify-end":""}`}> 
               <div className={`${lng=="en"?"order-last":""}`}><FaFacebookF className="text-2xl text-[white]"/></div> 
               <span className="text-white">Facebook</span> 
              </Link>
              </li>
              
              
              <li className="bg-[#bc2a8d]">
              <Link href="#"  className={`flex gap-3 items-center ${lng=="en"?"justify-end":""}`}> 
               <div className={`${lng=="en"?"order-last":""}`}><FaInstagram className="text-2xl text-[white]"/></div> 
               <span className="text-white">Instagram</span> 
              </Link>
              </li>
              
              <li className="bg-[#00aced]">
              <Link href="#"  className={`flex gap-3 items-center ${lng=="en"?"justify-end":""}`}> 
             <div className={`${lng=="en"?"order-last":""}`}><FaTwitter className="text-2xl text-[white]"/></div> 
               <span className="text-white">Twitter</span> 
              </Link>
              </li>
              
              </ul>
      </nav>  
       <div className="cont1 flex justify-between  w-[90%] m-auto  z-10 pt-2 pb-2">
          <div className="contact-info flex gap-2 mt-2">
           <div>
           <a  href="tel:+201094487922" className={` ${lng=="ar"?"flex-row-reverse justify-end":""} bg-blue-100 gap-2 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400`}> 
                                     <span>    <FaPhoneAlt /> </span>
                                    <span>01094487922</span>
                                    </a>
           </div>
           <a  href="mailto:aljewargawish@gmail.com" className={` ${lng=="ar"?"flex-row-reverse justify-end":""} bg-blue-100 gap-2 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 sm:hidden`}> 
                                     <span>    <CgMail className="text-xl"/> </span>
                                    <span>Al-JewarTours@gmail.com</span>
                                    </a>
          </div>
     
          <div>
          </div>


           
       </div>
        <div className="cont  w-[90%] m-auto  z-10">
         
          <div className={`flex h-10  ${lng=="en"?"":"flex-row-reverse"}   items-center justify-between overflow-hidden `}>
            <div className="md:flex md:items-center md:gap-12">
              <Link href="" className="block text-teal-600" href={`/${lng}`}>
                <span className="sr-only">Home</span>
<Image src={CompanyLogo} className="w-[40px] h-[40px]  md:w-[40px] md:h-[40px]" alt='logo' /> 
              </Link>
            </div>
            {/* <div className="call">01064880594</div> */}

            <div className={`hidden md:block nav-links ${isMenuOpen ? 'show ' : ''}`}>
              <nav aria-label="Global">
                <ul className="flex items-center gap-[1.4rem] text-sm">
                  <li className={` ${lng=="en"?"hover:pl-5":"hover:pr-5"}`}>
                    <Link className="relative xmd:text-[16px]  inline cursor-pointer   before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100
                    text-[#130f40] lg:text-[18px]  md:text-[16px] pb-1 font-semibold transition " href={`/${lng}`} >{t("header.HomePage")}</Link>

                  </li>

                  <li className={` ${lng=="en"?"hover:pl-5":"hover:pr-5"}`}>
                    <Link className="relative xmd:text-[16px]  inline cursor-pointer   before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100
                    text-[#130f40] lg:text-[18px]  md:text-[16px] pb-1 font-semibold transition hover:text-black" 
                    href={`/${lng}/elhag&elumrah`}  > {t("header.Elhag&Elumrah")}</Link>
                  </li>

                  <li className={` ${lng=="en"?"hover:pl-5":"hover:pr-5"}`}>
                    <Link className="relative  xmd:text-[16px] inline cursor-pointer   before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100
                    text-[#130f40] lg:text-[18px]  md:text-[16px] pb-1 font-semibold transition hover:text-black" 
                     href={`/${lng}/hotelBookings`} > {t("header.Hotels")}</Link>
                  </li>

                  <li className={` ${lng=="en"?"hover:pl-5":"hover:pr-5"}`}>
                    <Link className="relative xmd:text-[16px]  inline cursor-pointer   before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100
                    text-[#130f40] lg:text-[18px]  md:text-[16px] pb-1 font-semibold transition hover:text-black" 
                     href={`/${lng}/flightTickets`}> {t("header.Flights")}</Link>
                  </li>
                  <li className={` ${lng=="en"?"hover:pl-5":"hover:pr-5"}`}>
                    <Link className="relative  xmd:text-[16px] inline cursor-pointer   before:bg-teal-600 hover:rounded-b-none before:absolute before:-bottom-0 before:-left-0  before:block before:h-[4px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100
                    text-[#130f40] lg:text-[18px] md:text-[16px] pb-1 font-semibold transition hover:text-black" 
                    href={`/${lng}/contact`} >  {t("header.Contact")}     </Link>
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