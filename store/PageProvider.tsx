"use client";

import React, { createContext, useContext, useRef } from "react";

interface PageRefs {
  about: React.RefObject<HTMLElement>;
  passion: React.RefObject<HTMLElement>;
  experience: React.RefObject<HTMLElement>;
  work: React.RefObject<HTMLElement>;
  contact: React.RefObject<HTMLElement>;
}

const PageContext = createContext<PageRefs | undefined>(undefined);

const PageProvider = ({ children }: { children: React.ReactNode }) => {
  const aboutRef = useRef<HTMLElement | null>(null);
  const passionRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const workRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const refs = {
    about: aboutRef,
    passion: passionRef,
    experience: experienceRef,
    work: workRef,
    contact: contactRef,
  };

  return <PageContext.Provider value={refs}>{children}</PageContext.Provider>;
};

export const usePageContext = () => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }

  return context;
};

export default PageProvider;
