
import React from "react";
import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Frontend Development",
    description:
      "Responsive and modern user interfaces with smooth interactions and attractive designs.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "service-blue",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description:
      "Secure backend APIs, server-side logic, authentication, and database integration.",
    technologies: ["Node.js", "Express.js", "REST API"],
    color: "service-green",
  },
  {
    icon: "🚀",
    title: "MERN Stack Development",
    description:
      "Full-stack web applications connecting React frontends with Node.js and MongoDB.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    color: "service-purple",
  },
  {
    icon: "🛍️",
    title: "E-Commerce Websites",
    description:
      "Online shopping experiences with product listings, carts, orders, and admin features.",
    technologies: ["React", "Express", "MongoDB"],
    color: "service-pink",
  },
  {
    icon: "🔧",
    title: "Website Maintenance",
    description:
      "Fixing UI issues, debugging application errors, improving responsiveness, and updating existing code.",
    technologies: ["Debugging", "Git", "GitHub"],
    color: "service-orange",
  },
  {
    icon: "🧠",
    title: "DSA & C++ Problem Solving",
    description:
      "Practice algorithmic thinking, data structures, and programming problem-solving techniques.",
    technologies: ["C++", "DSA", "Algorithms"],
    color: "service-cyan",
  },
];

function Services() {
  return (
    <main className="services-page">
      <header className="services-header">
        <span className="services-eyebrow">WHAT I DO</span>
        <h1>
          My <span>Services</span>
        </h1>
        <p>
          I build modern, responsive, and scalable web applications
          using technologies from the MERN stack.
        </p>
      </header>

      <section className="services-grid">
        {services.map((service) => (
          <article
            className={`service-card ${service.color}`}
            key={service.title}
          >
            <div className="service-icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-technologies">
              {service.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </section>

      
    </main>
  );
}

export default Services;
