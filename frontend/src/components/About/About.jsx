import React from 'react';
import illu from '../../assets/image/sd7.jpeg'
import './About.scss'

function About() {
  return (
    <section className='container'>
      <div className="about-container">
              <h2>About Us</h2>
        <div className="about-sub-container">
            <div className='about-content'>
              <p>
              Spade Diamonds (ex Look at Me) est un groupe de rock issu de la scène
              actuelle. Formé en 2008, il est composé de quatre artistes de la même
              famille basés à Meaux. Par une approche pop et réfléchie, ils abordent leurs
              mélodies et leurs textes en observant le monde concret et intelligible.
              Sur scène, la réflexion laisse place à l’expression : c’est dans la plus grande
              tradition rock que Spade Diamonds s’exprime corps et âmes. Le Rock
              anglais en fond sonore avant les répétitions, il influence fondamentalement
              le son de Spade Diamonds.
              </p>
            </div>
            <div className="about-illustration">
              <img src={illu} alt="" />
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;
