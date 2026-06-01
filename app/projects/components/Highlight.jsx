"use client";
import { motion } from "motion/react";
import Image from "next/image";

import Kaloriku1 from "@/public/images/kaloriku.png";
import Kaloriku2 from "@/public/images/kaloriku2.png";
import Kaloriku3 from "@/public/images/kaloriku3.png";
import Stack from "@/components/Stack";

export default function Highlight() {
  const images = [Kaloriku1, Kaloriku2, Kaloriku3];

  return (
    <>
      <div className="flex flex-col justify-start items-center w-full pl-10 md:pl-32 overflow-x-hidden">
        <div className="flex justify-center items-center flex-col my-5 self-start ">
          <h1 className="text-3xl font-bold mt-3">Highlight</h1>
        </div>
      </div>
      <div className="relative w-full mx-auto container gap-12 md:gap-16 px-10 grid grid-cols-1 md:grid-cols-2 my-10 md:my-28 items-center">
        <div className="relative flex justify-center items-center w-full aspect-square max-w-[320px] sm:max-w-[400px] md:max-w-[450px] mx-auto mb-10 md:mb-0">
          <Stack
            sensitivity={200}
            randomRotation={true}
            cards={images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                width={500}
                height={500}
                className="w-full h-full object-cover pointer-events-none"
              />
            ))}
            autoplayDelay={3000}
            sendToBackOnClick={true}
          />
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
          }}>
          <h2 className="text-2xl font-bold tracking-wider mb-3">KaloriKU</h2>
          <p className="text-gray-600 text-justify title text-lg">
            Kaloriku it's a calorie tracking app that helps users monitor their
            daily caloric intake and expenditure. It provides a user-friendly
            interface for logging meals, snacks, and physical activities,
            allowing users to set personalized goals and track their progress
            towards a healthier lifestyle. With features like barcode scanning,
            meal suggestions, and progress reports, Kaloriku empowers users to
            make informed decisions about their nutrition and fitness journey.
          </p>{" "}
        </motion.div>
      </div>
    </>
  );
}
