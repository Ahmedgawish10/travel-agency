"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslation } from '../../i18n/clinet';
import { motion } from "framer-motion";
import "./style.css";

function ElgiwarFeatures({ lng }) {
    const elgiwarFeaturesRouts=["elhag&elumrah","demosticTourism","internationalTourism","hotelBookings","flightTickets"]
    const AnimationHeading = {
        hidden: { opacity: 0, x: "-25vw" },
        visible: { opacity: 1, x: 0 },
        right: { opacity: 0, x: "25vw" },
        bottom: { opacity: 0, y: "200px" }, // Adjust 'y' for your desired start position
        visible2: { opacity: 1, y: 0 }
    };
    //boxs featurs parent
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8, 
      duration: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: { opacity: 1, y: 0 }, 
};
    const { t } = useTranslation(lng, 'home');
    const Featuers = t("Home.Features", { returnObjects: true })[0];

    // Extract the two specific words
    const contactText = t('Home.Features.0.contact');
    const words = contactText.split(' ');
    const firstTwoWords = words.slice(0, 2).join(' ');
    const restOfText = contactText.slice(firstTwoWords.length).trim();

    return (
        <div className="ElgiwarFeatures pt-16">
            <div className="containerr overflow-hidden w-[90%] m-auto">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={AnimationHeading}
                    transition={{ duration: 1 }}
                    className="title text-center text-[#03245a] text-4xl pb-4 font-extrabold"
                >
                    {Featuers.Heading}
                </motion.h2>
                <motion.h2
                    initial="right"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={AnimationHeading}
                    transition={{ duration: 1 }}
                    className="title text-center text-[#03245a] text-xl pb-9 font-semibold"
                >
                    {Featuers.offer}
                </motion.h2>
                    <motion.div
                        initial="bottom"
                        whileInView="visible2"
                        viewport={{ once: true }}
                        variants={AnimationHeading}
                        transition={{ duration: 1 }}
                        className="title text-center text-xl text-[#03245a]"
                    >
                        <a href="tel:+201094487922" className="underline">{firstTwoWords}</a>
                        <span>{restOfText}</span>
                    </motion.div>

                  <div
     className="elgiwar-works grid gap-4 mb-10 mt-12">
                    <div className="box1 grid grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-4">
                        {Featuers.OurFeatures?.map((feature, index) => (
<motion.div
  initial={{ opacity: 0, x: `${(index * 50) + 60}px` }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true}} // Adjust 'amount' to trigger earlier
  transition={{
    delay: index *0.2,
    duration: 0.3,
    ease: "easeInOut"
  }}
  key={index}
  className="relative h-[250px]"
>
                                <div className="ping absolute right-0 z-10 text-red text-[#0ABB0A]"></div>
                                <Link href={`/${lng}/${elgiwarFeaturesRouts[index]}`} className="hover:opacity-80 transition-opacity duration-300">
                                    <div className={`img${index + 1} h-[80%] relative `}>
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ElgiwarFeatures;
