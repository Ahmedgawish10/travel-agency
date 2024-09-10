"use client";
import { motion } from "framer-motion";

export default function MultiDirectionSlide() {
  const AnimationHeading = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  };

  return (
    <div className="overflow-hidden">
      <motion.h1
        initial="hidden"
        whileInView="visible"  
        viewport={{ once: false }}
        variants={AnimationHeading}
        transition={{ duration: 1 }}
        className="text-center  md:leading-[5rem]"
      >
        Multi Direction
      </motion.h1>

      <motion.h1
        initial="right"
        whileInView="visible"  
        viewport={{ once: false }} 
        variants={AnimationHeading}
        transition={{ duration: 1 }}
        className="text-center font-display text-3xl font-extrabold "
      >
        Slide
      </motion.h1>
    </div>
  );
}
