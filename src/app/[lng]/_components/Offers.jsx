"use client";
import React, { useState } from 'react';
import { useTranslation } from '../../i18n/clinet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiStarSFill } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Autoplay imported here
import { LuCalendarDays } from "react-icons/lu";
import { motion } from "framer-motion";
import Img1 from "../../../../public/imgs/hag1.jpg";
import Img2 from "../../../../public/imgs/grand1.jpg"
import Img3 from "../../../../public/imgs/gharda.jpg"
import Img4 from "../../../../public/imgs/northcoast.jpg"
import Img5 from "../../../../public/imgs/dubai.jpg"
import Img6 from "../../../../public/imgs/paris.jpg"

import Image from "next/image";

export default function Offers({ lng }) {
        const imagesOffers = [Img1,Img2,Img3,Img4,Img5,Img6]; 
           const altImages=["elhagOffers","elumrahOffers","ghardaOffers","northcoastOffers","dubaiOffers","oarisOffers"]

  const AnimationHeading = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };
  const { t } = useTranslation(lng, "home");

  // Get translations for the current language
  const headers = t('headers', { returnObjects: true });
  const sliderOffers = t('slider_offers', { returnObjects: true });
  const labels = t('labels', { returnObjects: true });
  const daysOffer = t('DaysOffer', { returnObjects: true });

  // State to manage the current active index
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle slide change
  const handleSlideChange = (swiper) => {
    const newIndex = swiper.activeIndex;
    // Since slidesPerGroup is 2, divide the activeIndex by 2
    const headerIndex = Math.floor(newIndex / 2);
    setActiveIndex(headerIndex);
  };

  return (
    <>
      <div className="w-[90%] overflow-hidden mx-auto pt-10 lg:w-[70%]">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={AnimationHeading}
          transition={{ duration: 1 }}
          className="text-center text-3xl text-[#03245a] font-extrabold pt-8 pb-4"
        >
          {t('offers_title')}
        </motion.h2>
        <motion.h2
          initial="right"
          whileInView="visible"
          viewport={{ once: true }}
          variants={AnimationHeading}
          transition={{ duration: 1 }}
          className="text-center text-xl text-[#03245a] font-semibold pb-8"
        >
          {headers[activeIndex]}
        </motion.h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 8000, disableOnInteraction: false }} 
          modules={[Pagination, Navigation]} 
          className="mySwiper swiper-offer"
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            630: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {sliderOffers.map((offer, index) => (
            <SwiperSlide key={index} className="sm:flex hover:opacity-90">
              {/* Slide Content */}
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <div
                    className={`h-[200px] md:h-[260px] rounded-tl-lg rounded-tr-lg rounded-t-lg relative text-center`}
                  >
                          <Image
                          className="rounded-[10px]"
      key={index}     
      src={imagesOffers[index]} 
      alt={`Image ${index + 1}`}
      
      className="h-[100%] w-[100%] rounded-[10px]"
    lazy="loading"
    alt={altImages[index]}
    

    />

                    <span className="offer-title w-[100%] font-bold absolute top-0 left-0 bg-white text-black p-3 rounded-tl-lg rounded-tr-lg">
                      {offer}
                    </span>
                  </div>
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl pt-2 line-clamp-3 font-semibold tracking-tight text-gray-900 dark:text-white">
                      {labels[index]}
                    </h5>
                  </a>
                  <div className="flex justify-between items-center mt-2.5 mb-5">
                    <div className="flex items-center rtl:space-x-reverse">
                      <RiStarSFill className="text-xl text-yellow-300" />
                      <RiStarSFill className="text-xl text-yellow-300" />
                      <RiStarSFill className="text-xl text-yellow-300" />
                      <RiStarSFill className="text-xl text-yellow-300" />
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                      {t('rating')}

                    </span>
                  </div>
                  <div className="days-offer flex items-center gap-2 pb-2">
                    <LuCalendarDays />
                    {daysOffer[index]}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
                      {t('special_price')}
                    </span>
                    <a
                      href="tel:+201094487922"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {t('more_details')}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </>
  );
}
