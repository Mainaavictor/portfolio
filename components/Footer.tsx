import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Instagram, Phone } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="w-full mt-16 py-8 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold">MainaVictor</div>
          <div className="text-slate-400">Digital Solutions Developer</div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#services" className="hover:text-white">Services</Link>
          <Link href="#projects" className="hover:text-white">Projects</Link>
          <Link href="#about" className="hover:text-white">About</Link>
          <Link href="#skills" className="hover:text-white">Skills</Link>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/mainaavictor" target="_blank" rel="noopener noreferrer"><Github size={16} /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>
          <a href="mailto:mainavic70@gmail.com"><Mail size={16} /></a>
          <a href="https://instagram.com/mainaavictor" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>
        </div>
      </div>
      <div className="mt-6 text-center text-slate-500">© 2026 MainaVictor. All rights reserved.</div>
    </footer>
  )
}
