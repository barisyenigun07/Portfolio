'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Image from 'next/image';

import logo from '@/app/favicon.png'; // Kendi logonla değiştir
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0D0716] text-white shadow-md fixed z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={80} height={80} />
          <span className="text-xl font-bold">Barış Yenigün</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-purple-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Socials */}
          <div className="flex space-x-4 ml-4">
            <a href="https://github.com/barisyenigun07" target="_blank" aria-label="GitHub">
              <FaGithub className="hover:text-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/barisyenigun07" target="_blank" aria-label="LinkedIn">
              <FaLinkedin className="hover:text-gray-400" />
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#170D27] px-4 pt-2 pb-4 space-y-3"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-white hover:text-purple-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Socials */}
          <div className="flex space-x-4 pt-3">
            <a href="https://github.com/barisyenigun" target="_blank" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/barisyenigun" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default NavBar;