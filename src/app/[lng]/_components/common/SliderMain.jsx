"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useTranslation } from "../../../i18n/clinet";
import Image from "next/image";
import { GrNext, GrPrevious } from "react-icons/gr";

// Images
import Img1 from "../../../../../public/imgs/elhag1.jpg";
import Img2 from "../../../../../public/imgs/fly1.png";
import Img3 from "../../../../../public/imgs/hotel1.jpg";
import Img4 from "../../../../../public/imgs/egypt1.jpg";

export default function MainSlider({ lng }) {
  const images = [Img1, Img2, Img3, Img4];
  const { t } = useTranslation(lng, "home");
  const serv = t("Home.MainSlider", { returnObjects: true });
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        ref={swiperRef}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        autoplay={{ delay: 8000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper h-[200px] main-slider text-white relative"
      >
        {serv?.map((item, index) => (
          <SwiperSlide key={index} className={`SwiperSlide${index}`}>
            <div className="img-up relative w-full h-full">
              {/* Optimize Images */}
              <Image
                key={index}
                src={images[index]}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                priority={index === 0} 
                
              />

              {/* Overlay and Content */}
              <div className="content-box flex items-end w-full h-full absolute left-0 top-0">
                <div className="overlay py-5 sm:py-1 w-full mb-[80px] bg-[#1E10104D]">
                  <div className="content w-[90%] mx-auto">
                    <div
                      className={`title-company text-4xl pb-4 text-white sm:text-3xl xsm:pb-1 ${
                        lng === "en" ? "xsm:text-2xl" : ""
                      }`}
                    >
                      {item.CompanyName}
                    </div>
                    <div className="title-work text-2xl pb-1 text-white">
                      <span
                        className={`relative ${
                          lng === "en" ? "xsm:text-[22px]" : ""
                        }`}
                      >
                        {item.ServiceTitle}
                        <div
                          className={`ping after:bg-[orange] before:bg-[orange] absolute top-[-4px] ${
                            lng === "en" ? "right-[-22px]" : "left-[-15px]"
                          } z-10`}
                        ></div>
                      </span>
                    </div>
                    <div className="desc mt-2 text-white text-[20px]">
                      {item.description}
                    </div>
                    <div className="button-reserv pt-2 mt-4 sm:mt-0 text-white">
                      <a
                        href="https://wa.me/+0201094487922"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="xsm:text-[18px] bg-[#03245a] button-92"
                        role="button"
                      >
                        {item.Contact}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation */}
        <div
          className={`custom-next absolute z-[300] top-[60%] cursor-pointer ${
            lng === "en" ? "right-0" : ""
          }`}
        >
          <GrNext className="text-3xl text-[orange]" />
        </div>
        <div
          className={`custom-prev absolute z-[300] top-[60%] cursor-pointer ${
            lng === "en" ? "left-0" : "left-0"
          }`}
        >
          <GrPrevious className="text-3xl text-[orange]" />
        </div>
      </Swiper>
    </>
  );
}


