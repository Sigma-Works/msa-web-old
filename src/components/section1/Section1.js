import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div id="section1" className="section1">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to UW MSA</h1>
        <p className="welcome-text">
          The Muslim Students Association at the University of Washington is a
          vibrant community of students dedicated to fostering a welcoming and
          inclusive environment for all. We strive to uphold Islamic values,
          promote understanding, and create opportunities for spiritual, social,
          and academic growth.
        </p>
        <div className="button-group">
          {/* <a href="#section3" className="cta-button">
            Upcoming Events
          </a> */}
          <a
            href="https://www.zeffy.com/en-US/donation-form/44131d7a-557e-4fdc-9a70-14e9f67206ef"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
