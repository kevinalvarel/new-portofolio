"use client";
import React from "react";
import { TimelineAbout } from "./components/TimelineAbout";
import Intro from "./components/Intro";
import Skill from "./components/Skill";

const page = () => {
  return (
    <main className="overflow-hidden py-6 md:py-16 mx-auto">
      <Intro />
      <TimelineAbout />
      <Skill />
    </main>
  );
};

export default page;
