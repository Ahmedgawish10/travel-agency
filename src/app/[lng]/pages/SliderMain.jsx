"use client"
import { Datepicker } from "flowbite-react";

import React,{ useRef ,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from '../../i18n/clinet'
import { Autoplay } from 'swiper/modules';

export default function App({ lng }  ) {
      const { t } = useTranslation(lng, 'home')
      const serv=t("Home.MainSlider",{returnObjects:true})
      const swiperRef = useRef(null);
       const [selectedDate, setSelectedDate] = useState("");

  // Handler for date selection
  const handleDateChange = (date) => {
      console.log(date);
    setSelectedDate(date);
  };

    const handleMouseEnter = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.stop();
            console.log("22");
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current) {
            swiperRef.current.swiper.autoplay.start();
        }
    };
  return (
    <>
      <Swiper
      ref={swiperRef}

        pagination={{
          clickable: true,
          type: 'bullets',
        }}
        navigation={true}
       loop={true}
           autoplay={{ delay: 8000, disableOnInteraction: false }}

        modules={[Pagination, Navigation,Autoplay]}
        className="mySwiper h-[200px] main-slider text-white"
      >
         {serv?.map((item, index) => (
         <SwiperSlide key={index} className={`ele${index+1}-slide f`}
          
          >
           <div className="content-box flex items-end w-[100%] h-[100%] ">
            <div className="overlay py-5 sm:py-1 w-[100%] mb-[80px] bg-[#1E10104D]">
              <div className="content w-[90%] mx-auto ">
                <div className={`title-company text-4xl pb-4 text-white sm:text-3xl xsm:pb-1 ${lng=="en"?" xsm:text-2xl":""}  `}> {item.CompanyName}</div>
                <div className={`title-work  text-2xl pb-1 text-white `}>
                <span className={`relative ${lng=="en"?"xsm:text-[22px]":""} `}>
                                    {item.ServiceTitle}  
            <div className={`ping after:bg-[orange] before:bg-[orange]  absolute top-[-4px] ${lng=="en"?"right-[-22px]":"left-[-15px]"}   z-10 text-red text-[#0ABB0A]`}></div> 

                </span>
                 </div>
                <div className="desc mt-2 text-white text-[20px]">
                  {item.description}  
                </div>
                      <div className="button-reserv pt-2 mt-4 sm:mt-0 text-white">
        <a   href="https://wa.me/+0201094487922" target="_blank" rel="noopener noreferrer" className="xsm:text-[18px] bg-[#03245a]  button-92" role="button">
                {item.Contact}
                 </a>
                
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> 
      ))}
      </Swiper>
<>
      
  
      
      
      </>
    </>
  );
}




