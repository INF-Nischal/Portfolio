"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";

const Work = () => {
  return (
    <section
      id="work"
      ref={usePageContext().work}
      className="h-[100vh] bg-white"
    >
      Work
    </section>
  );
};

export default Work;
