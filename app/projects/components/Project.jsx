"use client";
import { useState } from "react";
import { motion } from "motion/react";

import Projects from "@/json/data.json";
import ProjectCard from "./project-card";

export default function Project() {
  const category = {
    1: "Landing Page",
    2: "Full Stack",
    9: "Other",
  };
  const [activeCategory, setActiveCategory] = useState(1);

  const projects = Projects.Projects.filter((item) => item.show === true);

  return (
    <>
      <div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <div className="flex justify-center items-center flex-col my-5 self-start">
          <motion.h1
            className="text-3xl font-bold mt-3"
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.7,
              type: "spring",
            }}
          >
            Other Projects
          </motion.h1>
        </div>
      </div>

      {/* choose category */}
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          type: "spring",
        }}
        className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 "
      >
        {Object.keys(category).map((key, index) => (
          <button
            key={index}
            className={`px-3 md:px-4 py-2 rounded-2xl cursor-pointer transition-colors duration-200 border focus:outline-none focus:ring-2 focus:ring-slate-300 ${
              activeCategory === key
                ? "bg-neutral-200 text-neutral-900 border-neutral-300 hover:bg-neutral-300"
                : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100"
            }`}
            onClick={() => setActiveCategory(key)}
          >
            {category[key]}
          </button>
        ))}
      </motion.div>

      {/* projects */}
      <div className="w-screen mx-auto container py-4 gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            activeCategory={activeCategory}
          />
        ))}
      </div>
    </>
  );
}
