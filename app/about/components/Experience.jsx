import { motion } from "framer-motion";

import { IconCertificate, IconIdBadge } from "@tabler/icons-react";
import Education from "./ui/Education";
import Achievements from "./ui/Achievements";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const certificationByYear = {
    2026: [
      {
        icon: <IconIdBadge />,
        title: "Google Cloud Course Badge",
        subtitle: "Manage Data Models in Looker",
        date: "2025",
        color: "from-sky-400 to-blue-500",
      },
    ],
    2025: [
      {
        icon: <IconIdBadge />,
        title: "Google Cloud Skill Badge",
        subtitle: "Manage Data Models in Looker",
        date: "2025",
        color: "from-sky-400 to-blue-500",
      },
      {
        icon: <IconIdBadge />,
        title: "Google Cloud Badge",
        subtitle: "Analyze Speech and Language with Google APIs Skill Badge",
        date: "2025",
        color: "from-sky-400 to-blue-500",
      },
      {
        icon: <IconIdBadge />,
        title: "Google Cloud Badge",
        subtitle:
          "Build Real World AI Applications with Gemini and Imagen Skill Badge",
        date: "2025",
        color: "from-sky-400 to-blue-500",
      },
      {
        icon: <IconIdBadge />,
        title: "IBM SkillsBuild Badge",
        subtitle: "Code Generation and Optimization Using IBM Granite",
        date: "2025",
        color: "from-sky-400 to-blue-500",
      },
      {
        icon: <IconCertificate />,
        title: "Dicoding Certification",
        subtitle: "Cloud dan Gen AI di AWS",
        date: "2025",
        color: "from-yellow-400 to-orange-500",
      },
      {
        icon: <IconCertificate />,
        title: "Dicoding Certification",
        subtitle: "Pemrograman Javascript Menengah",
        date: "2025",
        color: "from-yellow-400 to-orange-500",
      },
    ],
    2024: [
      {
        icon: <IconCertificate />,
        title: "Google Cloud",
        subtitle: "Classify Images with TensorFlow on Google Cloud",
        date: "2024",
        color: "from-sky-400 to-blue-500",
      },
      {
        icon: <IconCertificate />,
        title: "Google Cloud",
        subtitle: "Build LookML Objects in Looker Skill Badge",
        date: "2024",
        color: "from-sky-400 to-blue-500",
      },
    ],
  };

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Experience & Education
          </h1>
          <p className="text-neutral-600 max-w-[800px] mx-auto">
            Get to know more about my educational background.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Achievements Left */}
          <Achievements items={certificationByYear} />

          {/* Education Left */}
          <Education />
        </div>
      </section>
    </Wrapper>
  );
}
