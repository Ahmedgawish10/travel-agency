"use client";
import { useState, useRef } from 'react';
import { useTranslation } from '../../i18n/clinet'
import { IoIosArrowDown } from "react-icons/io";
import ModelBookingInfo from "./ModelBookingInfo";
import { motion } from "framer-motion";

function DropdownForm({ lng, ticket }) {
    
    
    
    const { t } = useTranslation(lng, 'home')
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);
    const [isOpen5, setIsOpen5] = useState(false);
    const [isOpen6, setIsOpen6] = useState(false); // State for dropdown visibility


    const [departureCountry, setdepartureCountry] = useState(`${lng == "en" ? "Select Country" : "اختر الدوله"}`)
    const [arrivalCountry, setarrivalCountry] = useState(`${lng == "en" ? "Select Country" : "اختر الدوله"}`);
    const [hotel, setHotel] = useState(`${lng == "en" ? "Select Ratings" : "اختر عدد نجوم الفندق"}`);
    const [typeTravel, setTypeTravel] = useState(`${lng == "en" ? "Select Travel Type" : "اختر وسيله السفر"}`);
    const [phone, setPhone] = useState("");
    const [selectedValue6, setSelectedValue6] = useState('Select number of adults');
    const [selectedValue7, setSelectedValue7] = useState('Select number of adults');

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const [numberOfAdults, setNumberOfAdults] = useState(1); // State for number of adults
    const [numberOfChilds, setNumberOfChilds] = useState(0);

    const dropdownRef1 = useRef(null);
    const dropdownRef2 = useRef(null);
    const dropdownRef3 = useRef(null);
    const dropdownRef4 = useRef(null);
    const dropdownRef5 = useRef(null);
    const dropdownRef6 = useRef(null);
    const dropdownRef7 = useRef(null);

    const toggleDropdown1 = () => {
        setIsOpen1(!isOpen1);
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);
        setIsOpen5(false);

        document.addEventListener('click', handleClickOutside1);
    };

    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
        setIsOpen1(false);
        setIsOpen3(false);
        setIsOpen4(false);

        document.addEventListener('click', handleClickOutside2);
    };
    const toggleDropdown3 = () => {
        setIsOpen3(!isOpen3);
        setIsOpen1(false); // Close dropdown 1 if it's open
        setIsOpen2(false); // Close dropdown 1 if it's open
        setIsOpen4(false); // Close dropdown 1 if it's open

        document.addEventListener('click', handleClickOutside3);
    };
    const toggleDropdown4 = () => {
        setIsOpen4(!isOpen4);
        setIsOpen1(false); // Close dropdown 1 if it's open
        setIsOpen2(false); // Close dropdown 2 if it's open
        setIsOpen3(false); // Close dropdown 2 if it's open

        document.addEventListener('click', handleClickOutside4);
    };
    const toggleDropdown5 = () => {
        setIsOpen5(!isOpen5);
        setIsOpen1(false); // Close dropdown 1 if it's open
        setIsOpen2(false); // Close dropdown 2 if it's open
        setIsOpen3(false); // Close dropdown 2 if it's open
        setIsOpen4(false); // Close dropdown 2 if it's open

        document.addEventListener('click', handleClickOutside5);
    };
    const handleItemClick1 = (value) => {
        setdepartureCountry(value);
        setIsOpen1(false);
        document.removeEventListener('click', handleClickOutside1);
    };

    const handleItemClick2 = (value) => {
        setarrivalCountry(value);
        setIsOpen2(false);
        document.removeEventListener('mousedown', handleClickOutside2);
    };
    const handleItemClick3 = (value) => {
        setHotel(value);
        setIsOpen3(false);
        document.removeEventListener('mousedown', handleClickOutside3);
    };
    const handleItemClick4 = (value) => {
        setTypeTravel(value);
                console.log(typeTravel);

        setIsOpen4(false);
        document.removeEventListener('mousedown', handleClickOutside2);
    };
    const handleItemClick5 = (value) => {
        setPhone(value);
        console.log(value);
        setIsOpen5(false);
        //    document.removeEventListener('mousedown', handleClickOutside5);
    };
    const handleClickOutside1 = (event) => {
        if (!dropdownRef1.current.contains(event.target)) {
            setIsOpen1(false);
            document.removeEventListener('click', handleClickOutside1);
        }
    };
    const handleClickOutside2 = (event) => {
        if (!dropdownRef2.current.contains(event.target)) {
            setIsOpen2(false);
            document.removeEventListener('click', handleClickOutside2);
        }
    };
    const handleClickOutside3 = (event) => {
        if (!dropdownRef3.current.contains(event.target)) {
            setIsOpen3(false);
            document.removeEventListener('click', handleClickOutside3);
        }
    };

    const handleClickOutside4 = (event) => {
        if (!dropdownRef4.current.contains(event.target)) {
            setIsOpen4(false);
            document.removeEventListener('click', handleClickOutside4);
        }
    };




    const toggleDropdown6 = () => {
        setIsOpen6(!isOpen6);
        // Close other dropdowns if needed
        setIsOpen1(false); // Ensure these are defined if used
        setIsOpen2(false);
        setIsOpen3(false);
        setIsOpen4(false);

        document.addEventListener('click', handleClickOutside6);
    };

    const handleClickOutside6 = (event) => {
        if (!dropdownRef6.current.contains(event.target)) {
            setIsOpen6(false);
            document.removeEventListener('click', handleClickOutside6);
        }
    };

    // Handler for incrementing the number of adults
    const incrementAdults = () => {
        setNumberOfAdults(prev => {
            const newCount = prev + 1;
            setSelectedValue6(`${newCount} `);
            return newCount;
        });
    };

    // Handler for decrementing the number of adults
    const decrementAdults = () => {
        setNumberOfAdults(prev => {
            const newCount = Math.max(prev - 1, 1); // Prevent negative values
            setSelectedValue6(`${newCount} 0`);
            return newCount;
        });
    };
    // Handler for incrementing the number of adults
    const incrementChilds = () => {
        setNumberOfChilds(prev => {
            const newCount = prev + 1;
            setSelectedValue7(`${newCount} `);
            return newCount;
        });
    };

    // Handler for decrementing the number of adults
    const decrementChilds = () => {
        setNumberOfChilds(prev => {
            const newCount = Math.max(prev - 1, 0); // Prevent negative values
            setSelectedValue7(`${newCount} 0`);
            return newCount;
        });
    };






    const countries = [
        'egypt',
        'saudi_arabia',
        'united_arab_emirates',
        'usa',
        'france',
        'germany'
    ];
    const starOptions = [
        'one_star',
        'two_stars',
        'three_stars',
        'four_stars',
        'five_stars'
    ];

    const travelOptions = [
        'sea',
        'air',
        'land'
    ];




    const [errors, setErrors] = useState({});

              
    const handleSubmit = (event) => {
        event.preventDefault();

        const newErrors = {};

        if (departureCountry === `${lng === "en" ? "Select Country" : "اختر الدوله"}`) {
            newErrors.departureCountry = t('BookingValidation.departureCountry');
        }

        if (arrivalCountry === `${lng === "en" ? "Select Country" : "اختر الدوله"}`) {
            newErrors.arrivalCountry = t('BookingValidation.arrivalCountry');
        }

        if (!ticket == "ticket") {
            if (hotel === `${lng === "en" ? "Select Ratings" : "اختر عدد نجوم الفندق"}`) {
                newErrors.hotel = t('BookingValidation.hotel');
            }
        }


        if (typeTravel === `${lng === "en" ? "Select Travel Type" : "اختر وسيله السفر"}`) {
            newErrors.typeTravel = t('BookingValidation.typeTravel');
        }

        if (phone === "") {
            newErrors.phone = t('BookingValidation.phone');
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log(errors);
            return;
        }
        setErrors({});
        alert(`Selected values: ${departureCountry}, ${arrivalCountry}, ${typeTravel}, ${phone}, ${selectedDate}, Adults: ${numberOfAdults}, Children: ${numberOfChilds}`);
    };
    return (
        <div className="booking1">
           <div className="booking-title pb-5 flex gap-3 justify-center items-center">
            <div className="text-center text-3xl font-extrabold text-[#03245a] ">{t(`BookTicketTitle`)}</div>

             <div>    <ModelBookingInfo lng={lng}/></div>

           </div>
            <div className="containerr w-[90%] bg-blue-100 md:w-[90%]  lg:w-[70%] mx-auto  ">
               
                <form htmlFor="Booking" onSubmit={handleSubmit} className="p-6  grid grid-cols-1 md:grid-cols-2  md:gap-x-5">
                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef1}>

                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}>{t(`countries.FromCountry`)}</div>
                        <button
                            id="dropdownCountry1"
                            onClick={toggleDropdown1}
                            className={`w-[100%] mt-2 ${errors.departureCountry ? 'border-2 border-red-500 ' : 'border-gray-300'} text-white bg-[#03245a]  hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800`}
                            type="button"
                        >
                            {departureCountry}
                             <IoIosArrowDown className={`absolute ${lng == "en" ? "right-2" : "left-2"}  text-base`} />

                        </button>
                        <div id="dropdown1" className={`z-10 ${isOpen1 ? 'block' : 'hidden'}  absolute bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 overflow-y-auto max-h-40 w-[100%]`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCountry1">
                                <li>
                                    {countries.map((country) => (
                                        <span key={country} onClick={() => handleItemClick1(t(`countries.${country}`))} value={country}
                                            className={`block ${lng == "ar" ? "text-right" : ""} w-[100%] px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#02183D] dark:hover:text-white cursor-pointer`}>
                                            {t(`countries.${country}`)}
                                        </span>
                                    ))}
                                </li>
                            </ul>
                        </div>
                        {errors.departureCountry && <p className={`text-red-500 ${lng == "ar" ? "text-right " : ""} px-2 pt-1 text-[14px]`}>{errors.departureCountry}</p>}
                    </div>

                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef2}>
                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}>{t(`countries.ToCountry`)}</div>
                        <button
                            id="dropdownCountry2"
                            onClick={toggleDropdown2}
                            className={`w-[100%] mt-2 ${errors.arrivalCountry ? 'border-2 border-red-500 ' : 'border-gray-300'} text-white bg-[#03245a]  hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800`}
                            type="button"
                        >
                            {arrivalCountry}
                            <IoIosArrowDown className={`absolute ${lng == "en" ? "right-2" : "left-2"}  text-base`} />
                        </button>
                        <div id="dropdown2" className={`z-10 ${isOpen2 ? 'block' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[100%] dark:bg-gray-700 overflow-y-auto max-h-40`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCountry2">
                                <li>

                                    {countries.reverse().map((country) => (
                                        <span key={country} onClick={() => handleItemClick2(t(`countries.${country}`))} value={country}
                                            className={`block ${lng == "ar" ? "text-right" : ""} w-[100%] px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#02183D] dark:hover:text-white cursor-pointer`}>
                                            {t(`countries.${country}`)}
                                        </span>
                                    ))}
                                </li>

                            </ul>

                        </div>
                        {errors.arrivalCountry && <p className={`text-red-500 ${lng == "ar" ? "text-right " : ""} px-2 pt-1 text-[14px]`}>{errors.arrivalCountry}</p>}

                    </div>
                    {/*3Hotels star*/}
                    {!ticket == "ticket" && (
                        <div className="relative col-span-1 text-left mb-4" ref={dropdownRef3}>
                            <div className={`block ${lng == "ar" ? "text-right" : ""}`}> {t(`hotel_stars.chooseHotelStar`)}   </div>
                            <button
                                id="dropdownCountry2"
                                onClick={toggleDropdown3}
                                className={`w-[100%] mt-2 ${errors.hotel ? 'border-2 border-red-500 ' : 'border-gray-300'} text-white bg-[#03245a]  hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800`}
                                type="button"
                            >
                                {hotel}
                                 <IoIosArrowDown className={`absolute ${lng == "en" ? "right-2" : "left-2"}  text-base`} />

                            </button>
                            <div id="dropdown2" className={`z-10 ${isOpen3 ? 'block' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[100%] dark:bg-gray-700 overflow-y-auto max-h-40`}>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCountry2">
                                    <li>

                                        {starOptions.map((star) => (

                                            <span key={star} value={star} onClick={() => handleItemClick3(t(`hotel_stars.${star}`))}
                                                className={`block ${lng == "ar" ? "text-right" : ""} w-[100%] px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#02183D] dark:hover:text-white cursor-pointer`}>

                                                {t(`hotel_stars.${star}`)}
                                            </span>
                                        ))}

                                    </li>

                                </ul>
                            </div>
                            {errors.hotel && <p className={`text-red-500 ${lng == "ar" ? "text-right " : ""} px-2 pt-1 text-[14px]`}>{errors.hotel}</p>}

                        </div>
                    )}

                    {/*4 travel ways*/}
                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef4}>
                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}> {t(`travel_types.chooseTravelType`)}   </div>
                        <button
                            id="dropdownCountry2"
                            onClick={toggleDropdown4}
                            className={`w-[100%] mt-2 ${errors.typeTravel ? 'border-2 border-red-500 ' : 'border-gray-300'} text-white bg-[#03245a]  hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800`}
                            type="button"
                        >
                            {typeTravel}
                            <IoIosArrowDown className={`absolute ${lng == "en" ? "right-2" : "left-2"}  text-base`} />

                        </button>
                        <div id="dropdown2" className={`z-10 ${isOpen4 ? 'block' : 'hidden'} absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[100%] dark:bg-gray-700 overflow-y-auto max-h-40`}>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCountry2">
                                <li>
                                    {travelOptions.map((travelway) => (
                                        <span key={travelway} onClick={() => handleItemClick4(t(`travel_types.${travelway}`))} 
                                           value={travelway}
                                            className={`block ${lng == "ar" ? "text-right" : ""} w-[100%] px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#02183D] dark:hover:text-white cursor-pointer`}>
                                            {t(`travel_types.${travelway}`)}
                                        </span>
                                    ))}

                                </li>

                            </ul>
                        </div>
                        {errors.typeTravel && <p className={`text-red-500 ${lng == "ar" ? "text-right " : ""} px-2 pt-1 text-[14px]`}>{errors.typeTravel}</p>}

                    </div>
                    {/*5 Phone*/}
                    <div className={`relative col-span-1 ${ticket == "ticket" ? "" : "md:col-span-2"}  text-left mb-4`}>
                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}> {t(`phone.writePhone`)}   </div>
                        <input
                            type="number"
                            value={phone}
                            onChange={(e) => handleItemClick5(e.target.value)}
                            className={`w-[100%] mt-2 ${errors.phone ? 'border-2 border-red-500 ' : 'border-gray-300'} text-white bg-[#03245a]  hover:bg-[#02183D] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  inline-flex items-center dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800 text-white placeholder-white`}
                            min="0"
                            placeholder={t(`phone.writePhone`)}
                        />
                        {errors.phone && <p className={`text-red-500 ${lng == "ar" ? "text-right " : ""} px-2 pt-1 text-[14px]`}>{errors.phone}</p>}

                    </div>


                    {/*6 Days of trip*/}
                    {/*<div className="relative col-span-1 text-left mb-4" ref={dropdownRef6}>
            <div>choose</div>
            <div className="flex bg-[orange] overflow-hidden  rounded-full justify-around  items-center space-x-4 mb-4">
              <div
                onClick={decrementAdults}
                className="cursor-pointer text-3xl text-white   rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
              >
                -
              </div>
              <span className=" font-medium text-xl">
                {numberOfAdults}
              </span>
              <div
                onClick={incrementAdults}
                className="mt-2 cursor-pointer text-3xl text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
              >
                +
              </div>
            </div>
          </div>*/}
                    {/*7 Date for trip*/}
                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef6}>
                        <label htmlFor="dateInput" className={`block pb-2 text-[16px]  ${lng == "ar" ? "text-right" : ""} text-sm font-medium text-gray-700`}>{t(`date.chosedateticket`)} </label>

                        <input
                            id="dateInput"
                            type="date"
                            name="dateInput"
                            className=" bg-[#03245a] text-white rounded-full p-[5px] cursor-pointer mt-1 block w-full  px-3 border border-gray-300  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </div>
                    {/*8 Adults*/}
                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef6}>
                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}> {t(`persons.adults`)}   </div>
                        <div className="flex bg-[#03245a] mt-2 overflow-hidden  rounded-full justify-around  items-center space-x-4 mb-4">
                            <div
                                onClick={decrementAdults}
                                className="cursor-pointer text-3xl text-white   rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
                            >
                                -
                            </div>
                            <span className="font-medium text-xl text-white">
                                {numberOfAdults}
                            </span>
                            <div
                                onClick={incrementAdults}
                                className="cursor-pointer text-3xl text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
                            >
                                +
                            </div>
                        </div>
                    </div>
                    {/*9 Childs*/}
                    <div className="relative col-span-1 text-left mb-4" ref={dropdownRef7}>
                        <div className={`block ${lng == "ar" ? "text-right" : ""}`}> {t(`persons.childs`)}   </div>
                        <div className="flex bg-[#03245a] mt-2 overflow-hidden  rounded-full justify-around  items-center space-x-4 mb-4">
                            <div
                                onClick={decrementChilds}
                                className="cursor-pointer text-3xl text-white   rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
                            >
                                -
                            </div>
                            <span className="  font-medium text-white">
                                {numberOfChilds}
                            </span>
                            <div
                                onClick={incrementChilds}
                                className="cursor-pointer text-3xl text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#03245a]  dark:focus:ring-blue-800"
                            >
                                +
                            </div>
                        </div>
                    </div>




                    <div className={` relative flex flex-col justify-center col-span-1 ${ticket == "ticket" ? "" : "md:col-span-2"}  text-left `}>
                        <button
                            type="submit"
                            className="button-send  col-span-1  w-full text-white bg-orange-500 hover:bg-orange-600  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            {t(`BookingValidation.sendMsg`)} 
                        </button>
                    </div>
                </form>
            </div>



        </div>
    );
}

export default DropdownForm;
