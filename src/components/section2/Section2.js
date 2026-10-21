import React, { useEffect, useState } from "react";
import "./Section2.css";
import Mt from "../mt/Mt";

const Section2 = () => {
  const [prayerTimesData, setPrayerTimesData] = useState(null);

  useEffect(() => {
    async function fetchPrayerTimes() {
      const { startDate, endDate } = getDateRange();
      const masjidId = "RKxwXOdO"; // TODO: adjust this ID accordingly
      const url = `https://masjidal.com/api/v1/time/range?masjid_id=${masjidId}&from_date=${startDate}&to_date=${endDate}`;
      const timings = await (await fetch(url)).json();

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
    <div id="section2" className="section2">
      <div className="prayer-places">
        <h1>Prayer Places</h1>
        <ul>
          <li>
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYgAQYjgUyBggAEEUYOTIQCAEQLhivARjHARiABBiOBTIHCAIQABiABDIHCAMQABiABDINCAQQLhivARjHARiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDQ0MTFqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KVcC3haJFJBUMaNnm71t_pvM&daddr=4625+22nd+Ave+NE,+Seattle,+WA+98105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Islamic House
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KXFMU2SNFJBUMUZSMwL9kxfJ&daddr=4001+E+Stevens+Way+NE,+Seattle,+WA+98195"
              target="_blank"
              rel="noopener noreferrer"
            >
              HUB Meditation Room
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//founders+hall/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x549015cf158fc82b:0xf9a6cc22812b5407?sa=X&ved=1t:3061&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              Founders Hall 4th Floor
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCDI4MjNqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KX_wUTLtFJBUMUpQ2Boti94S&daddr=185+E+Stevens+Way+NE,+Seattle,+WA+98195"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paul Allen Building (CSE access only)
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=Ka-uqMSIFZBUMRD-dIUxxHgn&daddr=3980+15th+Ave+NE,+Seattle,+WA+98105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hans Rosling Building (Public Health access)
            </a>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/dir//Mary+Gates+Hall,+1851+NE+Grant+Ln,+Seattle,+WA+98105/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x549014f2ab81c35f:0x6dda64382ddc87a4?sa=X&ved=1t:707&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mary Gates Hall
            </a>
          </li>
        </ul>
      </div>
      <div className="prayer-times-container">
        <h2>Islamic House Prayer Times</h2>
        {prayerTimesData && <Mt />}
      </div>
    </div>
  );
};

export default Section2;
