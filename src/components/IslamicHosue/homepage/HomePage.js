import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Mt from "../../mt/Mt";

const HomePage = () => {
  const [prayerTimesData, setPrayerTimesData] = useState(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      const { startDate, endDate } = getDateRange();
      const masjidId = "RKxwXOdO"; // TODO: adjust this ID accordingly
      const url = `https://masjidal.com/api/v1/time/range?masjid_id=${masjidId}&from_date=${startDate}&to_date=${endDate}`;
      const response = await fetch(url);
      const timings = await response.json();
      setPrayerTimesData(timings.status === "success" ? timings.data : null);
    }

    fetchPrayerTimes();
  }, []);

  function getDateRange() {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 3);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 30);

    return {
      startDate: formatDateString(startDate),
      endDate: formatDateString(endDate),
    };
  }

  function formatDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="homepage">
      <header className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Welcome to Islamic House @ UW</h1>
          <p>Your community of faith, fellowship, and learning.</p>
        </div>
      </header>

      <section className="content-section">
        <div className="about-section">
          <h2>About Us</h2>
          <p>The IH is a vibrant community at uw???</p>
          <a
            href="https://www.zeffy.com/en-US/donation-form/44131d7a-557e-4fdc-9a70-14e9f67206ef"
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Donate Now
          </a>

          <div className="spacer"></div>

          <div className="about-additional">
            <h3>Our Mission</h3>
            <p>
              Our mission is to build a supportive and inclusive community where
              every member can grow spiritually and academically. We strive to
              nurture a sense of belonging while celebrating our shared values
              and traditions.
            </p>
          </div>
        </div>

        {/* Prayer Times Section (will be displayed on the left via CSS order) */}
        <div className="prayer-times-section">
          <h2>Prayer Times</h2>
          {prayerTimesData ? (
            <Mt data={prayerTimesData} />
          ) : (
            <p>Loading prayer times...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
