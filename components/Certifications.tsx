import React from 'react'

const certs = [
  { name: 'Cisco Certified Network Associate (CCNA)', org: 'Cisco', year: '2024', link: '' },
  { name: 'Foundations of AI', org: 'Coursera', year: '2023', link: '' }
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map(c=> (
            <div key={c.name} className="glass p-4 rounded">
              <div className="font-medium">{c.name}</div>
              <div className="text-slate-400 text-sm">{c.org} · {c.year} {c.link ? <a className="text-primary" href={c.link}>Verify</a> : <span className="text-xs text-slate-500">(placeholder)</span>}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
