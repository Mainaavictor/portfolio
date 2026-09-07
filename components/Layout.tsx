import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({children}:{children:React.ReactNode}){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-4 z-40 px-6 md:px-12">
        <Nav />
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">{children}</main>
      <div className="container mx-auto px-6">
        <Footer />
      </div>
    </div>
  )
}
