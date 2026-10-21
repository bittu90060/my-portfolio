import React from "react";
import "./Skill.css";

const skills = [
  { name: "HTML", percent: 95, icon: "🌐" },
  { name: "CSS", percent: 90, icon: "🎨" },
  { name: "JavaScript", percent: 90, icon: "🟨" },
  { name: "React.js", percent: 85, icon: "⚛️" },
  { name: "Node.js", percent: 80, icon: "🟢" },

  { name: "Express.js", percent: 80, icon: "🚀" },
  { name: "MongoDB", percent: 80, icon: "🍃" },
  { name: "Git & GitHub", percent: 90, icon: "🔀" },
  { name: "Tailwind CSS", percent: 85, icon: "💨" },
  { name: "Bootstrap", percent: 85, icon: "🅱️" },

  { name: "Material UI", percent: 80, icon: "📘" },
  { name: "Python", percent: 75, icon: "🐍" },
  { name: "DSA (C++)", percent: 85, icon: "💻" },
  { name: "C++", percent: 90, icon: "⚙️" },
  { name: "Java", percent: 80, icon: "☕" },
];

function Skills() {
  return (
    <div className="Skill-container">
    <section className="skills-section">
      <div className="container">
        <h2>My Skills</h2>
        <p>Technologies and tools I work with</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>

              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

              <span>{skill.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}

export default Skills;
