import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Achievements = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const allCertification = Object.entries(items)
    .sort(([a], [b]) => parseInt(b) - parseInt(a))
    .flatMap(([year, certification]) =>
      certification.map((certification) => ({ ...certification, year }))
    );

  const visibleCertification = isExpanded
    ? allCertification
    : allCertification.slice(0, 6);
  const hasMoreCertification = allCertification.length > 6;

  return (
    <motion.div
      className="flex flex-col justify-start px-5 md:px-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h2 className="font-semibold text-xl mt-7">Certification</h2>
      <p className="text-md font-normal mb-3 md:mb-6">
        Some of my certification and Badge during my study.
      </p>

      <div className="relative">
        <div className="space-y-4">
          <AnimatePresence>
            {visibleCertification.map((certification, index) => (
              <motion.div
                key={`${certification.year}-${index}`}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {index === 0 ||
                visibleCertification[index - 1]?.year !== certification.year ? (
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-gray-600">
                        {certification.year}
                      </span>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                ) : null}

                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg hover:bg-white/30 transition-all duration-300 hover:shadow-xl grayscale hover:grayscale-0">
                  <div className="flex items-center gap-4">
                    <div
                      className={`aspect-square w-10 rounded-full bg-gradient-to-r ${certification.color} flex items-center justify-center text-primary-foreground transition-all duration-300`}
                    >
                      <span className="text-white text-lg">
                        {certification.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{certification.title}</h3>
                      <p className="text-sm">{certification.subtitle}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        {certification.date}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!isExpanded && hasMoreCertification && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-stale-300 via-stale/70 to-transparent pointer-events-none"></div>
        )}

        {hasMoreCertification && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
            >
              <span>
                {isExpanded
                  ? `Show Less`
                  : `Show ${allCertification.length - 4} More`}
              </span>
              <span className="text-xs">{isExpanded ? "▲" : "▼"}</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Achievements;
