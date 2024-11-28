"use client";

import { projects } from "@/constants";
import { usePageContext } from "@/store/PageProvider";
import React from "react";
import WorkCard from "./cards/WorkCard";

const Work = () => {
  return (
    <section
      id="work"
      ref={usePageContext().work}
      className="bg-white flex flex-col items-center gap-12 px-4 py-24 lg:p-24"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="uppercase text-4xl font-light">What I&apos;ve done</h2>
        <p>(more comming soon)</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map((item) => (
          <WorkCard
            key={item.id}
            id={item.id}
            projectThumbnail={item.projectThumbnail}
            projectName={item.projectName}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
