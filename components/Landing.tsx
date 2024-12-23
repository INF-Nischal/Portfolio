"use client";

import Image from "next/image";
import { usePageContext } from "@/store/PageProvider";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Landing = () => {
  const { about } = usePageContext();

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="landing" className="overflow-hidden">
      <Image
        src="/images/home-background.jpg"
        alt="background-image"
        width={1440}
        height={720}
        className="fixed inset-0 h-[100vh] w-[100vw] object-cover -z-[999]"
      />
      <section className="section_layout min-h-[100vh] flex flex-col bg-black/60">
        <div className="h-[70vh] flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6 transition-all duration-200">
          <motion.h2
            initial={{
              y: "-50px",
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
            }}
            className="heading-2 text-white font-light"
          >
            Hi, I&apos;m Nischal Bista
          </motion.h2>
          <motion.p
            initial={{
              y: "50px",
              opacity: 0,
            }}
            animate={{
              y: "0px",
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 },
            }}
            className="paragraph text-white font-light"
          >
            Web Developer &amp; Gaming Enthusiast
          </motion.p>
        </div>
        <div className="h-[30vh] flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-white"
            onClick={() => scrollToSection(about)}
          >
            <FaAngleDown className="text-[32px] text-slate-500 hover:text-white" />
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
