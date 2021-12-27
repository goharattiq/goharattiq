import React from "react";
import { SOCIAL_LINKS } from "../AppConstants";

const Landing = () => (
  <div id="bg-img">
    <div className="forground-layout">
      <main id="home">
        <h1 className="lg-heading">
          Gohar
          <span className="text-secondary"> Attiq</span>
        </h1>
        <h2 className="sm-heading">Software Engineer</h2>
        <div className="icons">
          {SOCIAL_LINKS.map(({ link, icon }) => (
            <a key={icon} href={link} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${icon} fa-2x`} />
            </a>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default Landing;
