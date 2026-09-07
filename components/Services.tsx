import React from 'react'
import { Code, Smartphone, Cpu, Zap, Box } from 'lucide-react'

const services = [
  { icon: Code, title: 'Web Development', desc: 'Modern, responsive websites built with current technologies.' },
  { icon: Smartphone, title: 'Mobile Applications', desc: 'Cross-platform applications designed for smooth and engaging experiences.' },
  { icon: Cpu, title: 'AI Solutions', desc: 'AI-powered tools and intelligent systems designed to solve real business problems.' },
  { icon: Zap, title: 'Automation Systems', desc: 'Workflow automation and custom systems that improve productivity.' },
  { icon: Box, title: 'Digital Tools', desc: 'Custom software utilities and business tools designed around specific client needs.' }
]

export default function Services(){
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">Services</span>
        </div>
        <h2 className="section-title text-3xl md:text-5xl font-bold text-white">Digital solutions designed to look premium and perform with purpose.</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s=> (
            <div key={s.title} className="glass p-6 rounded-3xl project-card">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[#8b5cf6] to-[#22d3ee] text-white shadow-lg shadow-violet-500/20">
                  <s.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">{s.title}</h3>
                </div>
              </div>
              <p className="text-slate-300 mt-4 leading-relaxed">{s.desc}</p>
              <div className="mt-5">
                <a href="#contact" className="text-sm font-medium text-slate-200 hover:text-white">Learn more →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
