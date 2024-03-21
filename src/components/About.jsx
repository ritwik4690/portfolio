import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 50,
          }}
          className="bg-tertiary rounded-[20px] py-5
          px-12 min-h-[280px] flex justify-evenly items-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I’m a Master’s student in Computer Science at North Carolina State
        University and am actively looking for full-time Software
        Engineer/Developer, Front-end Developer, Back-end Developer and
        Fullstack Developer roles. Currently, I’m working as a
        Software Developer at the Nuclear Engineering Dept. of my university
        where we are building a software for Probabilisitc Risk Analysis.
        Recently, I got a chance to intern at Amazon where I built solutions
        that impacted more than 500k Amazonians.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
