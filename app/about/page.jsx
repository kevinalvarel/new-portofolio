"use client";
import React from "react";
import { TimelineAbout } from "./components/TimelineAbout";
import Intro from "./components/Intro";

const page = () => {
  return (
    <main className="overflow-hidden py-6 md:py-16 mx-auto">
      <Intro />
      <TimelineAbout />
    </main>
  );
};

export default page;
