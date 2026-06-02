"use client";

import About from "@/components/ui/About";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import InfoPage from "@/components/ui/InfoPage";

import Nav from "@/components/ui/Nav";
import Services from "@/components/ui/Services";
import { useEffect, useState } from "react";

const Home = () => {

  return (
    <>
      
      <main className="mt-16 max-w-7xl mx-auto">
        <Hero />
        <InfoPage />
        <Services />
        <About />
      </main>
      
    </>
  );
};

export default Home;
