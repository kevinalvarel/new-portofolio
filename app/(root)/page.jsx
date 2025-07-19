import About from "@/app/(root)/components/About";
import Hero from "@/app/(root)/components/Hero";
import Project from "@/app/(root)/components/Project";
import Contact from "./components/Contact";

const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Homepage;
