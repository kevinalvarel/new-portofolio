"use client";
import { motion } from "motion/react";
import Image from "next/image";

import Pelajarin1 from "@/public/images/Pelajarin1.png";
import Pelajarin2 from "@/public/images/Pelajarin2.png";
import Pelajarin3 from "@/public/images/Pelajarin3.png";

export default function Highlight() {
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full pl-10 md:pl-32 overflow-x-hidden">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <h1 className="text-3xl font-bold mt-3">Highlight</h1>
        </div>
      </div>
      <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 overflow-x-hidden">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-40 left-10 h-[40%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-125 z-10 hover:z-20">
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
                  src={Pelajarin1}
                  alt="Resumize Project"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  className="rat"
                />
              </motion.div>
            </div>
            <div className="absolute top-8 -right-8 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-125 hover:z-20">
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
                  src={Pelajarin2}
                  alt="Resumize Project"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  objectPosition="0% 0%"
                />
              </motion.div>
            </div>

            <div className="absolute bottom-60 left-90 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-125 z-10 hover:z-20">
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
                  src={Pelajarin3}
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
            Dipelajarin - Code Editor for Learning
          </h2>
          <p className="text-gray-600 text-justify title text-lg">
            Dipelajarin is an innovative code editor designed specifically for
            learners. It offers a user-friendly interface with features that
            facilitate coding education, such as real-time syntax highlighting,
            code completion, and collaborative coding environments. Whether
            you're a beginner or an experienced coder looking to enhance your
            skills, Dipelajarin provides the tools you need to learn and grow in
            the world of programming.
          </p>{" "}
        </motion.div>
      </div>
    </>
  );
}
