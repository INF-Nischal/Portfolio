"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      ref={usePageContext().contact}
      className="bg-white flex flex-col items-center gap-8 py-24"
    >
      <FaRegPaperPlane className="text-[72px]" />
      <h2 className="uppercase text-3xl font-light">Get in Touch!</h2>
      <p className="w-[30%] text-center">
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <button className="w-[136px] h-[48px] text-center font-light border-2 border-black">
        Say Hello
      </button>
    </section>
  );
};

export default Contact;
