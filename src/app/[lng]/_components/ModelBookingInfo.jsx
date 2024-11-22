"use client"
import React, { useState } from 'react';
import Img1 from "../../../../public/imgs/info1.gif"
import Image from "next/image";
import { useTranslation } from '../../i18n/clinet';

function ModalBookingInfo({ lng }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { t } = useTranslation(lng, 'home');

  return (
    <div>
      <button
        name="information before send the booking from details"
        onClick={openModal}
        className="block text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <Image src={Img1} className="w-[40px] h-[40px]  md:w-[50px] md:h-[50px]" alt="info" />
      </button>

      {isOpen && (
        <div
          className="fixed top-0 right-0 left-0 z-50 flex justify-center  items-center  h-full bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="relative md:w[70%] lg:w-[60%] bg-white rounded-lg shadow dark:bg-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('BookingValidation.helloPeople')}

              </h3>
              <button
                name="close info-model"
                onClick={closeModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {t('BookingValidation.bookingInfo')}
              </p>

            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                name="close confirm-model"

                onClick={closeModal}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {t('BookingValidation.acceptModel')}
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalBookingInfo;
