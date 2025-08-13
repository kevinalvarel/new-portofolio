"use client";
import { motion } from "motion/react";
import Image from "next/image";

import Resumize1 from "@/public/images/Resumize1.png";
import Resumize2 from "@/public/images/Resumize2.png";

export default function Highlight() {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full pl-10 md:pl-32 overflow-x-hidden">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <h1 className="text-3xl font-bold mt-3">On Progress</h1>
        </div>
      </div>
      <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 overflow-x-hidden">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full shadow-lg"
              >
                <Image
                  src={Resumize1}
                  alt="Resumize Project"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rat"
                />
              </motion.div>
            </div>
            <div className="absolute top-8 right-20 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  x: -100,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{ delay: 0.3 }}
                className="w-full h-full shadow-lg "
              >
                <Image
                  src={Resumize2}
                  alt="Resumize Project"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  objectPosition="0% 0%"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: 200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,
            type: "spring",
          }}
        >
          <h2 className="text-2xl font-bold tracking-wider mb-3">
            Resumize AI
          </h2>
          <p className="text-gray-600 text-justify title text-lg">
            Resumize AI is an AI-powered project designed to help users improve
            the quality of their resumes or CVs. Built with Next.js, TypeScript,
            Tailwind CSS, and PuterJS, the application allows users to upload or
            fill in their resume details directly on the platform. The AI system
            analyzes the content of the resume, providing a score based on
            factors such as structure, grammar, readability, and relevance to
            the desired job position.
          </p>{" "}
        </motion.div>
      </div>
    </>
  );
}
