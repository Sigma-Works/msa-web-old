import React, { useEffect, useState } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./LinksPage.css";

const LinksPage = () => {
  const [linksData, setLinksData] = useState([]);

  useEffect(() => {
    const fetchLinksData = async () => {
      const querySnapshot = await getDocs(collection(db, "RSVP"));
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // Include the document ID
      });
      setLinksData(data);
    };

    fetchLinksData();
  }, []);

  return (
    <div className="links-page">
      <h1 className="links-title">MSA Links</h1>
      <div className="links-container">
        {linksData.map((linkItem) => (
          <a
            key={linkItem.id}
            href={
              linkItem.link &&
              (linkItem.link.startsWith("https://") ||
                linkItem.link.startsWith("http://"))
                ? linkItem.link
                : "#"
            }
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkItem.image && (
              <img
                src={linkItem.image}
                alt={linkItem.name}
                className="link-image"
              />
            )}
            <span>{linkItem.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksPage;
