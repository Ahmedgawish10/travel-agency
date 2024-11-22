"use client";
import React, { useState } from "react";
import { useTranslation } from '../../i18n/clinet'
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import ModelBookingInfo from "./ModelBookingInfo";

const BookingForm = ({ lng }) => {
  const { t } = useTranslation(lng, "home");
  const BookingsData = t("Bookings", { returnObjects: true });
  const todayDate = new Date();
  const [open, setOpen] = useState(null);
  const [departureCountry, setDepartureCountry] = useState(null);
  const [arrivalCountry, setArrivalCountry] = useState(null);
  const [typeTravel, setTypeTravel] = useState(null);
  const [phone, setPhone] = useState(null);
  const [date, setDate] = useState(todayDate.toISOString().split('T')[0]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [errors, setErrors] = useState({});
  // functions for incrementing&decrementing adults and children
  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => { if (adults > 1) setAdults(adults - 1) };
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => { if (children > 0) setChildren(children - 1); };
  // function to toggle all dropdown
  const toggleDropdown = (index) => { setOpen((prev) => (prev === index ? null : index)) };
  // functions to select options for different dropdowns
  const handleDepartureCountry = (value) => { setDepartureCountry(value); setOpen(null); };
  const handleArrivalCountry = (value) => { setArrivalCountry(value); setOpen(null); };
  const handleTypeTravel = (value) => { setTypeTravel(value); setOpen(null); };
  // handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (departureCountry == null) {
      newErrors.departureCountry = (t('BookingValidation.departureCountry'));
    }
    if (arrivalCountry == null) {
      newErrors.arrivalCountry = (t('BookingValidation.arrivalCountry'));
    }
    if (typeTravel == null) {
      newErrors.typeTravel = (t('BookingValidation.typeTravel'));
    }
    if (phone == null || phone == "") {
      newErrors.phone = (t('BookingValidation.phone'));
    }

    if (Object.keys(newErrors).length > 0) {
      console.log(newErrors);
      setErrors(newErrors);
      return;
    }
    // sent WhatsApp message
    const message = `${lng == "en" ? "Hello, I would like to know the details of this flight ticket price." : "السلام عليكم كنت عايز اعرف تفاصيل سعر تذكرة الطيران. "}
   From: ${departureCountry}
   To: ${arrivalCountry}
   Travel Type: ${typeTravel}
   Number of Adults: ${adults}
   Number of Children: ${children}
   Travel Date: ${date}`;
    const encodedMessage = encodeURIComponent(message);
    // Redirect to WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=+201094487922&text=${encodedMessage}`, '_blank');

    // reset the states 
    setDepartureCountry(null);
    setArrivalCountry(null);
    setTypeTravel(null);
    setPhone("");
    setDate(new Date().toISOString().split('T')[0]);
    setAdults(1);
    setChildren(0);
    setErrors({});
    setPopupVisible(true);
  };

  return (
    <div className="mt-[20px] w-[90%] md:container mx-auto  overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "25vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.1,
          duration: 1,
          ease: "easeInOut",
        }}
        className="1 pb-5"
      >
        <div className="text-center text-3xl flex gap-2 justify-center items-center font-extrabold text-[#03245a]">
          <span className="heading-booking">{t("BookTicketTitle")}</span>
          <span className="icon-booking">
            <ModelBookingInfo lng={lng} />
          </span>
        </div>
      </motion.div>

      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, x: "25vw", y: "100px" }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.1,
            duration: 0.2,
            ease: "easeInOut",
          }} className=" bg-[#e1effe] !px-5 !py-4 grid grid-cols-1 md:grid-cols-2 gap-5 lg:w-[60%] mx-auto px-4 md:px-0">
          {/* loop on each booking items */}
          {BookingsData?.map((booking, index) => (
            (booking.DepartureCountry || booking.ArrivalCountry || booking.Travel ||
              booking.Phone || booking.Date || booking.Adults || booking.Childs || booking.Send) && (
              <div key={index} className="flex-1 ">
                {/* Departure Country Dropdown */}
                {booking.DepartureCountry && (
                  <div className="relative">
                    <div>{booking.DepartureCountry.Heading1}</div>
                    <h3
                      onClick={() => toggleDropdown(index)}
                      className="w-full cursor-pointer mt-2 border-gray-300 text-white bg-[#03245a] hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-[#03245a] dark:focus:ring-blue-800"
                    >
                      <span className="flex justify-between">
                        {departureCountry ? departureCountry : booking.DepartureCountry.Heading2}
                        <span>{open == index ? <IoIosArrowDown className="transform rotate-180" /> : <IoIosArrowDown />}</span>
                      </span>
                    </h3>
                    {open === index && (
                      <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 overflow-y-auto max-h-40 w-full">
                        {booking.DepartureCountry.options.map((option, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                            onClick={() => handleDepartureCountry(option)}
                          >
                            <p>{option}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.departureCountry && <p className={`text-red-500  px-2 pt-1 text-[14px]`}>{errors.departureCountry}</p>}
                  </div>
                )}

                {/* Arrival Country Dropdown */}
                {booking.ArrivalCountry && (
                  <div className="relative">
                    <div>{booking.ArrivalCountry.Heading1}</div>
                    <h3
                      onClick={() => toggleDropdown(index)}
                      className="w-full mt-2 cursor-pointer border-gray-300 text-white bg-[#03245a] hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-[#03245a] dark:focus:ring-blue-800"
                    >
                      <span className="flex justify-between">
                        {arrivalCountry ? arrivalCountry : booking.ArrivalCountry.Heading2}
                        <span>{open == index ? <IoIosArrowDown className="transform rotate-180" /> : <IoIosArrowDown />}</span>
                      </span>
                    </h3>
                    {open === index && (
                      <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 overflow-y-auto max-h-40 w-full">
                        {booking.ArrivalCountry.options.reverse().map((option, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                            onClick={() => handleArrivalCountry(option)}
                          >
                            <p>{option}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.arrivalCountry && <p className={`text-red-500  px-2 pt-1 text-[14px]`}>{errors.arrivalCountry}</p>}
                  </div>
                )}

                {/* Travel Type Dropdown */}
                {booking.Travel && (
                  <div className="relative">
                    <div>{booking.Travel.Heading1}</div>
                    <h3
                      onClick={() => toggleDropdown(index)}
                      className="w-full mt-2 cursor-pointer border-gray-300 text-white bg-[#03245a] hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-[#03245a] dark:focus:ring-blue-800"
                    >
                      <span className="flex justify-between">
                        {typeTravel ? typeTravel : booking.Travel.Heading2}
                        <span>{open === index ? <IoIosArrowDown className="transform rotate-180" /> : <IoIosArrowDown />}</span>
                      </span>
                    </h3>
                    {open === index && (
                      <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 overflow-y-auto max-h-40 w-full">
                        {booking.Travel.options.map((option, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600"
                            onClick={() => handleTypeTravel(option)}
                          >
                            <p>{option}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {errors.typeTravel && <p className={`text-red-500  px-2 pt-1 text-[14px]`}>{errors.typeTravel}</p>}

                  </div>
                )}

                {/* Phone Input */}
                {booking.Phone && (
                  <div className="relative py-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white">{booking.Phone.Heading}</label>
                    <input
                      id="phone"
                      type="text"
                      placeholder={booking.Phone.Heading}
                      className="mt-1 block w-full bg-[#03245a] text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <p className={`text-red-500  px-2 pt-1 text-[14px]`}>{errors.phone}</p>}

                  </div>
                )}

                {/* Travel Date Input */}
                {booking.Date && (
                  <div className="relative">
                    <label htmlFor="travel-date" className="block text-sm font-medium text-gray-700 dark:text-white">{booking.Date.Heading}</label>
                    <input
                      id="travel-date"
                      value={date}
                      type="date"
                      className="mt-1 block w-full bg-[#03245a] text-white px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                )}

                {/* Adults Increment/Decrement */}
                {booking.Adults && (
                  <div className="relative">
                    <div className="relative col-span-1 text-left mb-4">
                      <div className={`block pb-1 ${lng === "ar" ? "text-right" : ""}`}>{booking.Adults.Heading}</div>
                      <div className="flex p-1 bg-[#03245a] overflow-hidden rounded-full justify-around items-center space-x-4 mb-4">
                        <button
                          type="button"
                          onClick={decrementAdults}
                          className="text-white w-1/3 text-xl hover:bg-[#02183D] cursor-pointer"
                        >
                          -
                        </button>
                        <span className="text-white">{adults}</span>
                        <button
                          type="button"
                          onClick={incrementAdults}
                          className="text-white w-1/3 text-xl hover:bg-[#02183D] cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Children Increment/Decrement */}
                {booking.Childs && (
                  <div className="relative">
                    <div className={`block pb-1 ${lng === "ar" ? "text-right" : ""}`}>{booking.Childs.Heading}</div>
                    <div className="flex p-1 bg-[#03245a]  mt-2 overflow-hidden rounded-full justify-around items-center space-x-4 mb-4">
                      <button
                        type="button"
                        onClick={decrementChildren}
                        className="text-white w-1/3 text-xl hover:bg-[#02183D] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-white">{children}</span>
                      <button
                        type="button"
                        onClick={incrementChildren}
                        className="text-white w-1/3 text-xl hover:bg-[#02183D] cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}

                {booking.Send && (
                  <div className="relative  mx-auto  flex  flex-col justify-center text-left   md:!mt-[30px]">
                    <button
                      type="submit"
                      className="button-send  text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {booking.Send.sendMsg}
                    </button>
                  </div>)}




              </div>
            )
          ))}
        </motion.div>
      </form>
    </div>
  );
};

export default BookingForm;
