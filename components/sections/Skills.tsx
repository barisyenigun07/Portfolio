import Image from 'next/image'
import React from 'react'
import LogoLoop from "@/components/react-bits/LogoLoop";

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSpringboot, SiPython, SiNodedotjs, SiSpring } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiSpring />, title: "Spring Framework", href: "https://spring.io/projects/spring-framework" },
  { node: <SiSpringboot/>, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
  { node: <FaJava/>, title: "Java", href: "https://www.java.com/tr/" }
];

const Skills = () => {
  return (
    <div id='skills' className="mt-20">
      <h3 className="text-7xl font-bold text-white mt-20 mb-5">Skills</h3>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={64}
        gap={40}
        pauseOnHover
        scaleOnHover
        ariaLabel="Technology partners"
        width={1249}
      />
    </div>
  )
}

export default Skills