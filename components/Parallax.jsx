"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const [viewport, setViewport] = React.useState({ width: 0, height: 0 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  React.useEffect(() => {
    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const springConfig = { stiffness: 300, damping: 30, bounce: 150 };
  const safeWidth = viewport.width || 1200;
  const safeHeight = viewport.height || 800;
  const translateDistanceX = Math.min(safeWidth * 0.8, 1000);
  const translateStartY = -Math.min(safeHeight * 0.45, 520);
  const translateEndY = Math.min(safeHeight * 0.25, 360);
  const tiltXStart = safeWidth < 640 ? 8 : 15;
  const tiltZStart = safeWidth < 640 ? 8 : 20;

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, translateDistanceX]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -translateDistanceX]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [tiltXStart, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [tiltZStart, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [translateStartY, translateEndY]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="min-h-[180vh] sm:min-h-[200vh] md:min-h-[220vh] lg:min-h-[250vh] py-24 sm:py-32 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 lg:space-x-20 mb-16 sm:mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-16 sm:mb-20 space-x-8 sm:space-x-12 lg:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.id}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-12 lg:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.id}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-10 md:px-8 w-full  left-0 top-0">
      <h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
        Project Space
      </h1>
      <p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
        List of my projects that I have done and{" "}
        <span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
          {" "}
          still on progress
        </span>
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product aspect-video w-[18rem] sm:w-[22rem] lg:w-[30rem] relative shrink-0">
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height={1980}
          width={1080}
          priority
          className="object-cover object-left-top absolute h-full w-full inset-0 grayscale hover:grayscale-0 transition-all ease duration-300"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black/50 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
