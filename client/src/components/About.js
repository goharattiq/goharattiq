import React from "react";
import portsmall from "../img/portrait_small.jpg";
import Footer from "./Footer";
import { HISTORY } from "../AppConstants";

const About = () => (
  <>
    <main id="about">
      <h1 className="lg-heading">
        About
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">Let me tell you a few things...</h2>
      <div className="about-info">
        <img src={portsmall} alt="Gohar Attiq" className="bio-image" />
        <div className="bio">
          <h3 className="text-secondary">BIO</h3>
          <p>
            Ever since I started coding it always push me to learn more. I
            studied new languages, algorithms, compilers, higher mathematics,
            all with pretty much the same fascination.
            <br />
            I have completed bachelor in Computer Science from University of the
            Punjab. Choosing this field is just to contribute to the other
            fields.
            <br />
            Now I am working as Software Engineer in Arbisoft working on cutting
            edge technology
          </p>
        </div>
        <div className="justify-content-center">
          {HISTORY.map(({ title, position, company, period, description }) => (
            <div className="job job-1">
              <h2>{title}</h2>
              <h5>
                {position} <br /> {company} <br />
                {period}
              </h5>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
