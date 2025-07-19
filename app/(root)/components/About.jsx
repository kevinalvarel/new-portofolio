"use client";
import React from "react";
import { motion } from "motion/react";
import Button from "@/components/Button";
import Link from "next/link";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="mx-auto container overflow-hidden p-10 md:px-20 ">
        <motion.div
          className="col-span-2 flex flex-col justify-center items-center text-center md:text-start py-5"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
          }}
        >
          <motion.h2
            className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              type: "spring",
            }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            I'm a passionate and detail-oriented Front-End Developer with a
            strong interest in clean code, modern UI design, and accessible web
            experiences. I enjoy turning ideas into intuitive and interactive
            interfaces using technologies like React, Tailwind CSS, and Next.js.
          </motion.p>
          <motion.p
            className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
            }}
          >
            Beyond front-end work, Im currently expanding into Machine Learning
            to combine data-driven insights with user-centric design — aiming to
            create smarter, more personalized applications that adapt to user
            needs.
          </motion.p>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            type: "spring",
          }}
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
