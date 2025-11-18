import React from "react";
import { HeroProject } from "./components/Hero";
import Highlight from "./components/Highlight";
import Project from "./components/Project";

const Page = () => {
  return (
    <>
      <HeroProject />
      <Highlight />
      <Project />
    </>
  );
};

export default Page;
