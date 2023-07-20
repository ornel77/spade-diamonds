import React from 'react';
import illu from '../../assets/image/sd7.jpeg'
import './About.scss'

function About() {
  return (
    <section className='container about-container'>
      <div className="about-sub-container">
          <div className='about-content'>
            <h2>About Us</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolore voluptates placeat ea molestias in repellat sint sunt repudiandae iusto, minus pariatur sit labore perferendis voluptatem laborum quis, nobis possimus maiores. Natus laborum praesentium sint optio cupiditate nulla nobis, expedita voluptatum quos error illo labore rem qui quo pariatur quisquam repellat reiciendis voluptate culpa fuga incidunt consectetur facere iusto temporibus! Earum quia totam alias, quasi velit enim quis quaerat eum impedit nobis sequi ducimus doloremque tempora dignissimos rerum nisi neque quas! Nisi dolorum, minus quisquam, ab laudantium culpa laboriosam molestias a ratione eius eveniet repellat dolores architecto, quod nemo sed.
            </p>
          </div>
          <div className="about-illustration">
            <img src={illu} alt="" />
          </div>
      </div>
    </section>
  );
}

export default About;
