"use client";
import React from "react";
import { TimelineAbout } from "./components/TimelineAbout";
import Intro from "./components/Intro";
import Techstack from "./components/Techstack";
import Education from "./components/Education";

const page = () => {
  return (
    <main className="overflow-hidden py-6 md:py-16 mx-auto">
      <Intro />
      <TimelineAbout />
      <Techstack />
      <Education />
    </main>
  );
};

export default page;
