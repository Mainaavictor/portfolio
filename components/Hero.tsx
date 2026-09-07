import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MyPic from '../MYPIC.jpeg'

export default function Hero(){
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_30%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14" initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div className="w-full lg:w-1/2">
            <div className="mb-5">
              <span className="hero-badge">Available for select engagements</span>
            </div>
            <h1 className="max-w-xl text-4xl md:text-6xl font-black leading-[0.96] tracking-[-0.06em] text-white">
              I help founders build the <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg,#f5d0fe,#9bd9ff)'}}>technical foundation</span> behind products that can scale with conviction.
            </h1>
            <p className="mt-5 max-w-xl text-base md:text-lg text-slate-300 leading-relaxed">
              I operate as a technical co-founder and product builder for teams that need strategic product direction, AI-enabled systems, and clean digital execution rooted in real market demand.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="primary-button px-5 py-3.5 text-sm md:text-base">View Product Work</a>
              <Link href="#contact" className="secondary-button px-5 py-3.5 text-sm md:text-base">Book a Discovery Call</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 items-center">
              <div className="mr-3 text-sm text-slate-400">Focus:</div>
              {['Product Strategy','AI Systems','Growth Products','Technical Execution'].map(t=> (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <div className="glass p-3 rounded-[28px] relative flex items-center justify-center">
                <div className="w-full h-[420px] md:h-[500px] rounded-[22px] overflow-hidden border border-white/10 bg-slate-900/40">
                  <Image src={MyPic} alt="Maina Victor" fill style={{objectFit:'cover'}} sizes="(max-width: 768px) 300px, 420px" priority />
                </div>
                <div className="absolute -right-2 md:-right-6 bottom-6 grid gap-3">
                  <div className="glass p-3 rounded-2xl accent-glow w-32 md:w-36">
                    <div className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Performance</div>
                    <div className="mt-2 font-semibold text-xl text-white">+42%</div>
                  </div>
                  <div className="glass p-3 rounded-2xl accent-glow w-32 md:w-36">
                    <div className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Projects</div>
                    <div className="mt-2 font-semibold text-xl text-white">4+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
