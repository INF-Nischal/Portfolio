"use client";

import { usePageContext } from "@/store/PageProvider";
import React, { useRef } from "react";
import { FaComputer, FaLaptop } from "react-icons/fa6";
import PassionCard from "./cards/PassionCard";
import { motion, useInView } from "framer-motion";

const passions = [
  {
    id: 1,
    icon: <FaLaptop />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae ex fuga repellat autem, quibusdam amet asperiores labore natus fugiat architecto at animi vitae quos explicabo aliquid delectus vel. Autem!",
  },
  {
    id: 2,
    icon: <FaComputer />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae ex fuga repellat autem, quibusdam amet asperiores labore natus fugiat architecto at animi vitae quos explicabo aliquid delectus vel. Autem!",
  },
  {
    id: 3,
    icon: <FaComputer />,
    title: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repudiandae ex fuga repellat autem, quibusdam amet asperiores labore natus fugiat architecto at animi vitae quos explicabo aliquid delectus vel. Autem!",
  },
];

const Passion = () => {
  const passionRef = useRef(null);

  const isInView = useInView(passionRef, {
    once: true,
    margin: "-200px",
  });

  return (
    <section
      id="passion"
      ref={usePageContext().passion}
      className="section_layout bg-white"
    >
      <div ref={passionRef} className="py-24 flex flex-col items-center gap-16">
        <motion.h2
          initial={{
            y: 30,
            opacity: 0,
          }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="heading-2 font-light"
        >
          What I do
        </motion.h2>
        <div className="grid grid-cols-1 md:girid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-16">
          {passions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                y: 30,
                opacity: 0,
              }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.8 + index * 0.3,
              }}
            >
              <PassionCard
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passion;
