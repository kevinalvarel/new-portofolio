"use client";
import React, { useRef } from "react";
import Me from "@/public/images/me.jpg";
import { motion } from "motion/react";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";

gsap.registerPlugin(useGSAP, SplitText);

const Hero = () => {
  const animationRef = useRef(null);
  const buttonRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(animationRef.current, {
        type: "words, chars",
      });

      gsap.from(buttonRef.current, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.01,
        ease: "power4",
      }
      );

      gsap.from(split.chars, {
        duration: 1,
        y: 100,
        autoAlpha: 0,
        stagger: 0.01,
        ease: "power4",
      });

      return () => split.revert();
    },
    { scope: animationRef },
  );

  return (
    <>
      <div className="section" id="home">
        <div className="mx-auto container grid grid-cols-1 md:grid-cols-3 gap-4 p-10 overflow-hidden md:px-20 ">
          <motion.div
            className="col-span-2 flex flex-col justify-center items-center md:items-start text-center md:text-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "opacity" }}>
            <div className="block md:hidden col-span-1 mx-auto my-10">
              <div className="bg-slate-500 rounded-full h-60 w-60 transition-all grayscale blur-xs hover:blur-none hover:grayscale-0 duration-300 ease">
                <Image
                  src={Me}
                  width={500}
                  height={500}
                  className="rounded-full w-full h-full object-cover "
                  alt="Kev"
                />
              </div>
            </div>
            <div ref={animationRef}>
              <h3
                id="split-name"
                className="uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray-500"
                style={{ willChange: "transform, opacity" }}>
                MUHAMMAD KEVIN ALVAREL
              </h3>
              <h1
                className="text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5"
                style={{ willChange: "transform, opacity" }}>
                Junior Software Engineer
              </h1>
              <motion.p
                className="title text-md  2xl:text-xl mt-4 tracking-wider text-gray-500 leading-[1.7rem]"
                style={{ willChange: "transform, opacity" }}>
                Hi! I&rsquo;am Kevin, a Junior Software Engineer passionate
                about building sleek, responsive user interfaces and
                continuously learning modern web technologies.
              </motion.p>
            </div>
            <div
              className="buttons flex flex-row justify-center items-center space-x-4 mt-10 "
              ref={buttonRef}>
              <Link
                href={"/docs/curriculum-vitae.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                download>
                <Button variation="primary">Download CV</Button>
              </Link>
              <Button variation="secondary">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:flex col-span-1 mx-auto justify-center items-center "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            style={{ willChange: "transform, opacity" }}>
            <motion.div className="rounded-full h-auto w-auto lg:px-12 grayscale blur-xs hover:blur-none hover:grayscale-0 ">
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
      </div >
    </>
  );
};

export default Hero;
