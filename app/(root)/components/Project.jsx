"use client";
import React from "react";
import MyProject from "@/public/images/project.png";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

const Project = () => {
  return (
    <div className="section" id="project">
      <div className="relative md:h-screen w-screen gap-4 p-10 flex justify-center items-center flex-col overflow-hidden">
        <div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
          <motion.div
            className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 duration-100 rounded-bl-4xl rounded-tl-4xl rounded-r-lg"
            initial={{
              x: 300,
              opacity: 0,
              z: -100,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              z: 0,
            }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
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
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              type: "spring",
            }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="title  text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem] mb-5"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
            }}
          >
            This is some of my projects that I have done{" "}
          </motion.p>
          <motion.div
            initial={{ y: 40, scale: 0, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
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
