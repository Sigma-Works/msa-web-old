import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (
    <div id="section4" className="section4">
      <h1>Programs</h1>
      <p>Weekly classes and office hours</p>
      <div className="calendar">
        <div className="day">
          <h2>Monday</h2>
          <p></p>
        </div>
        <div className="day">
          <h2>Tuesday</h2>
          <p></p>
        </div>
        <div className="day">
          <h2>Wednesday</h2>
          <div className="event">
            <p>
              <strong>Weekly Halaqah</strong>
            </p>
            <p>5-6 pm @ LOEW 205</p>
            <p>by Sheikh Kyle Smith</p>
          </div>
          <div className="event">
            <p>
              <strong>Office Hours</strong>
            </p>
            <p>6-7 pm @ LOEW 205</p>
            <p>by Sheikh Kyle Smith</p>
          </div>
        </div>
        <div className="day">
          <h2>Thursday</h2>
        </div>
        <div className="day">
          <h2>Friday</h2>
          <p></p>
        </div>
        <div className="day">
          <h2>Saturday</h2>
          <p></p>
        </div>
        <div className="day">
          <h2>Sunday</h2>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
