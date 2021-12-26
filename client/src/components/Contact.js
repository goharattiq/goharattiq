import React from "react";
import Footer from "./Footer";

const Contact = () => (
  <>
    <main id="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes">
        <div>
          <span className="text-secondary">Email: </span> goharattiq@hotmail.com
        </div>
        <div>
          <span className="text-secondary">Phone: </span> (+92) 304 4891824
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Contact;
