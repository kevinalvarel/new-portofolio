import { motion } from "motion/react";

import Me1 from "@/public/images/ver.jpg";
import Image from "next/image";

function Title() {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col justify-start items-center w-full pl-10 md:pl-32 ">
      <div className="flex justify-center items-center flex-col my-5 self-start px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl font-bold mt-3">About Me</h1>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <>
      <Title />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="flex justify-center items-start flex-col mb-5 ">
          <div className="images relative w-full  aspect-square">
            <div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
              <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 100 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Kev"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Kev"
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                />
              </motion.div>
            </div>
            <div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
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
                className="w-full h-full"
              >
                <Image
                  src={Me1}
                  alt="Kev"
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
          <h2 className="text-2xl font-bold tracking-wider mb-3">
            Muhammad Kevin Alvarel
          </h2>
          <p className="text-gray-600 text-justify title text-lg">
            Hey there, I&rsquo;m Muhammad Kevin Alvarel, a
            <span className="text-black font-medium">
              {" "}
              passionate Web Developer
            </span>{" "}
            with a growing expertise in I&rsquo;m currently pursuing my degree
            in <span className="text-black font-medium">
              Computer Science
            </span>{" "}
            at{" "}
            <span className="text-black font-medium">
              Universitas Al-Khairiyah
            </span>{" "}
            My work bridges modern web technologies and intelligent systems—from
            building responsive. I stay curious about design and emerging
            technologies. In today&rsquo;s ever-changing digital landscape, I
            believe being a
            <span className="text-black font-medium"> lifelong learner</span> is
            essential. Let&rsquo;s connect and explore the evolving intersection
            of web and AI together!
          </p>
        </motion.div>
      </div>
    </>
  );
}
