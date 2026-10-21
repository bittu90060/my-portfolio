
import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "ShopEase — E-Commerce Website",
    category: "Full Stack MERN",
    description:
      "A full-stack shopping platform with product browsing, cart management, user authentication, orders, and admin product management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "🛒",
    color: "blue",
    demo: "https://e-commerce-website-1-0bbs.onrender.com/",
    github: "https://github.com/bittu90060/E-Commerce-Website",
  },
  {
    title: "Job Portal Application",
    category: "Full Stack MERN",
    description:
      "A job portal where users can explore job opportunities and administrators can add and manage job listings.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "💼",
    color: "purple",
    demo: "",
    github: "https://github.com/bittu90060/Job-Portal-Application",
  },
  {
    title: "Expense Tracker",
    category: "Full Stack Application",
    description:
      "Track income and expenses, organize transactions, and understand personal spending through a simple dashboard.",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    icon: "💰",
    color: "green",
    demo: "https://expense-tracker-web-application-2.onrender.com/",
    github:
      "https://github.com/bittu90060/Expense-Tracker-Web-Application",
  },
  {
    title: "Student Management System",
    category: "Full Stack Application",
    description:
      "Manage student records with a web application built using React and a Node.js backend.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    icon: "🎓",
    color: "orange",
    demo: "https://student-management-system-1-k36b.onrender.com/",
    github: "https://github.com/bittu90060/student-management-system",
  },
  {
    title: "Video Call Application",
    category: "Real-Time Application",
    description:
      "A real-time video and audio calling application built with WebRTC and Socket.io.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC"],
    icon: "📹",
    color: "pink",
    demo: "",
    github: "https://github.com/bittu90060/video-call",
  },
  {
    title: "Wanderlust",
    category: "Airbnb Clone",
    description:
      "A travel listing application for exploring stays, with a full-stack architecture and user authentication.",
    tech: ["Node.js", "Express", "MongoDB", "EJS"],
    icon: "🌍",
    color: "cyan",
    demo: "",
    github: "https://github.com/bittu90060/wanderlust-project",
  },
];

function Projects() {
  return (
    <main className="projects-page">
      {/* <header className="projects-header">
        <span className="projects-eyebrow">MY WORK</span>
        <h1>
          Featured <span>Projects</span>
        </h1>
        <p>
          Real-world applications built with modern web technologies.
          Explore my projects, source code, and live demos.
        </p>
      </header> */}

      {/* <div className="projects-summary">
        <div>
          <strong>{projects.length}+</strong>
          <span>Projects</span>
        </div>
        <div>
          <strong>MERN</strong>
          <span>Full Stack</span>
        </div>
        <div>
          <strong>100%</strong>
          <span>Learning & Building</span>
        </div>
      </div> */}

      <section className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.color}`}
            key={project.title}
          >
            <div className="project-card-top">
              <div className="project-icon">{project.icon}</div>
              <span className="project-category">
                {project.category}
              </span>
            </div>

            <h2>{project.title}</h2>
            <p className="project-description">
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-actions">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  ↗ Live Demo
                </a>
              ) : (
                <span className="project-btn unavailable-btn">
                  Demo not added
                </span>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-btn github-btn"
              >
                GitHub ↗
              </a>
            </div>
          </article>
        ))}
      </section>

      {/* <footer className="projects-footer">
        <p>
          Interested in working together? Let's build something amazing.
        </p>
        <a href="/contact" className="contact-project-btn">
          Contact Me →
        </a>
      </footer> */}
    </main>
  );
}

export default Projects;
