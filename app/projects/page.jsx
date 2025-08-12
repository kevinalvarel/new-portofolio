import React from "react";
import { HeroProject } from "./components/Hero";
import Highlight from "./components/Highlight";
import { Work } from "./components/Work";

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
