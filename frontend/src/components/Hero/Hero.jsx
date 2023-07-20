import React from 'react'
import './Hero.scss'
import hero from '../../assets/image/hero.jpeg'
function Hero() {
  return (
    <section className='hero-container'>
        <img src={hero} alt="" />
        <div className="hero-text">
            <h1>
            Sur scéne, la réflexion laisse place à l'expression.
            </h1>
        </div>
        
    </section>
  )
}

export default Hero