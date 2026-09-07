import Head from 'next/head'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Certifications from '../components/Certifications'
import Process from '../components/Process'
import Trust from '../components/Trust'
import ContactForm from '../components/ContactForm'

export default function Home(){
  return (
    <>
      <SEO />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Process />
      <Trust />
      <section id="contact" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-white">Let&apos;s build the next strategic growth layer.</h2>
          <p className="text-slate-400 mt-2">Have an idea, a product challenge, or a traction bottleneck? Let&apos;s turn it into a refined digital system with real commercial value.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 border-t border-white/10 pt-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Download CV</h3>
            <p className="text-slate-400">A quick snapshot of my background, experience, and capabilities.</p>
          </div>
          <a href="/Maina_Victor_CV.txt" className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">Download CV</a>
        </div>
      </section>
    </>
  )
}
