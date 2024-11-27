"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";

const Passion = () => {
  return (
    <section
      id="passion"
      ref={usePageContext().passion}
      className="h-[100vh] bg-white"
    >
      Passion
    </section>
  );
};

export default Passion;
