import React from 'react'
import TextType from '../react-bits/TextType'

function Hero() {
  return (
    <section className="w-full h-screen relative flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
            Hi! I&rsquo;m Barış Yenigün.
        </h1>
        <TextType
            text={["Computer Engineer", "Software Developer", "Software Test Engineer"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="|"
            cursorClassName="text-white"
            className="text-3xl md:text-5xl text-white mt-4"
        />
        <div className="flex gap-4 mt-6">
            <a
                href="/BarışYenigünCV.pdf"
                download
                className="bg-white text-black rounded-full py-2 px-5 font-medium hover:scale-105 transition-all"
            >
                Download CV
            </a>
            <a
                href="#projects"
                className="text-white border-white border rounded-full py-2 px-5 font-medium hover:bg-white hover:text-black transition-all"
            >
                See My Projects
            </a>
        </div>
        <div className="mt-10 animate-bounce text-white text-sm">
        ↓ Scroll down to explore
        </div>
    </section>
  )
}

export default Hero