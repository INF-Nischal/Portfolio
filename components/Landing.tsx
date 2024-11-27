"use client";

import React from "react";
import Image from "next/image";
import background from "../public/images/home-background.jpg";
import { usePageContext } from "@/store/PageProvider";

const Landing = () => {
  const { about } = usePageContext();

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="landing" className="overflow-hidden">
      <Image
        src={background}
        alt="background-image"
        width={0}
        height={0}
        className="fixed inset-0 h-[100vh] w-[100vw] object-cover -z-[999]"
      />
      <div className="h-[100vh] w-[100vw] flex flex-col bg-black/60">
        <div className="h-[70%] flex flex-col justify-center items-center gap-6">
          <h2 className="uppercase text-5xl text-white font-light">
            Hi, I'm Nischal Bista
          </h2>
          <p className="text-white text-md font-light">
            Web Developer and Gaming Enthusiast
          </p>
        </div>
        <div className="h-[30%] flex justify-center">
          <button className="text-white" onClick={() => scrollToSection(about)}>
            Go to!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
