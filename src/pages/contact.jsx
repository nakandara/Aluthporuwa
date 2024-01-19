import React from "react";
import LayoutSecond from "../../components/LayoutSecond/LayoutSecond";

const Contact = () => {
  return (
    <LayoutSecond>
      <div className="contact-container_new">
        <div className="multi-color-gradient">
          <div className="contact-content">
            <h1 className="header_contact">Contact Us</h1>
            <p className="contact-description">
            We&apos;d love to hear from you. Reach out to us using the form below.
            </p>

            {/* Your contact form goes here */}
            <form className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </LayoutSecond>
  );
};

export default Contact;
