import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

function Title() {
  return (
    <div className="mt-10 sm:mt-20 flex flex-col justify-start items-center w-full pl-10 md:pl-32 ">
      <div className="flex justify-center items-center flex-col my-5 self-start px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl font-bold mt-3">Skills</h1>
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="mt-3 flex flex-col justify-start items-center w-full pl-10 md:pl-32 ">
      <div className="flex justify-center items-center flex-col self-start px-4 md:px-8 lg:px-10">
        <p className="text-lg text-neutral-600">
          A showcase of my skills and expertise in various technologies and
          programming languages.
        </p>
      </div>
    </div>
  );
}

const Skill = () => {
  return (
    <>
      <Title />
      <Description />
      <div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="flex justify-center md:items-start items-center flex-col mb-5"
        >
          <Image
            src="https://skillicons.dev/icons?i=bootstrap,cpp,debian,express,figma,github,git,html,css,js,netlify,nextjs,nodejs,react,supabase,ubuntu,vercel,vscode,vite,wordpress&theme=light&perline=8"
            alt="My Skills"
            className="relative w-[98%] h-[98%] md:w-full md:h-full max-w-3xl py-10"
            width={800}
            height={800}
            loading="lazy"
          />
        </motion.div>
        <motion.div
          className="flex justify-center items-start flex-col mb-5 md:px-10"
          initial={{
            opacity: 0,
            x: -200,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.3,

            type: "spring",
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider mb-3">
            Tech Stack
          </h2>
          <p className="text-gray-600 text-justify title text-lg md:text-xl">
            Throughout my journey as a{" "}
            <span className="font-bold">Web Developer</span>, I&apos;ve had
            hands-on experience with a wide range of modern technologies. From
            building responsive front-end interfaces to managing robust back-end
            systems, I strive to choose the right tools for the right job.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Skill;
