"use client";
import React, { useState } from 'react';
import { useTranslation } from '../../i18n/clinet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiStarSFill } from "react-icons/ri";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function Offers({ lng }) {
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
      <div className="w-[90%] mx-auto pt-10 lg:w-[70%]">
        <h2 className="text-center text-2xl font-semibold pt-8 pb-4">{t('offers_title')}</h2>
        <h2 className="text-center text-2xl font-semibold pb-8">
          {headers[activeIndex]}
        </h2>

        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          slidesPerGroup={2}
          pagination={{ clickable: true }}
          navigation={true}
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
            }
          }}
        >
          {sliderOffers.map((offer, index) => (
            <SwiperSlide key={index} className="sm:flex hover:opacity-90">
              {/* Slide Content */}
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <div className={`h-[200px] md:h-[260px] rounded-tl-lg rounded-tr-lg img-offer${index + 1} rounded-t-lg relative text-center`}>
                    <span className="offer-title w-[100%] font-bold  absolute top-0 left-0 bg-white text-black p-3 rounded-tl-lg rounded-tr-lg">{offer}</span>
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
                  <div className="days-offer pb-2">
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
  <section className="text-gray-700 body-font">
  <div className="flex justify-center mt-10 text-4xl font-regular">
    Why Al-Jewar?
  </div>
  <div className="container px-5 py-12 mx-auto">
    <div className="flex flex-wrap text-center justify-center">
      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Latest Milling Machinery</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Reasonable Rates</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Time Efficiency</h2>
        </div>
      </div>

      <div className="p-4 md:w-1/4 sm:w-1/2">
        <div className="px-4 py-6 transform transition duration-500 hover:scale-110">
          <div className="flex justify-center">
            <img src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp" className="w-32 mb-3"/>
          </div>
          <h2 className="title-font font-regular text-2xl text-gray-900">Expertise in Industry</h2>
        </div>
      </div>

    </div>
  </div>
</section>
      
    </>
  );
}
