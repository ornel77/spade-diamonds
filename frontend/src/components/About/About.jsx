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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore voluptates placeat ea molestias in repellat sint sunt repudiandae iusto, minus pariatur sit labore perferendis voluptatem laborum quis, nobis possimus maiores. Natus laborum praesentium sint optio cupiditate nulla nobis, expedita voluptatum quo
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
