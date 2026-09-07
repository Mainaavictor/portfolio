import React from 'react'
import { projects } from '../data/projects'

export default function About(){
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">About</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start">
          <div>
            <h2 className="section-title text-3xl md:text-5xl font-bold text-white">A premium builder for founders who need product clarity, technical depth, and execution that compounds.</h2>
            <p className="mt-5 text-base md:text-lg text-slate-300 leading-relaxed">I’m a Computer Science student and product-minded developer working at the intersection of software engineering, product strategy, and digital growth. I help founders turn early ideas into products that are useful, refined, and aligned with actual market demand.</p>
            <div className="mt-6 text-slate-300 leading-relaxed">My role is not just to write code — it is to help teams sharpen the problem, design the right solution, and build the technical core that supports sustainable traction. I work across product strategy, AI integration, workflow design, and premium digital execution.</div>
          </div>

          <div className="glass p-6 rounded-3xl">
            <h3 className="text-xl font-semibold text-white">Snapshot</h3>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-white/3 p-3">
                <div className="text-2xl font-semibold text-white">{projects.length}</div>
                <div className="text-sm text-slate-400">Builds</div>
              </div>
              <div className="rounded-2xl bg-white/3 p-3">
                <div className="text-2xl font-semibold text-white">4</div>
                <div className="text-sm text-slate-400">Clients</div>
              </div>
              <div className="rounded-2xl bg-white/3 p-3">
                <div className="text-2xl font-semibold text-white">1.5</div>
                <div className="text-sm text-slate-400">Years</div>
              </div>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/3 p-4 text-sm text-slate-300">Product strategy · Technical execution · AI systems · Growth product design</div>
            <div className="mt-4 text-sm text-slate-400">Download CV for full background.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
