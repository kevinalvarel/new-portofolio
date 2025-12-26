import Pic1 from "@/public/images/about/Education/tools.jpg";
import Pic2 from "@/public/images/about/Education/code.jpg";

import Pic3 from "@/public/images/about/Education/gsa1.jpg";
import Pic4 from "@/public/images/about/Education/gsa2.jpg";
import Pic5 from "@/public/images/about/Education/gsa3.jpg";

import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <motion.div
      className="px-5"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="font-medium text-lg mb-4">2024 - 2028</div>
      <div>
        <h2 className="font-semibold text-xl">Universitas Al-Khairiyah</h2>
        <h3 className="text-md font-normal mb-3">
          S1 Teknik Informatika | Computer Science
        </h3>
        <div className="gap-4 mb-4 flex items-stretch md:h-[200px] xl:h-[300px]">
          {[Pic2, Pic1].map((src, index) => (
            <div
              key={index}
              className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group"
            >
              <Image
                src={src}
                width={400}
                height={225}
                alt="University"
                className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-600 text-justify title text-lg">
            Aspiring to become a professional Web Developer, I&apos;m currently
            pursuing my Bachelor&apos;s degree in{" "}
            <span className="text-black font-medium">Computer Science</span> at{" "}
            <span className="text-black font-medium">
              Universitas Al-Khairiyah
            </span>
            . My journey in tech is driven by curiosity and creativity combining
            web development.
            <br />
            <br />I am passionate about solving real-world problems through
            code, especially at the intersection of{" "}
            <span className="text-black font-medium">Web</span> and{" "}
            <span className="text-black font-medium">Mobile Development</span>.
            Constantly learning, building, and collaborating I&apos;m excited to
            keep growing and contributing to the evolving tech landscape.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4 text-sm justify-start">
          <div className="bg-neutral-300 text-black px-2 py-1 rounded-2xl hover:bg-neutral-400 transition-all duration-300">
            GPA: 3.9
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-right">
          <h2 className="font-semibold text-xl">Google Student Ambassador</h2>
          <h3 className="text-md font-normal mb-3">2025 - Present</h3>
        </div>
        <div className="gap-4 mb-4 flex items-stretch md:h-[200px] xl:h-[300px]">
          {[Pic3, Pic5, Pic4].map((src, index) => (
            <div
              key={index}
              className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[2] group"
            >
              <Image
                src={src}
                width={400}
                height={225}
                alt="University"
                className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-600 text-justify title text-lg">
            As a Google Student Ambassador, I actively talk about Google
            technologies and initiatives on campus, fostering a community of
            innovation and collaboration among students.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
