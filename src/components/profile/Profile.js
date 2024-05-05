import React from "react";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container slideInLeft">
          <img
            src={require("../../images/profile-pic.jpg")}
            alt="Muhammad Abdullah profile picture"
          />
        </div>
        <div className="section__text slideInRight">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Muhammad Abdullah</h1>
          <p className="section__text__p2">
            Full Stack Developer | Software Engineer
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onclick="window.open('./assets/Muhammad-Abdullah-Resume-2024.pdf')"
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onclick="location.href='./#contact'"
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={require("../../images/linkedin.png")}
              alt="My LinkedIn profile"
              className="icon"
              onclick="window.open('https://www.linkedin.com/in/abdullahfalak007', '_blank')"
            />
            <img
              src={require("../../images/github.png")}
              alt="My Github profile"
              className="icon"
              onclick="window.open('https://github.com/Abdullahfalak007', '_blank')"
            />
            <img
              src={require("../../images/youtube.png")}
              alt="My Youtube channel"
              className="icon"
              onclick="window.open('https://www.youtube.com/c/FalakTechrary', '_blank')"
            />
            <img
              src={require("../../images/facebook.png")}
              alt="My Facebook profile"
              className="icon"
              onclick="window.open('https://www.facebook.com/abdullahfalak007', '_blank')"
            />
            <img
              src={require("../../images/instagram.png")}
              alt="My Instagram ID"
              className="icon"
              onclick="window.open('https://www.instagram.com/Abdullahfalak007/', '_blank')"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
