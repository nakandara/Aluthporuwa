import React from "react";
import Link from "next/link";


const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>
            Passionate team at QuickAds Hub dedicated to  with unwavering commitment to quality and innovation.
            </p>
          </div>
          <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            {/* Use Link component for navigation */}
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            {/* Add more links as needed */}
            <li>
              <Link href="/post">Post</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p>Email: poruwa@example.com</p>
            <p>Phone: +94715297881</p>
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
