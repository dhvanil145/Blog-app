"use client";

import About from "@/components/section/About";
import Hero from "@/components/section/Hero";
import InfoPage from "@/components/section/InfoPage";
import Services from "@/components/section/Services";



const Home = () => {

  return (
    <>
      
      <main >
        <Hero />
        <InfoPage />
        <Services />
        <About />
      </main>
      
    </>
  );
};

export default Home;
