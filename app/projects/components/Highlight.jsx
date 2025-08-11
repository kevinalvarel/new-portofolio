"use client";
import { motion } from "motion/react";
import Image from "next/image";

import Intervyou1 from "@/public/images/Kopi1.png";
import Intervyou2 from "@/public/images/Kopi1.png";
import Intervyou3 from "@/public/images/Kopi1.png";

export default function Highlight() {
  return (
    <div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
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
                src={Intervyou1}
                alt="Alvalens"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                className="rat"
              />
            </motion.div>
          </div>
          <div className="absolute top-10 right-28 h-[30%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
                src={Intervyou3}
                alt="Alvalens"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                objectPosition="0% 0%"
              />
            </motion.div>
          </div>
          <div className="absolute bottom-10 md:bottom-26 right-20 h-[35%]  aspect-video grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
              transition={{
                delay: 0.5,
              }}
              className="w-full h-full shadow-lg"
            >
              <Image
                src={Intervyou2}
                alt="Alvalens"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
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
        <h2 className="text-2xl font-bold tracking-wider mb-3">Intervyou AI</h2>
        <p className="text-gray-600 text-justify title text-lg">
          AI Based interview Preparation Website created to help fresh graduates
          and job seekers prepare for interviews and optimize their CV through
          AI-powered features. The website is built using Next.js, TypeScript,
          Tailwind CSS, Shadcn UI, Prisma, and MySQL (TiDB). This website can
          comprehensively analyze the user&apos;s interview performance by
          providing a analysis of the user&apos;s answer, gesture, and material
          recommendation to improve the user&apos;s interview skills.
        </p>{" "}
      </motion.div>
    </div>
  );
}
