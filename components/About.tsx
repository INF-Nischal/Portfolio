"use client";

import React from "react";
import { usePageContext } from "@/store/PageProvider";
import Image from "next/image";
import profile from "../public/images/profile.jpg";
import { FaCode, FaKeyboard, FaLaptop } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="about"
      ref={usePageContext().about}
      className="bg-white py-24 flex justify-center"
    >
      <div className="w-full md:w-[90%] lg:w-[40%] flex flex-col items-center gap-6">
        <h2 className="uppercase text-4xl font-light">A little about me</h2>
        <Image
          src={profile}
          alt="profile"
          width={180}
          height={180}
          className="object-cover rounded-full overflow-hidden"
        />
        <p className="text-center px-4 lg:p-0">
          Hi! I&apos;m Nischal Bista, a web developer with a strong focus on
          front-end development and creating functional, robust systems.
          Currently, I&apos;m in my final year of the Bachelor of Computer
          Applications (BCA) program at HSM College. My goal is to pursue a
          career where I can leverage my skills to design and build dependable
          software solutions that deliver impactful and seamless user
          experiences.
        </p>
        <div className="w-full flex flex-col items-center gap-6 bg-gray-300 p-6">
          <h3>TL;DR? Self Proclamations:</h3>
          <div className="w-full flex justify-around">
            <div className="flex flex-col items-center gap-2">
              <FaLaptop className="text-[64px]" />
              <p>Designer</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaCode className="text-[64px]" />
              <p>Web Developer</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaKeyboard className="text-[64px]" />
              <p>---</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
