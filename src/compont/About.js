import React from "react";
import "./About.css";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaBullseye,
  FaStar,
  FaCheckCircle,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const features = [
  "Passionate about coding",
  "Problem solving",
  "Quick learner",
  "Team player",
  "Clean code practices",
  "Good communication",
];

const educationData = [
  {
    title: "BCA (AI & ML)",
    institute: "uttaranchal university",
    year: "2024 - Present",
  },
  {
    title: "Class 12th",
    institute: "Z.A. Islamia P.G. College, Siwan",
    year: "2019",
  },
  {
    title: "Class 10th",
    institute: "Gaya Das Kabir High School in Siwan",
    year: "2016",
  },
];

function About() {
  return (
    <div className="About-container">
      <div className="row">
        <div className="col-7">
          <h1>
            <i className="fa-solid fa-user" style={{ color: "#00A4FF" }}></i>{" "}
            About Me
          </h1>
          <div className="about-line mb-1"></div>

          <h2 className="mt-4">
            Hello! I'm <span style={{ color: "#00A4FF" }}>Bittu Kumar</span>
          </h2>
          <p>
            I am a passionate Full Stack MERN Developer from{" "}
            <span style={{ color: "yellow" }}>Siwan, Bihar, India.</span>
            <br></br>I am currently pursuing a
            <span style={{ color: "#00D9FF" }}>
              {" "}
              BCA in Artificial Intelligence, while ML stands for Machine
              Learning.
            </span>
            <br></br>I love building modern, responsive and user-friendly web
            applications.
          </p>
        </div>
        <div className="col-5">
          <img
            src="image\LeaveHome\Aboutman.png"
            style={{ width: "110%" }}
            className="Abour-image"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5 My-skills-about">
          <span className="fs-2 mt-0 mb-0">
            <img src="image\LeaveHome\Reket.png" style={{ width: "13%" }} />
            Skills
          </span>

          <div style={{ display: "flex" }}>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\image.png" style={{ width: "30%" }} />
              HTML5
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\css.png" style={{ width: "30%" }} />
              CSS3
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\js.png" style={{ width: "30%" }} />
              JavaScript
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\react.png" style={{ width: "30%" }} />
              React.js
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\node.png" style={{ width: "30%" }} />
              Node.js
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\express.png" style={{ width: "30%" }} />
              Express.js
            </button>
          </div>
          <div style={{ display: "flex" }}>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\mongoDb.png" style={{ width: "28%" }} />
              MongoDB
            </button>
            <button
              type="button"
              className=" MongoDB-Atlas btn btn-outline-light btn-outline-light-about"
            >
              <img
                src="image\LeaveHome\momgoDB alter.png"
                style={{ width: "30%" }}
              />
              MongoDB Atlas
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about "
            >
              <img
                src="image\LeaveHome\github.png"
                style={{ width: "30%", padding: "0" }}
              />
              Git & GitHub
            </button>
          </div>
          <div style={{ display: "flex" }} className="mb-4">
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\restAPI.png" style={{ width: "30%" }} />
              REST APIs
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\MERN.png" style={{ width: "30%" }} />
              MERN Stack
            </button>
            <button
              type="button"
              className="btn btn-outline-light btn-outline-light-about"
            >
              <img src="image\LeaveHome\Taminal.png" style={{ width: "30%" }} />
              Tailwind CSS
            </button>
          </div>
        </div>

        <div className="col-3 personal-about">
          <h2 className="card-title fs-5 mt-2">
            <i className="fa-solid fa-user title-icon"></i>
            Personal Information
          </h2>
          <div>
            <div className="info-row mt-3">
              <span className="label">
                <i
                  className="fa-solid fa-user icon"
                  style={{ color: "#0090F2" }}
                ></i>
                Name
              </span>
              <span className="colon">:</span>
              <span className="value">Bittu Kumar</span>
            </div>
            <div className="info-row">
              <span className="label">
                {" "}
                <i
                  className="fa-solid fa-briefcase icon"
                  style={{ color: "#5254F9" }}
                ></i>
                Role
              </span>
              <span className="colon">:</span>
              <span className="value">Full Stack MERN Developer</span>
            </div>

            <div className="info-row">
              <span className="label">
                {" "}
                <i
                  className="fa-solid fa-location-dot icon"
                  style={{ color: "red" }}
                ></i>
                Location
              </span>
              <span className="colon">:</span>
              <span className="value">Siwan, Bihar, India</span>
            </div>

            <div className="info-row">
              <span className="label">
                <i
                  className="fa-solid fa-graduation-cap icon"
                  style={{ color: "#00CD55" }}
                ></i>
                Education
              </span>
              <span className="colon">:</span>
              <span className="value">
                Bachelor of Computer Applications (AI & ML)
              </span>
            </div>

            <div className="info-row">
              <span className="label">
                <i
                  className="fa-solid fa-language icon"
                  style={{ color: "#0090F2" }}
                ></i>
                Languages
              </span>
              <span className="colon">:</span>
              <span className="value">Hindi, English</span>
            </div>

            <div className="info-row">
              <span className="label">
                <i
                  className="fa-solid fa-globe icon"
                  style={{ color: "#0090F2" }}
                ></i>
                Nationality
              </span>
              <span className="colon">:</span>
              <span className="value">Indian</span>
            </div>
          </div>
        </div>
        <div className="col-4 education-card-box">
          <div className="education-card">
            <div className="education-header">
              <FaGraduationCap className="header-icon" />
              <h2>Education</h2>
            </div>

            {educationData.map((item, index) => (
              <div
                className={`education-item ${
                  index !== educationData.length - 1 ? "border-bottom" : ""
                }`}
                key={index}
              >
                <div className="timeline"></div>

                <div className="education-content">
                  <h3>{item.title}</h3>

                  <p>{item.institute}</p>

                  <div className="year">
                    <FaCalendarAlt />
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 main-career-card">
          <div className="career-card">
            <div className="career-content">
              <div className="career-title">
                <FaBullseye className="career-icon" />
                <h2>Career Objective</h2>
              </div>

              <p>
                To obtain a challenging position in a growth-oriented
                organization where I can apply my technical knowledge, enhance
                my skills and contribute to the success of the organization
                while growing with it.
              </p>
            </div>

            <div className="career-image">
              <img src="/image/LeaveHome/pngwing.com.png" alt="Target" />
            </div>
          </div>
        </div>
        <div className="col-4 contact-card-about">
          <div className="contact-card">
            <div className="contact-title">
              <FaUserAlt className="title-icon" />
              <h2>Contact Information</h2>
            </div>

            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>bitukumar4220@gmail.com</span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="icon" />
              <span>+91 9006002823</span>
            </div>

            <div className="contact-item">
              <FaGithub className="icon" />
              <span>github.com/bittu90060</span>
            </div>

            <div className="contact-item">
              <FaLinkedin className="icon" />
              <span>linkedin.com/in/bittu-kumar-19856727b</span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="icon" />
              <span>Siwan, Bihar, India</span>
            </div>
          </div>
        </div>
        <div className="col-4 why-card-about">
          <div className="why-card">
            <div className="why-content">
              <div className="why-title">
                <FaStar className="star-icon" />
                <h2>Why Choose Me?</h2>
              </div>

              <div className="feature-grid">
                {features.map((item, index) => (
                  <div className="feature-item" key={index}>
                    <FaCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="why-image">
              <img src="/image/LeaveHome/pngwing.com.png" alt="Target" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
