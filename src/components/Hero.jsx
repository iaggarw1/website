import React from 'react';
import { motion } from "framer-motion";

import { styles } from "../style.js";
import Computers from "./canvas/Computers.jsx";
const Hero = () => {
  return (
      <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
            <div className="w-1 sm:h-80 -50 violet-gradient"/>
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915EFF]">Ishaan</span> </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop software applications, <br className="sm:block hidden"/>machine learning models and XR applications.
            </p>
          </div>

          <Computers />
        </div>
      </section>
  )
}

export default Hero