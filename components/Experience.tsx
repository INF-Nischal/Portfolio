"use client";

import { technologies, works } from "@/constants";
import { usePageContext } from "@/store/PageProvider";
import React from "react";
import ExperienceCard from "./cards/ExperienceCard";

const Experience = () => {
  return (
    <section id="experience" ref={usePageContext().experience}>
      <div className="bg-white flex flex-col items-center gap-12 py-24">
        <h2 className="uppercase text-4xl font-light">Experience</h2>
        <p className="w-full md:w-[90%] lg:w-[40%] text-center">
          I&apos;ve been doing web development for about 2 years now, and
          I&apos;m always eager to learn more in this fast paced industry.
        </p>
        <div className="flex flex-col gap-8 md:flex-row lg:gap-64 px-32">
          <div className="flex flex-col gap-4">
            <h3 className="uppercase text-lg">
              Some technology I&apos;ve worked with:
            </h3>
            <div className="grid grid-cols-5 gap-x-8 gap-y-6">
              {technologies.map((item) => (
                <ExperienceCard
                  key={item.id}
                  id={item.id}
                  tooltip={item.tooltip}
                  url={item.url}
                  width={72}
                  height={72}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="uppercase text-lg">Where I&apos;ve worked:</h3>
            <div className="grid grid-cols-1">
              {works.map((item) => (
                <ExperienceCard
                  key={item.id}
                  id={item.id}
                  tooltip={item.tooltip}
                  url={item.url}
                  width={142}
                  height={142}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-24 flex flex-col items-center gap-6 bg-black/40 backdrop:blur-0">
        <h2 className="uppercase text-4xl font-light text-white">
          Check out my resume!
        </h2>
        <button className="w-[136px] h-[40px] border text-white font-light">
          Grab a copy
        </button>
      </div>
    </section>
  );
};

export default Experience;
