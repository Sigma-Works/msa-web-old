import React, { useEffect, useState, useRef } from "react";
import { db } from "../../firebase.js";
import { collection, getDocs } from "firebase/firestore";
import "./Section3.css";

const Section3 = () => {
  const [eventImages, setEventImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Fetch event images from Firestore
    const fetchEventImages = async () => {
      const querySnapshot = await getDocs(collection(db, "EventsImages"));
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push(doc.data().imageUrl);
      });
      setEventImages(images);
    };
    fetchEventImages();
  }, []);

  // Function to start or reset the interval
  const startInterval = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    }, 10000);
  };

  useEffect(() => {
    if (eventImages.length > 0) {
      startInterval();

      // Cleanup on unmount
      return () => clearInterval(intervalRef.current);
    }
  }, [eventImages]);

  const handlePrevClick = () => {
    // Go to previous image
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? eventImages.length - 1 : prevIndex - 1
    );
    startInterval(); // Reset the interval
  };

  const handleNextClick = () => {
    // Go to next image
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % eventImages.length);
    startInterval(); // Reset the interval
  };

  return (
    <div id="section3" className="section3">
      <h1>Current Events</h1>
      <div className="image-rotator">
        {eventImages.length > 0 && (
          <div className="image-container">
            <button
              className="prev-button"
              onClick={handlePrevClick}
              aria-label="Previous Image"
            >
              &#8249; {/* Left arrow */}
            </button>
            <img
              src={eventImages[currentImageIndex]}
              alt="Event"
              className="rotating-image"
            />
            <button
              className="next-button"
              onClick={handleNextClick}
              aria-label="Next Image"
            >
              &#8250; {/* Right arrow */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section3;
