import React from "react";
import { motion } from "framer-motion";
import Aurora from "../react-bits/Aurora";

const About = () => {
  //bg-[#0D0716]
  return (
    <section id="about" className="w-full h-screen flex justify-center items-center overflow-hidden">
        {/* Content */}
          <motion.div
            className="relative w-11/12 md:w-3/5 text-center rounded-2xl bg-black/30 backdrop-blur-md p-8 border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a <span className="text-white font-semibold">Software Engineer</span> with hands-on experience in{" "}
              <span className="text-white font-semibold">test automation</span>,{" "}
              <span className="text-white font-semibold">frontend</span> and{" "}
              <span className="text-white font-semibold">mobile development</span>. <br />
              Proficient in <span className="text-white font-semibold">Java</span>,{" "}
              <span className="text-white font-semibold">Spring Boot</span>,{" "}
              <span className="text-white font-semibold">React</span>, and{" "}
              <span className="text-white font-semibold">React Native</span>, I love
              crafting reliable and user-centric applications.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Currently pursuing a <span className="text-white font-semibold">Master’s in Software Engineering and Data Science</span>,
              I’m committed to deepening my knowledge in modern software architecture and automation systems.
            </p>
          </motion.div>
    </section>
  );
};

export default About;