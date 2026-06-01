"use client";
import React from "react";
import Footer from "@/components/Footer";
import Intro from "./components/Intro";
import Techstack from "./components/Techstack";
import Experience from "./components/Experience";
import { TimelineAbout } from "./components/TimelineAbout";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother)

const Page = () => {

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.3,
      effects: false,
    })

    return () => smoother.kill()
  }, [])

  return (
    <main id="smooth-wrapper" className="overflow-hidden py-6 md:py-16 mx-auto ">
      <div id="smooth-content">
        <Intro />
        <TimelineAbout />
        <Techstack />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
