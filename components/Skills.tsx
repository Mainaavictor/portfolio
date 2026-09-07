import React from 'react'

const skillGroups = [
  { title: 'Frontend', items: ['React','Next.js','HTML','CSS','JavaScript','TypeScript','Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js','Python','REST APIs','PHP'] },
  { title: 'Database', items: ['PostgreSQL','MySQL','MongoDB'] },
  { title: 'Tools', items: ['Git','GitHub','VS Code','Linux','Figma'] },
  { title: 'AI / Automation', items: ['AI APIs','Automation','Prompt Engineering','AI-powered applications'] }
]

export default function Skills(){
  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <p className="text-slate-400 mt-2">Practical technologies organised by domain.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(g=> (
            <div key={g.title} className="glass p-6 rounded-2xl">
              <h3 className="font-medium">{g.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map(i=> (
                  <span key={i} className="tech-chip">{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
