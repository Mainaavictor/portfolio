import React from 'react'

export default function Experience(){
  return (
    <section id="experience" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">Experience</span>
        </div>
        <h2 className="section-title text-3xl md:text-5xl font-bold text-white">Practical experience building digital systems that support real operations.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-[28px]">
            <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Cliq Adventures</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">Tour Consultant & Digital</h3>
            <p className="text-slate-300 mt-3 leading-relaxed">Developed the business website, improved client communications, and implemented booking workflows. Gained experience in client requirements, marketing, and operations.</p>
          </div>
          <div className="glass p-6 rounded-[28px]">
            <div className="text-sm uppercase tracking-[0.14em] text-slate-400">Jawamu Farm</div>
            <h3 className="mt-3 text-2xl font-semibold text-white">Digital Marketing</h3>
            <p className="text-slate-300 mt-3 leading-relaxed">Delivered social media strategy, content planning, and supported the farm's digital presence to improve customer engagement.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
