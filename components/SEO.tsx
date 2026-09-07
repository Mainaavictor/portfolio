import Head from 'next/head'
import React from 'react'

type Props = {
  title?: string
  description?: string
  image?: string
}

export default function SEO({title, description, image}:Props){
  const siteTitle = 'Maina Victor — Digital Solutions Developer'
  const t = title ? `${title} — Maina Victor` : siteTitle
  const desc = description || 'I build digital solutions that turn ideas into reality. Websites, apps, AI, and automation for businesses.'
  const img = image || '/og-image.svg'

  return (
    <Head>
      <title>{t}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
      <link rel="icon" href="/favicon.svg" />
    </Head>
  )
}
