"use client";

import React from "react";
import { usePageContext } from "@/store/PageProvider";

const About = () => {
  return (
    <section
      id="about"
      ref={usePageContext().about}
      className="h-[100vh] bg-white"
    >
      About
    </section>
  );
};

export default About;
