import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Shows from '../components/Shows/Shows'
import Members from '../components/Members/Members'
import Footer from '../components/Footer/Footer'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Shows />
        <Members />
        <Footer />
    </div>
  )
}

export default Home