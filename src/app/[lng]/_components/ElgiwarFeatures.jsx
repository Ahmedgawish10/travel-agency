

"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../i18n/clinet';

import "./style.css";

function ElgiwarFeatures({ lng }) {
    const { t } = useTranslation(lng, 'home');
    const Featuers = t("Home.Features", { returnObjects: true })[0];

  // Extract the two specific words (assuming you want to extract the first two words)
  // Get the contact text from the translation
  const contactText = t('Home.Features.0.contact');

  // Split the text into words and take the first two
  const words = contactText.split(' ');
    
  const firstTwoWords = words.slice(0, 2).join(' '); 

    const restOfText = contactText.slice(firstTwoWords.length).trim();

    return (
        <div className="ElgiwarFeatures pt-8">
            <div className="containerr w-[90%] m-auto">
                <div className="title text-center text-[#03245a] text-4xl pb-4 font-extrabold">
                    {Featuers.Heading}
                </div>
                <div className="title text-center text-[#03245a] text-xl pb-9 font-semibold">
                    {Featuers.offer}
                </div>
                <div className="title text-center text-xl text-[#03245a]">
                   <a href="tel:+201094487922" className="underline  "> {firstTwoWords} </a>
                   <span>
                       {restOfText}
                   </span>
                 <span></span>

                </div>

                <div className="elgiwar-works grid gap-4  mb-10 mt-12">
                    <div className="box1 grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-4">
                        {Featuers.OurFeatures?.map((feature, index) => (
                            <div className="relative h-[250px]" key={index}>
                                <div className="ping absolute right-0 z-10 text-red text-[#0ABB0A]"></div>
                                <Link href="#" className="hover:opacity-80 transition-opacity duration-300">
                                    <div className={`img${index+1} h-[80%] relative`}>
                                        <div className="work1 text-[#03245a] absolute right-[12%] top-[60%] font-bold text-xl text-center">
                                            {feature.Feat1.split(' ').map((word, i, arr) => (
                                                <React.Fragment key={i}>
                                                    {word}
                                                    {i < arr.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElgiwarFeatures;

