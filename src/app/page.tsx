"use client";

import { Navbar } from "@/components/Navbar";
import { Experience } from "@/pages/Experience";
import { HomePage } from "@/pages/HomePage";
import { Projects } from "@/pages/Projects";
import { Skills } from "@/pages/Skills";

import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<number>(1);

  return (
    <div className="h-screen">
      <Navbar setPage={setPage} />
      <div className="h-full w-full flex justify-center items-center">
        {page === 0 && <HomePage />}
        {page === 1 && <Skills />}
        {page === 2 && <Projects />}
        {page === 3 && <Experience />}
      </div>
    </div>
  );
}
