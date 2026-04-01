"use client";
import { HeroParallax } from "@/components/Parallax";

import Ecommerce1 from "@/public/images/project/Ecommerce/ecommerce1.png";
import Ecommerce2 from "@/public/images/project/Ecommerce/ecommerce2.png";
import Ecommerce3 from "@/public/images/project/Ecommerce/ecommerce3.png";
import Ecommerce4 from "@/public/images/project/Ecommerce/ecommerce4.png";

import SMKS1 from "@/public/images/project/SMKS/smks17-1.png";
import SMKS2 from "@/public/images/project/SMKS/smks17-2.png";
import SMKS3 from "@/public/images/project/SMKS/smks17-3.png";

import CodeEditor1 from "@/public/images/project/CodeEditor/Pelajarin1.png";
import CodeEditor2 from "@/public/images/project/CodeEditor/Pelajarin2.png";
import CodeEditor3 from "@/public/images/project/CodeEditor/Pelajarin3.png";

import DcnUnival1 from "@/public/images/project/DcnUnival/dcn1.png";
import DcnUnival2 from "@/public/images/project/DcnUnival/dcn2.png";
import DcnUnival3 from "@/public/images/project/DcnUnival/dcn3.png";

import Merdekai1 from "@/public/images/project/Merdekai/merdekai-1.png";
import Merdekai2 from "@/public/images/project/Merdekai/merdekai-2.png";
import Merdekai3 from "@/public/images/project/Merdekai/merdekai-3.png";

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
    title: "School Profile Website",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: SMKS1,
  },
  {
    id: 6,
    title: "School Profile Website 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: SMKS2,
  },
  {
    id: 7,
    title: "School Profile Website 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: SMKS3,
  },
  {
    id: 8,
    title: "MerdekAI",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Merdekai1,
  },
  {
    id: 9,
    title: "MerdekAI 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Merdekai2,
  },
  {
    id: 10,
    title: "MerdekAI 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: Merdekai3,
  },
  {
    id: 11,
    title: "Dipelajarin - Code Editor 1",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: CodeEditor1,
  },
  {
    id: 12,
    title: "Dipelajarin - Code Editor 2",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: CodeEditor2,
  },
  {
    id: 13,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: CodeEditor3,
  },
  {
    id: 14,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: DcnUnival1,
  },
  {
    id: 15,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: DcnUnival2,
  },
  {
    id: 16,
    title: "Dipelajarin - Code Editor 3",
    link: "https://neggvscoffee.netlify.app/",
    thumbnail: DcnUnival3,
  },
];
