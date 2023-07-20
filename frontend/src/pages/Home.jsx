import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Shows from '../components/Shows/Shows'
import Members from '../components/Members/Members'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Shows />
        <Members />
    </div>
  )
}

export default Home