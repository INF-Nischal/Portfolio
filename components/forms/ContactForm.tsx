"use client";

import React, { useState } from "react";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";

const ContactForm = ({ handleModal }: { handleModal: () => void }) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name: fullName,
      email: email,
      message: message,
    });
  };

  return (
    <motion.div
      key={"contact-form"}
      initial={{ y: -400, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 1,
      }}
      exit={{ y: -400, opacity: 0 }}
      className="fixed top-4 bg-white w-full md:w-[70%] lg:w-[50%] px-8 pt-8 pb-16 flex flex-col gap-8 z-[99999] rounded-lg"
    >
      <div className="flex justify-end">
        <button onClick={handleModal}>
          <FaX />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col gap-4 px-8 py-4 border rounded-xl"
      >
        <h2 className="uppercase text-3xl font-light text-center pb-4">
          Contact
        </h2>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFullName(e.target.value)
            }
            className="outline-none border-2 px-3 py-1.5 rounded-lg"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="outline-none border-2 px-3 py-1.5 rounded-lg"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            className="min-h-[128px] resize-none outline-none border-2 px-3 py-1.5 rounded-lg"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="py-2 bg-blue-400 rounded-lg text-white mx-auto px-8"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
