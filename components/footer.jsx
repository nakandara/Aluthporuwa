import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
              Your company s story, mission, or a brief description can go here.
            </p>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: +123456789</p>
          </div>
        </div>
      </footer>
      <div
        style={{
          backgroundColor: "#333",
          padding: "20px",
          color: "#fff",
          textAlign: "center",
        }}
      >
     &copy; {new Date().getFullYear()} අතිනත් Pvt. LTD. All Rights Reserved.

      </div>
    </div>
  );
};

export default Footer;
