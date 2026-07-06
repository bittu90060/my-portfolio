import React from "react";
import "./Skill.css";

function skills() {
  return (
    <div>
      <div>
        <div className="col-4">
         <div className="skill-card">
      <img
        src="image\Html.png"
        alt="HTML"
        className="skill-icon"
      />

      <h4 className="skill-name">HTML</h4>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: "95%" }}></div>
      </div>

      <span className="progress-text">95%</span>
    </div>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default skills;
