import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./Sidebar.css";

const Topbar = () => {
  return (
    <div className="sidebar" style={{fontSize:"12px"}}>
      <div className="profile-section">
        <div className="image-box">
          <img src="image\1000473721.png" alt="profile" />
          <span className="online"></span>
        </div>

        <h1>Bittu Kumar</h1>
        <h3 className="fs-6 ">Full Stack MERN Developer</h3>

        <div className="info">
          <p><i class="fa-solid fa-location-dot"></i>
 Siwan, Bihar, India</p>
          <p><i class="fa-regular fa-envelope"></i> bitukumar4220@gmail.com</p>
          <p><i class="fa-solid fa-phone"></i> 
 +919006002823</p>
          <a href="https://github.com/bittu90060" style={{textDecoration:"none"}} target="_blank"><p><i class="fa-brands fa-github"></i>
github.com/bittu90060</p></a>
        </div>

        <div className="language">
          <button className="active">Hindi</button>
          <button>English</button>
        </div>
      </div>
      <hr />

      <div className="menu">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-user"></i>
          <span>About</span>
        </NavLink>

        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-code"></i>
          <span>Skills</span>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-suitcase"></i>
          <span>Services</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-folder-open"></i>
          <span>Projects</span>
        </NavLink>

        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-star"></i>
          <span>Certifications</span>
        </NavLink>

        <NavLink
          to="/dsa"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-laptop-code"></i>
          <span>DSA (C++)</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "menu-item active" : "menu-item"
          }
        >
          <i className="fa-solid fa-envelope"></i>
          <span>Contact Me</span>
        </NavLink>
      </div>

      <div className="socal mt-3">
        <button className="btn btn-dark">
          <a href="https://github.com/bittu90060" target="_blank" style={{ color: "white" }}>
            <i class="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn btn-dark">
          <a href="https://www.linkedin.com/in/bittu-kumar-19856727b/?isSelfProfile=false" target="_blank" style={{ color: "white" }}>
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </button>
        <button className="btn btn-dark">
          <a href="https://www.instagram.com/bittu.kumar.509" target="_blank" style={{ color: "white" }}>
            <i class="fa-brands fa-instagram"></i>
          </a>
        </button>
        <button className="btn btn-dark">
          <a href="mailto:bitukuamr4220@gmail.com" target="_blank" style={{ color: "white" }}>
            <i class="fa-solid fa-envelope"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
