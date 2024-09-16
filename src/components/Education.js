import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}&nbsp;</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelors in Electrical and Electronics Engineering"
            time="2021-2025"
            place="Nandha College of Technology, Erode, Tamil Nadu."
            info="Passionate about computer science, with a background in Electrical and Electronic Engineering. Committed to integrating technical expertise and innovative thinking to solve complex problems."
          />
          <Details
            type="HSC"
            time="2020-2021"
            place="Reliance Matric Higher Secodary School, Namakkal, Tamil Nadu."
            info="Studied Computer Science in 12th grade, developing a strong foundation in programming, algorithms, and software development. Gained practical experience through hands-on projects and coursework."
          />
          <Details
            type="SSLC"
            time="2019-2020"
            place="Reliance Matric Higher Secondary School, Namakkal, Tamil Nadu."
            info="Completed 10th grade with a focus on foundational subjects, including an introduction to computer science concepts. Developed essential analytical and problem-solving skills that paved the way for further studies in technology"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
