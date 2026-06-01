'use client'
import About from "@/app/(root)/components/About";
import Hero from "@/app/(root)/components/Hero";
import Project from "@/app/(root)/components/Project";
import Contact from "./components/Contact";
import Footer from "@/components/Footer";

import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Homepage = () => {

  useGSAP(() => {
    let smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: false,
    })

    return () => smoother.kill()
  }, [])

  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">
        <Hero />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Homepage;
