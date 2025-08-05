"use client";
import { HeroParallax } from "@/components/Parallax";
import React from "react";

import Project1 from "@/public/images/ecommerce1.png";

export function HeroProject() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Resume Analyzer with Claude 4 Sonnet",
    link: "https://ai-project-analyzer.vercel.app/upload",
    thumbnail: Project1,
  },
];
