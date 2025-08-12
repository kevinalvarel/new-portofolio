"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/Canvas";
import { IconBrandReact } from "@tabler/icons-react";

export function Work() {
  return (
    <>
      <motion.div
        className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <h1 className="text-3xl font-bold mt-3">What i do?</h1>
        </div>
      </motion.div>
      <motion.div
        className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-3 mx-auto px-8"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card
          title="I built responsive web applications"
          icon={<IconBrandReact />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-white"
            colors={[
              [16, 185, 129], // emerald-500
              [52, 211, 153], // emerald-400
            ]}
            dotSize={2}
            showGradient={false}
          />
        </Card>
        <Card
          title="I write clean, maintainable code"
          icon={<IconBrandReact />}
        >
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-white"
            colors={[
              [236, 72, 153], // fuchsia-500
              [232, 121, 249], // fuchsia-400
            ]}
            dotSize={2.5}
            showGradient={false}
          />
        </Card>
        <Card title="For me UX is my priority" icon={<IconBrandReact />}>
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-white"
            colors={[
              [56, 189, 248], // sky-400
              [125, 211, 252], // sky-300
            ]}
            dotSize={2}
            showGradient={false}
          />
        </Card>
      </motion.div>
    </>
  );
}

const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border group/canvas-card flex items-center justify-center border-neutral-200 bg-white rounded-xl max-w-sm w-full mx-auto p-4 relative h-[30rem] shadow-sm"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-neutral-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-neutral-300" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-neutral-300" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-neutral-300" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-neutral-900 text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
