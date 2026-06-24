import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutPage.css";

/**
 * AboutPage
 * ---------
 * A fully responsive "About Me" section built with React + Bootstrap 5.
 * Image on the left, intro text + resume download button on the right.
 * Stacks vertically (image on top) on small/mobile screens.
 *
 * HOW TO CUSTOMIZE:
 * - Replace `profileImage` with the path/import to your own photo.
 * - Replace `resumeFile` with the path to your actual resume PDF.
 *   (Place the file in your project's /public folder, e.g. /public/resume.pdf,
 *   then reference it here as "/resume.pdf".)
 * - Edit the paragraphs in the JSX below with your own bio copy.
 */

const profileImage =
  "/profile.jpeg";
const resumeFile = "/Mayowa Abiodun CV -Software.docx";

export default function AboutPage() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Photo */}
          <div className="col-12 col-lg-5">
            <div className="about-image-wrap">
              <img
                src={profileImage}
                alt="Portrait photo"
                className="about-image"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="col-12 col-lg-7">
            <h2 className="about-title">About Me</h2>

            <p className="about-paragraph">
              I am a Front-End Engineer and Web Developer with over 2 years of experience designing and building responsive, user-friendly, and high-performance web applications. I specialize in creating modern digital experiences that are visually appealing, functional, and optimized for performance across desktops, tablets, and mobile devices..
            </p>

            <p className="about-paragraph">
              Throughout my experience, I have successfully developed fully functional e-commerce websites with features such as product listings, shopping carts, product filtering, responsive layouts, and intuitive user interfaces that enhance the customer shopping experience. I have also built professional websites for accounting, tax, and audit consulting firms, focusing on clean design, accessibility, and clear presentation of business services to establish a strong online presence.
            </p>

            <p className="about-paragraph">
              My expertise includes developing dynamic web applications using React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, and Tailwind CSS. I have hands-on experience integrating REST APIs to retrieve and display real-time data, implementing secure authentication systems for user registration and login, managing protected routes, handling application state, and building reusable, maintainable components that improve scalability and code quality.
             </p>

             <p className="about-paragraph">
              My technical toolkit includes React.js, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, SCSS, Tailwind CSS, REST APIs, Git, GitHub, Vite, Firebase Authentication (if applicable), React Router, Context API, Axios/Fetch API, and modern frontend development practices. I follow clean coding principles and build applications with a strong focus on responsiveness, accessibility, maintainability, and an excellent user experience.
             </p>

             <p className="about-paragraph">
              I am passionate about solving real-world problems through technology and continuously expanding my knowledge of modern frontend development. I enjoy learning new tools and best practices, improving application performance, and leveraging AI-assisted development to write cleaner code, streamline workflows, and deliver reliable, scalable web applications that meet both user and business needs.
             </p>
            <a
              href={resumeFile}
              download
              className="btn about-resume-btn"
              aria-label="Download resume"
            >
              Download Resume <span className="resume-icon">&#8595;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}