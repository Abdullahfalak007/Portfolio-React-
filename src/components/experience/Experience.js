import React from "react";
import "./Experience.css";

export default function Experience() {
  return (
    <div>
      <section id="experience">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Work Experience</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <h2 className="experience-sub-title project-title">
                Full Stack Developer
              </h2>
              <h3>Freelance</h3>
              <h4 className="date-duration">03/2024 - Present</h4>
              <div className="article-container">
                <ul>
                  <li>
                    Employed HTML5, CSS3, and Bootstrap for responsive design.
                  </li>
                  <li>
                    Enhanced site interactivity and performance using
                    JavaScript/TypeScript.
                  </li>
                  <li>Leveraged MySQL for robust database management.</li>
                  <li>Integrated Kendo UI to improve the user interface.</li>
                </ul>
              </div>
            </div>
            <div className="details-container color-container">
              <h2 className="experience-sub-title project-title">
                Web Scraping Specialist
              </h2>
              <h3>Fiverr</h3>
              <h4 className="date-duration">08/2023 - Present</h4>
              <div className="article-container">
                <ul>
                  <li>
                    Developed custom automation scripts to improve operational
                    efficiencies.
                  </li>
                  <li>
                    Utilized Python, Selenium, BeautifulSoup, Pywinauto, and
                    Requests for various tasks.
                  </li>
                  <li>
                    Designed automation frameworks to streamline tasks and
                    minimize errors.
                  </li>
                  <li>
                    Created web scraping tools to extract and process large
                    datasets.
                  </li>
                </ul>
              </div>
            </div>
            <div className="details-container color-container">
              <h2 className="experience-sub-title project-title">
                Intern, Software Engineer
              </h2>
              <h3>AmazeWorks Pvt. Ltd.</h3>
              <h4 className="date-duration">05/2022 - 08/2022</h4>
              <div className="article-container">
                <ul>
                  <li>
                    Participated in the development of Belgium's premier ERP
                    software, Odoo.
                  </li>
                  <li>
                    Customized frontend components to improve UX and
                    functionality.
                  </li>
                  <li>
                    Employed Python and XML extensively for UI design and
                    implementation.
                  </li>
                  <li>
                    Contributed to the integration of new modules and features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
