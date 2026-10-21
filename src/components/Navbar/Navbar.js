// import React, { useState } from "react";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <a href="#section1">
//             <img src="MSALOGO.png" alt="Logo" />
//           </a>
//         </div>

//         {/* Mobile menu toggle button */}
//         <button className="navbar-toggle" onClick={toggleMenu}>
//           ☰
//         </button>

//         {/* Navigation links */}
//         <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
//           <li className="navbar-list-item">
//             <a
//               href="#section1"
//               className="navbar-link"
//               onClick={() => setIsOpen(false)}
//             >
//               Home
//             </a>
//           </li>
//           <li className="navbar-list-item">
//             <a
//               href="#section2"
//               className="navbar-link"
//               onClick={() => setIsOpen(false)}
//             >
//               Prayer
//             </a>
//           </li>
//           <li className="navbar-list-item">
//             <a
//               href="#section3"
//               className="navbar-link"
//               onClick={() => setIsOpen(false)}
//             >
//               Events
//             </a>
//           </li>
//           <li className="navbar-list-item">
//             <a
//               href="#section4"
//               className="navbar-link"
//               onClick={() => setIsOpen(false)}
//             >
//               Programs
//             </a>
//           </li>
//           <li className="navbar-list-item">
//             <a
//               href="#section5"
//               className="navbar-link"
//               onClick={() => setIsOpen(false)}
//             >
//               Connect
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#section1">
            <img src="MSALOGO.png" alt="Logo" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navigation links */}
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li className="navbar-list-item">
            <a
              href="#section1"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="navbar-list-item">
            <a
              href="#section2"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Prayer
            </a>
          </li>
          <li className="navbar-list-item">
            <a
              href="#section3"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Events
            </a>
          </li>
          <li className="navbar-list-item">
            <a
              href="#section4"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Programs
            </a>
          </li>
          <li className="navbar-list-item">
            <a
              href="#section5"
              className="navbar-link"
              onClick={() => setIsOpen(false)}
            >
              Connect
            </a>
          </li>
          {/* Donate Now Button */}
          <li className="navbar-list-item">
            <a
              href="https://www.zeffy.com/en-US/donation-form/44131d7a-557e-4fdc-9a70-14e9f67206ef"
              target="_blank"
              rel="noopener noreferrer"
              className="donate-now-button"
            >
              Donate Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
