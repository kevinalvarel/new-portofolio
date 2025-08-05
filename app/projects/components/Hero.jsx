"use client";
import { HeroParallax } from "@/components/Parallax";
import React from "react";

import Ecommerce1 from "@/public/images/ecommerce1.png";
import Ecommerce2 from "@/public/images/ecommerce2.png";
import Ecommerce3 from "@/public/images/ecommerce3.png";
import Ecommerce4 from "@/public/images/ecommerce4.png";

export function HeroProject() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    id: 1,
    title: "Static Landing Page 1",
    link: "https://epocaid.netlify.app/",
    thumbnail: Ecommerce1,
  },
  {
    id: 2,
    title: "Static Landing Page 2",
    link: "https://epocaid.netlify.app/",
    thumbnail: Ecommerce2,
  },
  {
    id: 3,
    title: "Static Landing Page 3",
    link: "https://epocaid.netlify.app/",
    thumbnail: Ecommerce3,
  },
  {
    id: 4,
    title: "Static Landing Page 4",
    link: "https://epocaid.netlify.app/",
    thumbnail: Ecommerce4,
  },
];
