import React from 'react'
import Link from 'next/link'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">Selected Work</span>
        </div>
        <h2 className="section-title text-3xl md:text-5xl font-bold text-white">Work that solves real problems and looks polished enough to win trust.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p=> (
            <article key={p.slug} className="glass p-6 rounded-[28px] project-card">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl shadow-violet-500/10">
                  <div className="w-full h-full bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#22d3ee] flex items-center justify-center text-white font-black text-lg">{p.title.split(' ').slice(0,2).map(s=>s[0]).join('')}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-slate-300 mt-2 leading-relaxed">{p.short}</p>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-400">
                <div><span className="text-slate-300 font-medium">Problem:</span> {p.problem}</div>
                <div><span className="text-slate-300 font-medium">Tech:</span> {p.tech.join(', ')}</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/projects/${p.slug}`} className="px-3.5 py-2 rounded-xl text-white bg-white/5 border border-white/10 hover:bg-white/8">Case study →</Link>
                {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl border border-white/10 text-slate-200 hover:text-white">GitHub</a>}
                {p.liveDemo && <a href={p.liveDemo} target="_blank" rel="noopener noreferrer" className="px-3.5 py-2 rounded-xl border border-white/10 text-slate-200 hover:text-white">Live demo</a>}
                <a href="#contact" className="ml-auto self-center text-slate-400 hover:text-white">Discuss this project</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
