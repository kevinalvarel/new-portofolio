"use client";
import React from "react";
import Me from "@/public/images/me.jpg";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

// Optimized animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
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

const Hero = () => {
  return (
    <>
      <div className="section" id="home">
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20 ">
          <motion.div
            className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity" }}
          >
            <div className="block md:hidden col-span-1 mx-auto my-10">
              <div className="bg-slate-500 rounded-full h-60 w-60 transition-all  grayscale blur-xs hover:blur-none hover:grayscale-0 duration-300 ease">
                <Image
                  src={Me}
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full object-cover "
                  alt="Kev"
                />
              </div>
            </div>
            <motion.h3
              className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
              variants={slideInLeftVariants}
              style={{ willChange: "transform, opacity" }}
            >
              MUHAMMAD KEVIN ALVAREL
            </motion.h3>
            <motion.h1
              className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
              variants={slideInLeftVariants}
              style={{ willChange: "transform, opacity" }}
            >
              Junior Fullstack Developer
            </motion.h1>
            <motion.p
              className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
              variants={slideInLeftVariants}
              style={{ willChange: "transform, opacity" }}
            >
              Hi! I&rsquo;am Kevin, a Junior Fullstack Developer passionate
              about building sleek, responsive user interfaces and continuously
              learning modern web technologies.
            </motion.p>
            <motion.div
              className="buttons flex flex-row justify-center items-center space-x-4 mt-10"
              variants={slideInLeftVariants}
              style={{ willChange: "transform, opacity" }}
            >
              <Button variation="primary">
                <Link
                  href={"/docs/cv.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download CV
                </Link>
              </Button>
              <Button variation="secondary">
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden md:flex col-span-1 mx-auto justify-center items-center "
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <motion.div
              className="rounded-full h-auto w-auto lg:px-12 grayscale blur-xs hover:blur-none hover:grayscale-0 duration-100"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <Image
                src={Me}
                width={500}
                height={500}
                placeholder="blur"
                alt="Kev"
                className="rounded-4xl w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
