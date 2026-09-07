import React from 'react'

const steps = [
  {num: '01', title: 'Discover', desc: "Understand the client's idea, business and requirements."},
  {num: '02', title: 'Plan', desc: 'Define the solution, architecture, technology and scope.'},
  {num: '03', title: 'Build', desc: 'Develop, test and refine the product.'},
  {num: '04', title: 'Launch', desc: 'Deploy the solution and provide support.'}
]

export default function Process(){
  return (
    <section id="process" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">Process</span>
        </div>
        <h2 className="section-title text-3xl md:text-5xl font-bold text-white">A clean 4-step workflow from idea to launch.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map(s=> (
            <div key={s.num} className="glass p-6 rounded-[28px] text-left">
              <div className="text-sm font-medium text-violet-300">{s.num}</div>
              <div className="font-semibold text-xl mt-3 text-white">{s.title}</div>
              <div className="mt-3 text-slate-300 text-sm leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
