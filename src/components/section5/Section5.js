import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./Section5.css";

const Section5 = () => {
  return (
    <div id="section5" className="section5">
      <h1>Connect with Us</h1>
      <p>Follow us on our socials and support our community.</p>
      <div className="links">
        <a
          href="https://www.zeffy.com/en-US/donation-form/44131d7a-557e-4fdc-9a70-14e9f67206ef"
          className="donate-link"
        >
          <FontAwesomeIcon icon={faDonate} className="icon" />
          Donate to the MSA
        </a>
        <a
          href="https://www.zeffy.com/en-US/donation-form/0b12beb3-2da5-4c6b-87b9-cfc84cf47e6a"
          className="donate-link"
        >
          <FontAwesomeIcon icon={faDonate} className="icon" />
          Donate to the Islamic House
        </a>
        <a href="https://discord.gg/wb56SYhaF6" className="social-link">
          <FontAwesomeIcon icon={faDiscord} className="icon" />
          Join the MSA Discord
        </a>
        <a
          href="https://www.facebook.com/groups/650155172271569/"
          className="social-link"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          MSA Facebook
        </a>
        <a
          href="https://www.facebook.com/groups/355223922312624/?ref=share"
          className="social-link"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon" />
          MSA Facebook Sisters Group
        </a>
      </div>
    </div>
  );
};

export default Section5;
