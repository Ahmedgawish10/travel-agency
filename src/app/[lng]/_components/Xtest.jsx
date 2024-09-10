"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Variants for the parent container to stagger children
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

function StaggeredDivs() {
  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Trigger animation earlier
    >
      {/* Flex container with responsive behavior */}
      <div className="flex flex-wrap gap-8 justify-center">
        {Array.from({ length: 5 }, (_, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            className="p-6 bg-blue-500 text-white rounded-lg shadow-lg flex-1 basis-full md:basis-1/3"
          >
            <h2 className="text-2xl font-bold">Div {index + 1}</h2>
            <p>This is content of div {index + 1}.</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default StaggeredDivs;
