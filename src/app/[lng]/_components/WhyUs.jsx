"use client"

import React from 'react'
import { useTranslation } from '../../i18n/clinet'
import { BiSolidOffer } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { FaSearchDollar } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const IconWithTitle = ({ Icon, title, desc }) => (
  <div className="transform transition duration-500 hover:scale-110">
    <div className="flex justify-center">
      <Icon className="text-8xl text-[#04293f]" />
    </div>
    <h2 className="title-font font-regular text-2xl text-white">{title}</h2>
    <span className="text-gray-300">{desc}</span>
  </div>
);

function WhyUs({ lng }) {
  const { t } = useTranslation(lng, 'home');
  const AnimationHeading = { visible: { opacity: 1, x: 0 }, hidden: { opacity: 0, x: "25vw" } };

  const items = [
    { Icon: BiSolidOffer, title: t('Whyus.offersTitle'), desc: t('Whyus.offersDesc') },
    { Icon: TbTruckDelivery, title: t('Whyus.servicesTitle'), desc: t('Whyus.servicesDesc') },
    { Icon: FaSearchDollar, title: t('Whyus.paymentsTitle'), desc: t('Whyus.paymentsDesc') },
    { Icon: RiCustomerService2Fill, title: t('Whyus.customerServiceTitle'), desc: t('Whyus.customerServiceDesc') },
  ];

  return (
    <section className="why-us text-gray-700 body-font">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={AnimationHeading}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10 text-3xl font-extrabold pb-6 text-[#03245a]"
      >
        {t('Whyus.whyUs')}
      </motion.div>
      <div className="content bg-no-repeat sm:bg-cover md:bg-cover md:bg-center">
        <div className="w-[90%] overflow-hidden py-12 mx-auto grid xmd:gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center md:justify-around lg:justify-center md:gap-5 lg:gap-3">
          {items.map(({ Icon, title, desc }, index) => (
                <motion.div
  initial={{ opacity: 0, x: `${(index * 50) + 60}px` }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true}} // Adjust 'amount' to trigger earlier
  transition={{
    delay: index *0.2,
    duration: 0.3,
    ease: "easeInOut"
  }}
  key={index}>
            <IconWithTitle key={index} Icon={Icon} title={title} desc={desc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;