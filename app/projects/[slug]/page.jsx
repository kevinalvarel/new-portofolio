"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import jsonData from "@/json/data.json";
import { NotFound } from "next/error";

import Image from "next/image";
import BlurImage from "@/public/images/placeholder/blur.jpg";

function ScrollDownButton() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (
      scrollTop <
      document.documentElement.scrollHeight -
        document.documentElement.clientHeight
    ) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
      setIsAtBottom(true);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setIsAtBottom(false);
    }
  };

  return (
    <div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
      <motion.div
        className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleScroll}
      >
        <span className="text-white text-2xl font-bold">
          {isAtBottom ? "↑" : "↓"}
        </span>
      </motion.div>
    </div>
  );
}

function Page(props) {
  const params = use(props.params);
  const [data, setData] = useState(null);
  useEffect(() => {
    const selectedData = jsonData.Projects.find(
      (item) => item.slug === params.slug
    );
    if (selectedData === undefined) {
      setData("404");
    } else {
      setData(selectedData);
    }
  }, [params.slug]);

  if (data === "404") {
    return (
      <>
        <NotFound />
      </>
    );
  } else if (!data) {
    return (
      <div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
        <div className="min-h-screen flex justify-center items-center w-full">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
            <div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
              <div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
            </div>
            <div className="flex justify-start items-start flex-col mb-5 w-full p-4">
              <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
          <div className="w-full h-auto aspect-video">
            <div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
      <ScrollDownButton />
      <div className="min-h-screen flex justify-center items-center">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 md:mt-0 w-full">
          {/* Project Title Section */}
          <div className="lg:col-span-3 text-center mb-10">
            <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
              Project
            </h2>
            <h1 className="text-5xl md:text-6xl font-medium text-neutral-900 mt-4">
              {data.title}
            </h1>
          </div>

          {/* Left Column - Tech & Year */}
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Technology
              </h2>
              <p className="text-xl font-normal text-neutral-900 mt-2">
                {data.tech.join(", ")}
              </p>
            </div>
            <div>
              <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                Year
              </h2>
              <p className="text-xl font-normal text-neutral-900 mt-2">
                {data.year}
              </p>
            </div>
          </div>

          {/* Center Column - Description */}
          <div className="flex flex-col">
            <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
              Description
            </h2>
            <div className="space-y-4">
              {data.desc.map((desc, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed font-normal text-gray-500"
                >
                  {desc}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col space-y-8">
            {data.preview && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Preview
                </h2>
                <p className="text-xl font-normal text-neutral-900 mt-2">
                  <a
                    href={data.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Live Preview <span className="ml-2">↗</span>
                  </a>
                </p>
              </div>
            )}
            {data.code && (
              <div>
                <h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
                  Source Code
                </h2>
                <p className="text-xl font-normal text-neutral-900 mt-2">
                  <a
                    href={data.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    View on Github <span className="ml-2">⚡</span>
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* images */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.images.map((image, index) => (
            <div key={index} className="w-full">
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                width={1920}
                height={1080}
                blurDataURL={BlurImage.src}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
