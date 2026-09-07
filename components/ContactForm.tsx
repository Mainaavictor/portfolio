import React, { useState } from 'react'

export default function ContactForm(){
  const [status, setStatus] = useState<string | null>(null)

  async function handleSubmit(e: any){
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      projectType: e.target.projectType.value,
      budget: e.target.budget.value,
      message: e.target.message.value
    }

    const res = await fetch('/api/contact', {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(data)})
    if(res.ok) setStatus('Message sent — I will respond within 48 hours.')
    else setStatus('There was an error sending your message.')
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-6 rounded-lg max-w-2xl" aria-label="Contact form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col"><span className="sr-only">Name</span><input name="name" placeholder="Your name" required aria-label="Your name" className="p-3 bg-transparent border border-white/6 rounded" /></label>
        <label className="flex flex-col"><span className="sr-only">Email</span><input name="email" type="email" placeholder="Email" required aria-label="Email" className="p-3 bg-transparent border border-white/6 rounded" /></label>
      </div>
      <label className="flex flex-col mt-4"><span className="sr-only">Company</span><input name="company" placeholder="Company / Business" className="p-3 bg-transparent border border-white/6 rounded w-full" /></label>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col"><span className="sr-only">Project type</span>
          <select name="projectType" className="p-3 bg-transparent border border-white/6 rounded w-full">
            <option>Website</option>
            <option>Web app</option>
            <option>AI / Automation</option>
            <option>Other</option>
          </select>
        </label>
        <label className="flex flex-col"><span className="sr-only">Budget</span>
          <select name="budget" className="p-3 bg-transparent border border-white/6 rounded w-full">
            <option>Under $1,000</option>
            <option>$1,000 - $5,000</option>
            <option>$5,000 - $15,000</option>
            <option>Enterprise / Custom</option>
          </select>
        </label>
      </div>
      <label className="flex flex-col mt-4"><span className="sr-only">Message</span><textarea name="message" placeholder="Project description" rows={5} className="mt-2 p-3 bg-transparent border border-white/6 rounded w-full" /></label>
      <div className="mt-4 flex items-center gap-3">
        <button type="submit" className="px-4 py-2 btn-gradient rounded">Start Project</button>
        <a href="https://wa.me/254117285410" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400">Or WhatsApp: +254 117 285410</a>
      </div>
      {status && <div role="status" className="mt-3 text-sm text-slate-200">{status}</div>}
    </form>
  )
}
