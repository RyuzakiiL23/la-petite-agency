"use client";

import Image from "next/image";
import React from "react";

const HeroStickySection: React.FC = () => {
  return (
    <main className="font-sans">
      <div className="w-full relative">
        {/* First Section - Hero */}
        <section className=" flex flex-col items-center justify-center min-h-screen text-white">
          <div className="flex flex-col items-center gap-4">
            {/* Example heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-[0.8em] text-center">
              That
              <Image
                src="https://cms.thatlot.co.uk/wp-content/uploads/2025/02/ThatLot_Website_Creative_NEW-BALLOONS_01.png"
                alt="title image"
                width={1000}
                height={500}
                priority
                className="inline-block mx-2 align-middle"
              />
              Social Agency.
            </h1>

            {/* Cursor image */}
            <div className="transform -translate-x-[45px] translate-y-[70px]">
              <Image
                src="https://cms.thatlot.co.uk/wp-content/uploads/2024/05/PNG-4.png"
                alt="cursor image"
                width={500}
                height={500}
                className="h-auto w-auto"
              />
            </div>

            {/* Smiley face gif */}
            <div>
              <img
                src="https://cms.thatlot.co.uk/wp-content/uploads/2024/08/smiley_face-2.gif"
                alt="smiley face"
                className="h-20 w-auto"
              />
            </div>
          </div>
        </section>

        {/* Second Section - Sticky */}
        <section className="bg-[#1a1a1a] sticky top-[calc(-2960px+100vh)] -mt-[100px] text-white flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold">Sticky Section</h2>
            <p className="mt-4 text-lg max-w-xl mx-auto">
              This section stays pinned in place while scrolling.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default HeroStickySection;
