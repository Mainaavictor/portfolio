import { useRouter } from 'next/router'
import { projects } from '../../data/projects'
import SEO from '../../components/SEO'
import { motion } from 'framer-motion'

export default function ProjectPage(){
  const router = useRouter()
  const { slug } = router.query
  const project = projects.find(p=> p.slug === slug)
  if(!project) return <div className="py-20">Project not found</div>

  return (
    <div className="py-12 max-w-5xl mx-auto px-4">
      <SEO title={`${project.title} — Case Study`} description={project.short} />
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          {project.slug === 'mt5-dashboard' && (
            <span className="badge-available">Currently working on</span>
          )}
        </div>
        <p className="text-slate-400 mt-2">{project.short}</p>
        <div className="mt-3 text-sm text-slate-400">Role: {project.role} · Tech: {project.tech.join(', ')}</div>
      </header>

      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2 space-y-6">
          <motion.article className="glass p-6 rounded" initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}>
            <h3 className="font-semibold">Project overview</h3>
            <p className="mt-2 text-slate-300">{project.problem}</p>
            <h4 className="mt-4 font-medium">Challenge</h4>
            <p className="text-slate-300 mt-2">{project.solution}</p>
            <h4 className="mt-4 font-medium">Features</h4>
            <ul className="list-disc list-inside text-slate-300 mt-2">
              {project.features && project.features.map((f:any)=> <li key={f}>{f}</li>)}
            </ul>
            <h4 className="mt-4 font-medium">Development process</h4>
            <p className="text-slate-300 mt-2">Worked through discovery, design, and iterative delivery with regular client feedback. (See Process section on the home page for standard workflow.)</p>
          </motion.article>

          <motion.section className="glass p-6 rounded" initial={{opacity:0}} animate={{opacity:1}}>
            <h3 className="font-semibold">Architecture</h3>
            <p className="text-slate-300 mt-2">{project.architecture}</p>
            <div className="mt-4">
              <img src="/screenshots/architecture-placeholder.svg" alt="Architecture diagram placeholder" loading="lazy" />
            </div>
          </motion.section>

          <motion.section className="glass p-6 rounded" initial={{opacity:0}} animate={{opacity:1}}>
            <h3 className="font-semibold">Screenshots</h3>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.screenshots && project.screenshots.map((s:any)=> (
                <div key={s} className="rounded overflow-hidden">
                  <img src={s} alt={`${project.title} screenshot`} loading="lazy" className="w-full h-48 object-cover" />
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section className="glass p-6 rounded" initial={{opacity:0}} animate={{opacity:1}}>
            <h3 className="font-semibold">My contribution</h3>
            <p className="text-slate-300 mt-2">I led the technical design, implemented the frontend interface, integrated backend APIs and coordinated deployment. I was responsible for translating business requirements into product features and overseeing QA.</p>
            <h4 className="mt-4 font-medium">Lessons learned</h4>
            <ul className="list-disc list-inside text-slate-300 mt-2">
              <li>Align early on success metrics with stakeholders.</li>
              <li>Iterative UX testing uncovered key improvements to the booking flow.</li>
            </ul>
          </motion.section>

        </section>

        <aside className="space-y-4">
          <div className="glass p-4 rounded">
            <h4 className="font-medium">Quick facts</h4>
            <div className="text-slate-300 text-sm mt-2">
              <div><strong>Role:</strong> {project.role}</div>
              <div><strong>Tech:</strong> {project.tech.join(', ')}</div>
            </div>
            <div className="mt-3">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary">View code</a>
              ) : (
                <span className="text-slate-400 text-sm">Code not public</span>
              )}
            </div>
          </div>

          <div className="glass p-4 rounded">
            <h4 className="font-medium">Outcome</h4>
            <p className="text-slate-300 text-sm mt-2">Results unavailable or confidential. Contact me to discuss implementation details and outcomes.</p>
          </div>

          <div className="glass p-4 rounded">
            <h4 className="font-medium">Get started</h4>
            <p className="text-slate-300 text-sm mt-2">Interested in a similar solution? <a href="/#contact" className="text-primary">Start a project →</a></p>
          </div>
        </aside>
      </main>
    </div>
  )
}
