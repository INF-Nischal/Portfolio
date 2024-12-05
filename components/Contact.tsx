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
    margin: "-200px",
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleFormModal = () => {
    setIsOpen((prev) => !prev);
  };

  const buttonVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <section
      id="contact"
      ref={usePageContext().contact}
      className="bg-white section_layout"
    >
      <div
        ref={contactRef}
        className="w-full flex flex-col items-center gap-8 py-24"
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <FaRegPaperPlane className="text-[72px]" />
        </motion.div>
        <motion.h2
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 0.8 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          className="heading-2 font-light"
        >
          Get in Touch!
        </motion.h2>
        <motion.p
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1.4 }}
          className="text-center paragraph"
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
            duration: 3,
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
