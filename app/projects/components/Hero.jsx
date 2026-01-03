"use client";
import { HeroParallax } from "@/components/Parallax";

import Ecommerce1 from "@/public/images/project/Ecommerce/ecommerce1.png";
import Ecommerce2 from "@/public/images/project/Ecommerce/ecommerce2.png";
import Ecommerce3 from "@/public/images/project/Ecommerce/ecommerce3.png";
import Ecommerce4 from "@/public/images/project/Ecommerce/ecommerce4.png";

import Coffeshop1 from "@/public/images/project/Coffeeshop/Kopi1.png";
import Coffeshop2 from "@/public/images/project/Coffeeshop/Kopi2.png";
import Coffeshop3 from "@/public/images/project/Coffeeshop/Kopi3.png";

import Portoblog1 from "@/public/images/project/Portoblog/Portoblog1.png";
import Portoblog2 from "@/public/images/project/Portoblog/Portoblog2.png";
import Portoblog3 from "@/public/images/project/Portoblog/Portoblog3.png";
import Portoblog4 from "@/public/images/project/Portoblog/Portoblog4.png";
import Portoblog5 from "@/public/images/project/Portoblog/Portoblog5.png";

export function HeroProject() {
  return (
    <div className="overflow-x-hidden">
      <HeroParallax products={products} />;
    </div>
  );
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
  {
    id: 5,
    title: "Static Landing Page 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop1,
  },
  {
    id: 6,
    title: "Static Landing Page 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop1,
  },
  {
    id: 7,
    title: "Static Landing Page 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop2,
  },
  {
    id: 8,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop3,
  },
  {
    id: 9,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop2,
  },
  {
    id: 10,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Coffeshop1,
  },
  {
    id: 11,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Portoblog1,
  },
  {
    id: 12,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Portoblog2,
  },
  {
    id: 13,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Portoblog3,
  },
  {
    id: 14,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Portoblog4,
  },
  {
    id: 15,
    title: "Static Landing Page 4",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Portoblog5,
  },
];
