"use client";
import React from "react";
import Highlight from "./components/Highlight";
import Project from "./components/Project";
import { HeroParallax } from "@/components/Parallax";

export const products = [
  {
    id: 1,
    title: "Static Landing Page 1",
    link: "https://epocaid.netlify.app/",
    thumbnail: "/images/project/Ecommerce/ecommerce1.png",
  },
  {
    id: 2,
    title: "Static Landing Page 2",
    link: "https://epocaid.netlify.app/",
    thumbnail: "/images/project/Ecommerce/ecommerce2.png",
  },
  {
    id: 3,
    title: "Static Landing Page 3",
    link: "https://epocaid.netlify.app/",
    thumbnail: "/images/project/Ecommerce/ecommerce3.png",
  },
  {
    id: 4,
    title: "Static Landing Page 4",
    link: "https://epocaid.netlify.app/",
    thumbnail: "/images/project/Ecommerce/ecommerce4.png",
  },
  {
    id: 5,
    title: "School Profile Website",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/SMKS/smks17-1.png",
  },
  {
    id: 6,
    title: "School Profile Website 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/SMKS/smks17-2.png",
  },
  {
    id: 7,
    title: "School Profile Website 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/SMKS/smks17-3.png",
  },
  {
    id: 8,
    title: "MerdekAI",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/Merdekai/merdekai-1.png",
  },
  {
    id: 9,
    title: "MerdekAI 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/Merdekai/merdekai-2.png",
  },
  {
    id: 10,
    title: "MerdekAI 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/Merdekai/merdekai-3.png",
  },
  {
    id: 11,
    title: "Dipelajarin - Code Editor 1",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/CodeEditor/Pelajarin1.png",
  },
  {
    id: 12,
    title: "Dipelajarin - Code Editor 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/CodeEditor/Pelajarin2.png",
  },
  {
    id: 13,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/CodeEditor/Pelajarin3.png",
  },
  {
    id: 14,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/DcnUnival/dcn1.png",
  },
  {
    id: 15,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/DcnUnival/dcn2.png",
  },
  {
    id: 16,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: "/images/project/DcnUnival/dcn3.png",
  },
];

const Page = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroParallax products={products} />;
      <Highlight />
      <Project />
    </div>
  );
};

export default Page;
