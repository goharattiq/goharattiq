import React, { Fragment } from 'react';
import portsmall from '../img/portrait_small.jpg';
import Footer from './Footer';

const About = () => {
  return (
      <Fragment>
              <main id="about">
    <h1 className="lg-heading">
      About
      <span className="text-secondary">Me</span>
    </h1>
    <h2 className="sm-heading">
      Let me tell you a few things...
    </h2>
    <div className="about-info">
      <img src={portsmall} alt="Gohar Attiq" className="bio-image"/>

      <div className="bio">
        <h3 className="text-secondary">BIO</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa
          autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum.</p>
      </div>

      <div className="job job-1">
        <h3>123 Webshop</h3>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div className="job job-2">
        <h3>Designers ABC</h3>
        <h6>Front End Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div className="job job-3">
        <h3>Webworks</h3>
        <h6>Graphic Designer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>
    </div>
  </main>


          <Footer/>
      </Fragment>
  )
}

export default About;
