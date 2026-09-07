import Link from 'next/link'
import React, { useState } from 'react'
import { Github, Linkedin, Mail, MessageCircle, Instagram, Phone, Menu, X } from 'lucide-react'

export default function Nav(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  React.useEffect(()=>{
    function onScroll(){ setScrolled(window.scrollY > 24) }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <nav className={`w-full px-4 md:px-12 py-3 flex items-center justify-between transition-all z-40 ${scrolled ? 'glass backdrop-blur-md bg-opacity-70' : 'bg-transparent'}`}>
      <div className="flex items-center gap-3">
        <Link href="/" className="text-lg md:text-xl font-semibold tracking-tight text-white">MainaVictor</Link>
        <span className="hidden sm:inline text-sm text-slate-400">Technical Co-Founder & Product Builder</span>
      </div>

      <div className="hidden md:flex items-center gap-6">
        <Link href="#services" className="text-sm text-slate-300 hover:text-white transition-colors">Services</Link>
        <Link href="#projects" className="text-sm text-slate-300 hover:text-white transition-colors">Projects</Link>
        <Link href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white text-sm font-medium shadow-lg shadow-violet-500/20">Start a Project</Link>
      </div>

      <div className="hidden md:flex items-center gap-3">
        <a href="https://github.com/mainaavictor" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
          <Linkedin size={18} />
        </a>
        <a href="mailto:mainavic70@gmail.com" aria-label="Email" className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://wa.me/254117285410" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
          <Phone size={18} />
        </a>
        <a href="https://instagram.com/mainaavictor" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
          <Instagram size={18} />
        </a>
      </div>

      {/* Mobile hamburger */}
      <button aria-label="Menu" onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-md text-slate-200 hover:bg-white/5">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open && (
        <div className="absolute right-6 top-16 w-64 bg-[#0b1120]/95 border border-white/10 rounded-2xl p-4 md:hidden z-50 shadow-2xl shadow-violet-500/10">
          <div className="flex flex-col gap-3">
            <Link href="#services" onClick={()=>setOpen(false)} className="text-slate-200">Services</Link>
            <Link href="#projects" onClick={()=>setOpen(false)} className="text-slate-200">Projects</Link>
            <Link href="#contact" onClick={()=>setOpen(false)} className="px-3 py-2 bg-gradient-to-r from-[#8b5cf6] to-[#22d3ee] text-white rounded-md text-sm inline-block text-center">Start a Project</Link>
            <div className="flex items-center gap-3 mt-2 text-sm text-slate-300">
              <a href="https://github.com/mainaavictor" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://instagram.com/mainaavictor" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
