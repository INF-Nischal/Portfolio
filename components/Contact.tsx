"use client";

import { usePageContext } from "@/store/PageProvider";
import React, { useRef, useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa6";
import ContactForm from "./forms/ContactForm";
import { AnimatePresence, motion, useInView } from "framer-motion";

const Contact = () => {
  const contactRef = useRef(null);

  const isInView = useInView(contactRef, {
    once: true,
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFormModal = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <section id="contact" ref={usePageContext().contact} className="bg-white ">
      <div ref={contactRef} className="flex flex-col items-center gap-8 py-24">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaRegPaperPlane className="text-[72px]" />
        </motion.div>
        <motion.h2
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 0.8 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="uppercase text-3xl font-light"
        >
          Get in Touch!
        </motion.h2>
        <motion.p
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[30%] text-center"
        >
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </motion.p>
        <motion.button
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover="hover"
          whileTap="tap"
          variants={buttonVariants}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 400,
            damping: 10,
          }}
          className="w-[136px] h-[48px] text-center font-light border-2 border-black"
          onClick={handleFormModal}
        >
          Say Hello
        </motion.button>

        <AnimatePresence>
          {isOpen && <ContactForm handleModal={handleFormModal} />}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
