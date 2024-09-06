"use client"
//
//import { MdOutlineLanguage } from "react-icons/md";
//
//import { useTranslation } from '../../i18n/clinet'
//
//import Link from 'next/link';
//
// const Home=({ params: { lng } } )=>{
//  const { t } = useTranslation(lng, 'home')
//  return (
//     
//      <main className="main-content text-[red]">
//        <div className={`home-langSwitcher  fixed top-[8px] z-20 ${lng=="ar"?"left-[5%] ":"right-[5%]"} `}>
//            <Link href={`/${lng=="en"?"ar":"en"}/pages`} className="text-[black] flex items-center gap-2 text-[20px]">
//                      
//                     
//                       <span> {lng=="en"?"العربية":"English"}</span>
//                                               <MdOutlineLanguage/>
//
//                       </Link>
//
//           </div>         
//                  
//            
//            
//      </main>
//  );
//}
//
//
//export default Home;



import React, { useState } from 'react';

const Home = ({ t }) => {
  // State for values and errors
  const [formData, setFormData] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    input1: '',
    input2: '',
  });

  const [errors, setErrors] = useState({
    dropdown1: '',
    dropdown2: '',
    dropdown3: '',
    input1: '',
    input2: '',
  });

  // Toggle dropdown visibility
  const toggleDropdown = (key) => {
    setFormData(prevData => ({
      ...prevData,
      [`${key}Open`]: !prevData[`${key}Open`]
    }));
  };

  const handleItemClick = (key, value) => {
    setFormData(prevData => ({
      ...prevData,
      [key]: value,
      [`${key}Open`]: false
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [key]: ''
    }));
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    setErrors(prevErrors => ({
      ...prevErrors,
      [id]: '' // Clear error on change
    }));
  };

  const handleSubmit = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach(field => {
      if (!formData[field] && field.startsWith('dropdown')) {
        newErrors[field] = 'This field is required';
        formIsValid = false;
      }
      if (field.startsWith('input') && !formData[field]) {
        newErrors[field] = 'This field is required';
        formIsValid = false;
      }
    });

    setErrors(newErrors);

    if (formIsValid) {
      console.log('Form data:', formData);
      // Send the data to the server or perform further actions
    }
  };

  return (
    <div>
      {/* Dropdown 1 */}
      <div className="relative col-span-1 text-left mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select a country 1
        </label>
        <div
          onClick={() => toggleDropdown('dropdown1')}
          className={`cursor-pointer mt-2 w-full px-3 border ${errors.dropdown1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        >
          {formData.dropdown1 || 'Select a country'}
        </div>
        {formData.dropdown1Open && (
          <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-40 overflow-y-auto">
            <div onClick={() => handleItemClick('dropdown1', 'Egypt')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Egypt</div>
            <div onClick={() => handleItemClick('dropdown1', 'Saudi Arabia')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Saudi Arabia</div>
            <div onClick={() => handleItemClick('dropdown1', 'United Arab Emirates')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">United Arab Emirates</div>
            <div onClick={() => handleItemClick('dropdown1', 'USA')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USA</div>
            <div onClick={() => handleItemClick('dropdown1', 'France')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">France</div>
            <div onClick={() => handleItemClick('dropdown1', 'Germany')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Germany</div>
          </div>
        )}
        {errors.dropdown1 && <p className="text-red-500 text-xs mt-1">{errors.dropdown1}</p>}
      </div>

      {/* Dropdown 2 */}
      <div className="relative col-span-1 text-left mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select a country 2
        </label>
        <div
          onClick={() => toggleDropdown('dropdown2')}
          className={`cursor-pointer mt-2 w-full px-3 border ${errors.dropdown2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        >
          {formData.dropdown2 || 'Select a country'}
        </div>
        {formData.dropdown2Open && (
          <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-40 overflow-y-auto">
            <div onClick={() => handleItemClick('dropdown2', 'Egypt')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Egypt</div>
            <div onClick={() => handleItemClick('dropdown2', 'Saudi Arabia')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Saudi Arabia</div>
            <div onClick={() => handleItemClick('dropdown2', 'United Arab Emirates')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">United Arab Emirates</div>
            <div onClick={() => handleItemClick('dropdown2', 'USA')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USA</div>
            <div onClick={() => handleItemClick('dropdown2', 'France')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">France</div>
            <div onClick={() => handleItemClick('dropdown2', 'Germany')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Germany</div>
          </div>
        )}
        {errors.dropdown2 && <p className="text-red-500 text-xs mt-1">{errors.dropdown2}</p>}
      </div>

      {/* Dropdown 3 */}
      <div className="relative col-span-1 text-left mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select a country 3
        </label>
        <div
          onClick={() => toggleDropdown('dropdown3')}
          className={`cursor-pointer mt-2 w-full px-3 border ${errors.dropdown3 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm`}
        >
          {formData.dropdown3 || 'Select a country'}
        </div>
        {formData.dropdown3Open && (
          <div className="absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-40 overflow-y-auto">
            <div onClick={() => handleItemClick('dropdown3', 'Egypt')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Egypt</div>
            <div onClick={() => handleItemClick('dropdown3', 'Saudi Arabia')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Saudi Arabia</div>
            <div onClick={() => handleItemClick('dropdown3', 'United Arab Emirates')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">United Arab Emirates</div>
            <div onClick={() => handleItemClick('dropdown3', 'USA')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">USA</div>
            <div onClick={() => handleItemClick('dropdown3', 'France')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">France</div>
            <div onClick={() => handleItemClick('dropdown3', 'Germany')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Germany</div>
          </div>
        )}
        {errors.dropdown3 && <p className="text-red-500 text-xs mt-1">{errors.dropdown3}</p>}
      </div>

      {/* Input 1 */}
      <div className="relative col-span-1 text-left mb-4">
        <label htmlFor="input1" className="block text-sm font-medium text-gray-700">
          Enter a number 1
        </label>
        <input
          id="input1"
          type="number"
          value={formData.input1}
          onChange={handleChange}
          className={`w-full mt-2 bg-white border ${errors.input1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          min="0"
          max="100"
          placeholder="y"
        />
        {errors.input1 && <p className="text-red-500 text-xs mt-1">{errors.input1}</p>}
      </div>

      {/* Input 2 */}
      <div className="relative col-span-1 text-left mb-4">
        <label htmlFor="input2" className="block text-sm font-medium text-gray-700">
          Enter a number 2
        </label>
        <input
          id="input2"
          type="number"
          value={formData.input2}
          onChange={handleChange}
          className={`w-full mt-2 bg-white border ${errors.input2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          min="0"
          max="100"
          placeholder="i"
        />
        {errors.input2 && <p className="text-red-500 text-xs mt-1">{errors.input2}</p>}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Book Now
      </button>
    </div>
  );
};

export default Home;
