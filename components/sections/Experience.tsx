import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center w-2/3 items-center text-center text-white p-5">
        <h3 className="text-6xl font-bold">Experience</h3>
        <div className="bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5 w-full">
            <a href='https://www.linkedin.com/company/nexarb/' target="_blank" className="text-xl">GenISys A.Ş.</a>
            <p className="text-lg">Jan. 2025 - Jul. 2025</p>
            <p className="mt-3 mb-2">
                Implemented automated UI tests for GUI products of GenISys using Java, SikuliX and JUnit.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: Java, SikuliX, JUnit</p>
        </div>
        <div className="bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5 w-full">
            <a href='https://www.linkedin.com/company/nexarb/' target="_blank" className="text-xl">Trampax</a>
            <p className="text-lg">Sep. 2024 - Dec. 2024</p>
            <p className="mt-3 mb-2">
                Built user interfaces for Trampax mobile application using TypeScript and React Native.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: TypeScript, React Native</p>
        </div>
        <div className="bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5 w-full">
            <a href='https://www.linkedin.com/company/nexarb/' target="_blank" className="text-xl">NexArb</a>
            <p className="text-lg">Nov. 2023 - Aug. 2024</p>
            <p className="mt-3 mb-2">
                Built user interfaces for NexArb web application using TypeScript, Next.js and Tailwind CSS.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: TypeScript, Tailwind CSS, Next.js, Rust, Anchor, Solana</p>
        </div>
        <div className="bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5 w-full">
            <a href='https://www.linkedin.com/company/research-ecosystems/' target="_blank" className="text-xl">Research Ecosystems</a>
            <p className="text-lg">Jul. 2022 - Aug. 2022</p>
            <p className="mt-3 mb-2">
                Implemented unit and integration tests for a Java Spring Boot project. Used several tools like JUnit5, Mockito, Testcontainers, Redis, Docker, PostgreSQL.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: Java, Spring Framework, Spring Boot, JUnit5, Mockito, Redis, PostgreSQL, Testcontainers, Docker</p>
        </div>
    </div>
  )
}

export default Experience