import React from "react";
import { HeroProject } from "./components/Hero";
import Highlight from "./components/Highlight";
import { Work } from "./components/Work";
import Project from "./components/Project";

const Page = () => {
  return (
    <>
      <HeroProject />
      <Highlight />
      <Work />
    </>
  );
};

export default Page;
