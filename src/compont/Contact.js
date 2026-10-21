import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        // "YOUR_TEMPLATE_ID",
         "service_z85ybum",
  "template_nro02ze",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "NSNNKESVB0XHy1CAD",
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message");
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contect-Postion">
      <h2>Contact Me</h2>
    <div className="col-6">
      <div className="offline-contect mb-5">
        <div className="contact-card-contect">
      <div className="contact-header">
        <div className="header-icon">
          <i className="fa-solid fa-user"></i>
        </div>

        <div>
          <h2>Get In Touch</h2>
          <p>
            I'm always open to discussing new projects,
            collaborations or opportunities.
            <br />
            Feel free to reach out!
          </p>
        </div>
      </div>

      <hr />

      <div className="contact-item">
        <div className="icon-circle purple">
          <i className="fa-solid fa-envelope"></i>
        </div>

        <div>
          <h4>Email</h4>
          <span>bitukumar4220@gmail.com</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="icon-circle green">
          <i className="fa-solid fa-phone"></i>
        </div>

        <div>
          <h4>Phone</h4>
          <span>+91 90060 02823</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="icon-circle yellow">
          <i className="fa-solid fa-location-dot"></i>
        </div>

        <div>
          <h4>Location</h4>
          <span>Siwan, Bihar, India</span>
        </div>
      </div>

      <div className="contact-item">
        <div className="icon-circle blue">
          <i className="fa-solid fa-calendar-days"></i>
        </div>

        <div>
          <h4>Availability</h4>
          <span className="available">Open to Work</span>
        </div>
      </div>
    </div>
      </div>
      <div className="Online-contect">
        <div className="connect-card">
  <div className="connect-header">
    <div className="header-icon">
      <i className="fa-solid fa-share-nodes"></i>
    </div>
    <h3>Connect With Me</h3>
  </div>

  <div className="social-row">
    <div className="social-icon github">
      <i className="fa-brands fa-github"></i>
    </div>

    <div className="social-info">
      <h4>GitHub</h4>
      <p>github.com/bittu90060</p>
    </div>

   <a href="https://github.com/bittu90060" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a> 
  </div>

  <div className="social-row">
    <div className="social-icon linkedin">
      <i className="fa-brands fa-linkedin-in"></i>
    </div>

    <div className="social-info">
      <h4>LinkedIn</h4>
      <p>linkedin.com/in/bittukumar</p>
    </div>

    <a href="https://www.linkedin.com/in/bittu-kumar-19856727b/?isSelfProfile=false" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
  </div>

  <div className="social-row">
    <div className="social-icon instagram">
      <i className="fa-brands fa-instagram"></i>
    </div>

    <div className="social-info">
      <h4>Instagram</h4>
      <p>instagram.com/bittu.kumar.509</p>
    </div>

    <a href="https://www.instagram.com/bittu.kumar.509" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
  </div>

  <div className="social-row">
    <div className="social-icon leetcode">
      <i className="fa-solid fa-code"></i>
    </div>

    <div className="social-info">
      <h4>LeetCode</h4>
      <p>leetcode.com/bittukumar</p>
    </div>

    <a href="" target="_blank"><i className="fa-solid fa-arrow-up-right-from-square link-icon"></i></a>
  </div>
</div>
      </div>
    </div>
    <div className="col-6 Send-maail-From">
    <div className="contact-container">
      <div className="contact-card">

        <h2 className="contact-title">
          📩 Send Me a Message
        </h2>

        <form ref={form} onSubmit={sendEmail}>

          <div className="row">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
          />

          <textarea
            name="message"
            rows="8"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            🚀 Send Message
          </button>

        </form>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Contact;