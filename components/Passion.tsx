"use client";

import { usePageContext } from "@/store/PageProvider";
import React from "react";
import { FaComputer, FaLaptop } from "react-icons/fa6";
import PassionCard from "./cards/PassionCard";

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
  return (
    <section
      id="passion"
      ref={usePageContext().passion}
      className="bg-white py-24 flex flex-col items-center gap-16"
    >
      <h2 className="uppercase text-4xl font-light">What I do</h2>
      <div className="grid grid-cols-1 md:girid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-16 px-32">
        {passions.map((item) => (
          <PassionCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Passion;
