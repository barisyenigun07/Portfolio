"use client";

import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import NavBar from "@/components/sections/NavBar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

import { motion } from "framer-motion";
import SplitText from "@/components/react-bits/SplitText";
import DarkVeil from "@/components/react-bits/DarkVeil";
import Aurora from "@/components/react-bits/Aurora";
import TextType from "@/components/react-bits/TextType";
import Hero from "@/components/sections/Hero";


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export default function Home() {
  //from-indigo-600 via-blue-400 to-green-500
  return (
    <div className="min-h-screen bg-purple-600">
      <div className="flex flex-col justify-center items-center">
        <DarkVeil className="w-full min-h-screen flex flex-col justify-center items-center">
          <NavBar/>
          <Hero/>
        </DarkVeil>

        <div className="relative w-full min-h-screen overflow-hidden bg-[#0D0716]">
          <Aurora colorStops={['#6A0DAD', '#3E6FE0', '#00FFF7']}/>
          <div className="absolute inset-0 flex items-center justify-center">
            <About/>
          </div>
        </div>
        
        {/*<Aurora>
          <div className="flex items-center justify-center py-24">
            <About />
          </div>
        </Aurora>*/}
        {/*<SplitText
          text="Projects"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />*/}
        <Experience/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
    </div>
  );
}
