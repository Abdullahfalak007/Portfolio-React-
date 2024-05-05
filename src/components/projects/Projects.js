import React from "react";
import "./Projects.css";
export default function Projects() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../images/project-1.jpg")}
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Gmail Automation
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://github.com/Abdullahfalak007/Email-extraction-script-from-the-body-of-an-email-message-using-python', '_blank')"
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../images/project-3.png")}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Nordic Rose (Webpage)
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://github.com/Abdullahfalak007/Nordic-Rose.git', '_blank')"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://abdullahfalak007.github.io/Task-06/', '_blank')"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../images/project-2.jpg")}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Lead tracker (Extension)
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://github.com/Abdullahfalak007/Lead-Tracker-App.git', '_blank')"
                >
                  Github
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../images/project-4.png")}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Stripe (Webpage)
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://github.com/Abdullahfalak007/Task-08.git', '_blank')"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://abdullahfalak007.github.io/Task-08/', '_blank')"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src={require("../../images/Project-5.png")}
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Blog Website
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://github.com/Abdullahfalak007/Task-08.git', '_blank')"
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onclick="window.open('https://abdullahfalak007.github.io/Task-05/', '_blank')"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
