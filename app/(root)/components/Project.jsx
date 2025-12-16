"use client";
import React from "react";
import MyProject from "@/public/images/project.png";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
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

const Project = () => {
  return (
    <div className="section" id="project">
      <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 duration-100 rounded-bl-4xl rounded-tl-4xl rounded-r-lg"
            variants={slideInRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <Image
              src={MyProject}
              layout="fill"
              className="object-cover"
              alt="Kevin Project"
              placeholder="blur"
            />
          </motion.div>
        </div>
        <div className="z-10 w-full absolute md:w-auto  md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 py-5">
          <motion.h1
            className="bg-background rounded-tr-3xl py-2 lg:bg-transparent bg-opacity-50 px-4 md:px-0 text-black text-5xl md:text-8xl font-bold"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            variants={slideInLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            This is some of my projects that I have done{" "}
          </motion.p>
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <Button variation="primary">
              <Link href="/projects">Learn more</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Project;
