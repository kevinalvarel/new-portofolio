import React from "react";

function SkeletonSlug() {
  return (
    <div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10">
      <div className="min-h-screen flex justify-center items-center w-full">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10 md:mt-0 w-full">
          {/* Project Title Section */}
          <div className="lg:col-span-3 text-center mb-10">
            <div className="animate-pulse bg-neutral-300 h-5 w-32 rounded mx-auto mb-4"></div>
            <div className="animate-pulse bg-neutral-300 h-12 md:h-14 w-3/4 rounded mx-auto"></div>
          </div>

          {/* Left Column - Tech & Year */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="animate-pulse bg-neutral-300 h-4 w-28 rounded mb-3"></div>
              <div className="animate-pulse bg-neutral-200 h-6 w-full rounded"></div>
            </div>
            <div>
              <div className="animate-pulse bg-neutral-300 h-4 w-16 rounded mb-3"></div>
              <div className="animate-pulse bg-neutral-200 h-6 w-20 rounded"></div>
            </div>
          </div>

          {/* Center Column - Description */}
          <div className="flex flex-col">
            <div className="animate-pulse bg-neutral-300 h-4 w-32 rounded mb-4"></div>
            <div className="space-y-4">
              <div className="animate-pulse bg-neutral-200 h-5 w-full rounded"></div>
              <div className="animate-pulse bg-neutral-200 h-5 w-full rounded"></div>
              <div className="animate-pulse bg-neutral-200 h-5 w-5/6 rounded"></div>
              <div className="animate-pulse bg-neutral-200 h-5 w-full rounded"></div>
              <div className="animate-pulse bg-neutral-200 h-5 w-3/4 rounded"></div>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="flex flex-col space-y-8">
            <div>
              <div className="animate-pulse bg-neutral-300 h-4 w-24 rounded mb-3"></div>
              <div className="animate-pulse bg-neutral-200 h-6 w-36 rounded"></div>
            </div>
            <div>
              <div className="animate-pulse bg-neutral-300 h-4 w-32 rounded mb-3"></div>
              <div className="animate-pulse bg-neutral-200 h-6 w-40 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Images */}
      <div className="mx-auto w-full max-w-7xl px-5 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-full">
              <div className="animate-pulse bg-neutral-200 w-full aspect-video rounded-lg shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonSlug;
