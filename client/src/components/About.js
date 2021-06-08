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
            <p>Ever since I started coding it always push me to learn more. I studied new languages, algorithms, compilers, higher mathematics, 
            all with pretty much the same fascination.<br/>
            I have completed bachelor in Computer Science from University of the Punjab. Choosing this field is just to contribute to the other fields.<br/>
            Now I am working as Software Engineer in Arbisoft working on cutting edge technology</p>
          </div>
          <div className="justify-content-center">
            <div className="job job-1">
              <h2>Associate Software Engineer</h2>
              <h5>Full Stack Developer <br/> Arbisoft <br/>2021-Present</h5>
              <p>Build new products and features through rapid build/measure/learn iterations.Work collaboratively with Designers, Peer Developers, 
                Architects, and Product Managers on high impact projects.Support the open source community</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default About;