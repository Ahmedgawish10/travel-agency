"use client";
import React, { useState } from 'react';
import { useTranslation } from '../../i18n/clinet';

export default function Offers({ lng }) {
  const { t } = useTranslation(lng, "home");

  const headers = t('headers', { returnObjects: true });


  
  

  return (
    <>
      
       <section class="mt-12">
       <div className="ourloaction w-[80%] mx-auto text-center pb-3"> 
           <h2 class="text-3xl font-extrabold text-[#03245a] ">Visit Our Location</h2>
            <p class=" text-lg text-gray-500 ">Experience unforgettable journeys with Al-Jewar.</p>
            
            </div>
            <div className="overlay bg-gray-100">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-2 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
           
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.016018329415!2d30.656121!3d31.138207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDA4JzE4LjAiTiAzMMKwMzknMjIuMCJF!5e0!3m2!1sen!2sus!4v1694179730921!5m2!1sen!2sus"
  width="100%" 
  height="480" 
  style={{border:"0"}} 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe>


                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Saturday - Thursday: 9am - 8pm</p>
                            <p class="mt-1 text-gray-600">Friday: Closed</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email:Al-Jewar@gmail.com</p>
                            <p class="mt-1 text-gray-600">Phone:+0201094487922 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
      
      
      

      
    </>
  );
}
