import type { NextApiRequest, NextApiResponse } from 'next'

// Supports SendGrid (SENDGRID_API_KEY) or SMTP via nodemailer (SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS).
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  if(req.method !== 'POST'){
    res.setHeader('Allow', ['POST'])
    return res.status(405).end('Method Not Allowed')
  }

  const payload = req.body
  const { name, email, company, projectType, budget, message } = payload || {}

  const subject = `New project inquiry from ${name || 'Website Visitor'}`
  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nProject: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`

  try{
    if(process.env.SENDGRID_API_KEY){
      const sg = require('@sendgrid/mail')
      sg.setApiKey(process.env.SENDGRID_API_KEY)
      const to = process.env.CONTACT_TO_EMAIL || process.env.SENDGRID_TO || process.env.EMAIL_TO || 'you@example.com'
      await sg.send({
        to,
        from: process.env.SENDGRID_FROM || process.env.FROM_EMAIL || 'no-reply@mainavictor.dev',
        subject,
        text,
        html: `<pre>${text}</pre>`
      })
      return res.status(200).json({status: 'ok'})
    }

    if(process.env.SMTP_HOST){
      const nodemailer = require('nodemailer')
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: (process.env.SMTP_SECURE === 'true') || false,
        auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
      })
      const info = await transporter.sendMail({
        from: process.env.FROM_EMAIL || process.env.SMTP_FROM || 'no-reply@mainavictor.dev',
        to: process.env.CONTACT_TO_EMAIL || process.env.EMAIL_TO || 'you@example.com',
        subject,
        text,
        html: `<pre>${text}</pre>`
      })
      console.log('Email sent', info && info.messageId)
      return res.status(200).json({status: 'ok'})
    }

    // No provider configured — fallback to logging (development)
    console.log('Contact form (not sent) — payload:', payload)
    return res.status(200).json({status: 'ok', warning: 'No email provider configured'})
  }catch(err:any){
    console.error('Contact error:', err)
    return res.status(500).json({status: 'error', error: String(err)})
  }
}
