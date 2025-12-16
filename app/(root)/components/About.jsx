"use client";
import React from "react";
import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";

// Optimized animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const About = () => {
  return (
    <div className="section" id="about">
      <div className="mx-auto container overflow-hidden p-10 md:px-20 ">
        <motion.div
          className="col-span-2 flex flex-col justify-center items-center text-center md:text-start py-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: "opacity" }}
        >
          <motion.h2
            className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
            variants={fadeUpVariants}
            style={{ willChange: "transform, opacity" }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
            variants={fadeUpVariants}
            style={{ willChange: "transform, opacity" }}
          >
            I'm a passionate and detail-oriented Web Developer with expertise in
            full-stack development, clean code, and modern web technologies. I
            enjoy building complete web solutions from front-end interfaces to
            back-end systems using technologies like React, Node.js, and
            Express.js.
          </motion.p>
          <motion.p
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
            variants={fadeUpVariants}
            style={{ willChange: "transform, opacity" }}
          >
            Beyond Web Developer, I'm currently expanding into Mobile
            Development to create seamless cross-platform experiences. I'm
            exploring React Native and native mobile technologies to build
            responsive applications that deliver consistent user experiences
            across web and mobile platforms.
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ willChange: "transform, opacity" }}
          className="flex items-center justify-center"
        >
          <Button variation="primary">
            <Link href="/about">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
