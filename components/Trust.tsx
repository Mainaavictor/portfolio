import React from 'react'

export default function Trust(){
  return (
    <section id="trust" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <span className="section-kicker">Trust</span>
        </div>
        <h2 className="section-title text-3xl md:text-5xl font-bold text-white">Built to be dependable, secure, and easy to scale.</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass p-6 rounded-[28px]">
            <h3 className="font-semibold text-xl text-white">Engineering</h3>
            <div className="text-slate-300 mt-3 leading-relaxed">Clean code, version control, testing and maintainable architecture.</div>
          </div>
          <div className="glass p-6 rounded-[28px]">
            <h3 className="font-semibold text-xl text-white">Security & Privacy</h3>
            <div className="text-slate-300 mt-3 leading-relaxed">Security-conscious development and client confidentiality.</div>
          </div>
          <div className="glass p-6 rounded-[28px]">
            <h3 className="font-semibold text-xl text-white">Delivery</h3>
            <div className="text-slate-300 mt-3 leading-relaxed">Documented handover, deployment, and ongoing support options.</div>
          </div>
        </div>
      </div>
    </section>
  )
}
