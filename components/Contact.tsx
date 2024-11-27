"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      ref={usePageContext().contact}
      className="h-[100vh] bg-white"
    >
      Contact
    </section>
  );
};

export default Contact;
