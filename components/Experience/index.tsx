import React from 'react'

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col justify-center items-center text-center text-white mt-8">
        <h3 className="text-5xl font-bold">Experience</h3>
        <div className="w-2/3 bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5">
            <a href='https://www.linkedin.com/company/nexarb/' target="_blank" className="text-xl">NexArb</a>
            <p className="text-lg">Nov. 2023 - Still</p>
            <p className="mt-3 mb-2">
                I am participating as a frontend developer in a software project that helps people
                via Blockchain technology. I use TypeScript, Tailwind CSS and Next.js to build user interfaces.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: TypeScript, Tailwind CSS, Next.js, Rust, Anchor, Solana</p>
        </div>
        <div className="w-2/3 bg-white rounded-lg text-slate-700 shadow-lg text-start p-3 mt-5">
            <a href='https://www.linkedin.com/company/research-ecosystems/' target="_blank" className="text-xl">Research Ecosystems</a>
            <p className="text-lg">Jul. 2022 - Aug. 2022</p>
            <p className="mt-3 mb-2">
                I wrote unit and integration tests for a Java Spring Boot project. I used several tools like JUnit5, Mockito, Testcontainers, Redis, Docker, PostgreSQL.
            </p>
            <hr />
            <p className="mt-1">Used Technologies: Java, Spring Framework, Spring Boot, JUnit5, Mockito, Redis, PostgreSQL, Testcontainers, Docker</p>
        </div>
    </div>
  )
}

export default Experience