import React from 'react'
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="flex justify-between">
        <div className="ml-4 p-4">
          <a href='/' className="text-5xl text-white font-sans">Barış Yenigün</a>
        </div>
        <div className="flex gap-6 justify-end items-center text-center text-white mr-10">
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://www.linkedin.com/in/barisyenigun07/" target="_blank">
              <FaLinkedin size={"2em"}/>
            </a>
            <a href="https://github.com/barisyenigun07" target="_blank">
              <FaGithub size={"2em"}/>
            </a>
            <button className="w-24 bg-blue-600 rounded-full p-2">
              <a href="#contact">Contact</a>
            </button>
        </div>
    </nav>
  )
}

export default NavBar