"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      ref={usePageContext().experience}
      className="h-[100vh] bg-white"
    >
      Experience
    </section>
  );
};

export default Experience;
