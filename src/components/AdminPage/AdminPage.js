import React, { useEffect, useState } from "react";
import { db, storage, auth } from "../../firebase.js";
import { useNavigate } from "react-router-dom";
import {
  getDoc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { signOut } from "firebase/auth";
import "./AdminPage.css";

const AdminPage = () => {
  const [linksData, setLinksData] = useState([]);
  const [newName, setNewName] = useState("");
  const [newLink, setNewLink] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  const [eventImages, setEventImages] = useState([]);
  const [newEventImageFile, setNewEventImageFile] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchLinksData = async () => {
      const querySnapshot = await getDocs(collection(db, "RSVP"));
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setLinksData(data);
    };

    const fetchEventImages = async () => {
      const querySnapshot = await getDocs(collection(db, "EventsImages"));
      const images = [];
      querySnapshot.forEach((doc) => {
        images.push({ id: doc.id, ...doc.data() });
      });
      setEventImages(images);
    };

    fetchLinksData();
    fetchEventImages();
  }, []);

  const handleAddLink = async () => {
    if (newName && newLink && (newLink.startsWith("https://") || newLink.startsWith("http://"))) {
      const newLinkItem = {
        name: newName,
        link: newLink,
        image: newImageFile ? await uploadImage(newImageFile) : null,
      };
      await addDoc(collection(db, "RSVP"), newLinkItem);
      setLinksData((prev) => [...prev, newLinkItem]);
      setNewName("");
      setNewLink("");
      setNewImageFile(null);
    }
  };

  const handleAddEventImage = async () => {
    if (newEventImageFile) {
      const { downloadURL, storagePath } = await uploadImage(newEventImageFile);
      const newEventImageItem = { imageUrl: downloadURL, storagePath };
      const docRef = await addDoc(
        collection(db, "EventsImages"),
        newEventImageItem
      );
      newEventImageItem.id = docRef.id;
      setEventImages((prev) => [...prev, newEventImageItem]);
      setNewEventImageFile(null);
    }
  };

  const uploadImage = async (imageFile) => {
    try {
      if (!auth.currentUser) {
        console.error("User is not authenticated. Cannot upload image.");
        return;
      }

      const uniqueName = `${Date.now()}_${imageFile.name}`;
      const storageRef = ref(storage, `EventsImages/${uniqueName}`);
      await uploadBytes(storageRef, imageFile);
      const downloadURL = await getDownloadURL(storageRef);
      const storagePath = storageRef.fullPath; // Get the full path
      return { downloadURL, storagePath };
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleDeleteLink = async (id) => {
    await deleteDoc(doc(db, "RSVP", id));
    setLinksData((prev) => prev.filter((link) => link.id !== id));
  };

  const handleDeleteEventImage = async (id) => {
    try {
      const imageDocRef = doc(db, "EventsImages", id);
      const imageDoc = await getDoc(imageDocRef);

      if (imageDoc.exists()) {
        const data = imageDoc.data();
        const storagePath = data.storagePath;

        if (storagePath) {
          const imageRef = ref(storage, storagePath);
          await deleteObject(imageRef);
        } else {
          console.error("No storage path found for image.");
        }

        await deleteDoc(imageDocRef);
        setEventImages((prev) => prev.filter((image) => image.id !== id));
      } else {
        console.error("Image not found in the database.");
      }
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Admin Panel - Manage MSA Links and Images</h1>

      {/* Links Management Section */}
      <div className="admin-category">
        <h2>Manage MSA Links</h2>
        <div className="add-category">
          <input
            type="text"
            placeholder="Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Link"
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
          <button onClick={handleAddLink}>Add Link</button>
        </div>

        <div className="admin-links-container">
          {linksData.map((linkItem) => (
            <div key={linkItem.id} className="admin-link-item">
              <a
                href={
                  linkItem.link &&
                  (linkItem.link.startsWith("https://") ||
                    linkItem.link.startsWith("http://"))
                    ? linkItem.link
                    : "#"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                {linkItem.name}
              </a>
              <button onClick={() => handleDeleteLink(linkItem.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Event Images Management Section */}
      <div className="admin-category">
        <h2>Manage Event Images</h2>
        <div className="add-category">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewEventImageFile(e.target.files[0])}
          />
          <button onClick={handleAddEventImage}>Add Image</button>
        </div>

        <div className="admin-images-container">
          {eventImages.map((image) => (
            <div key={image.id} className="admin-image-item">
              <img src={image.imageUrl} alt="Event" />
              <button onClick={() => handleDeleteEventImage(image.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default AdminPage;
