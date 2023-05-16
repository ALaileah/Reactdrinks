import React from "react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { FaBars } from "react-icons/fa";

const routes = ["drinks", "about", "contacts", undefined];
const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname.split("/")[1];

  console.log(pathname);
  if (!(routes.includes(pathname) || !pathname)) {
    return null;
  }

  return (
    <div className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1 href="/" className="section-title">
            My Drinks App
          </h1>
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contacts">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
