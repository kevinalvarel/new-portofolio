"use client";

import React from "react";
import Image from "next/image";

import kontak from "@/public/images/setup.jpg";

import { motion } from "motion/react";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

// Optimized animation variants
const slideInRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="relative md:h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={kontak}
              layout="fill"
              className="object-cover"
              alt="Kev"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 overflow-hidden">
          <motion.h1
            className="bg-background rounded-tr-3xl  lg:bg-transparent bg-opacity-50 px-4 md:px-0 text-black text-5xl md:text-8xl font-bold mb-3"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            Contact
          </motion.h1>
          <motion.p
            className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] md:mb-5"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            Feel free to contact me if you have any{" "}
            <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
              questions or just want to say hi.
            </span>
          </motion.p>
          <motion.p
            className="title text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <a href="mailto:muhammadkevinalvarel@gmail.com?subject=Hello&body=Hello Kevin,">
              muhammadkevinalvarel@gmail.com
            </a>
          </motion.p>
          {/* icons */}
          <motion.div
            className="flex justify-center items-center space-x-4"
            variants={iconContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a
              href="mailto:muhammadkevinalvarel@gmail.com?subject=Hello&body=Hello Kevin,"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              variants={iconVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <IconMail className="text-3xl" />
            </motion.a>

            <motion.a
              href="https://github.com/kevinalvarel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              variants={iconVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <IconBrandGithub className="text-3xl" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-kevin-alvarel-992974355/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center bg-gray-700 w-14 h-14 rounded-full text-gray-100 hover:bg-gray-400 transition-all ease-in-out duration-300"
              variants={iconVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <IconBrandLinkedin />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
