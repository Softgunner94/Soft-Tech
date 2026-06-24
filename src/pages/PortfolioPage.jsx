import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PortfolioPage.css";

/**
 * PortfolioPage
 * -------------
 * A fully responsive "Recent Projects" portfolio section built with
 * React + Bootstrap 5. Renders 4 project cards in a 2x2 grid on desktop,
 * collapsing to a single column on smaller screens.
 *
 * HOW TO CUSTOMIZE:
 * - Edit the `projects` array below with your own project details.
 * - `githubUrl` should point to your GitHub PROFILE (or repo, if you prefer).
 * - `liveDemoUrl` should point to the live, deployed project.
 * - `image` should be a path/import to a thumbnail/screenshot for the project.
 */

// ---- Replace this with your real GitHub profile URL ----
const GITHUB_PROFILE_URL = "https://github.com/your-username";

const projects = [
  {
    id: 1,
    title: "Account,Tax and Audit Consultant Firm (2026)",
    description:
      "Developed a fully responsive Accounting, Tax, and Audit Consulting website featuring comprehensive service pages, company information, and a professional user experience optimized for performance and accessibility. Integrated a functional contact form for direct inquiries, along with WhatsApp contact support for instant client communication..",
    tags: ["React", "Node.js", "Vite", "Bootstraps"],
    image: "/portfolio.png",
    githubUrl: GITHUB_PROFILE_URL,
    liveDemoUrl: "https://www.positiveprofessional.org",
  },
  {
    id: 2,
    title: "E-Commerce Website (2026)",
    description:
      "Commercial e-commerce platform developed with full product catalog management, shopping cart functionality, secure checkout workflows, and integrated payment processing. Features user authentication, order management, and inventory tracking systems.",
    tags: ["React", "Node.js", "REST API", "CSS"],
    image: "/portfolio.png",
    githubUrl: GITHUB_PROFILE_URL,
    liveDemoUrl: "https://react-ecommerce-js-b5187.web.app",
  },
  {
    id: 3,
    title: "Real-Time Movies Website (2025)",
    description:
      "Developed a responsive real-time movie website with a modern, visually appealing interface, smooth animations, and an intuitive browsing experience. Integrated a movie API to automatically fetch and display the latest releases, trending movies, detailed information, and search results in real time.",
    tags: ["React", "Node.js", "REST API", "JavaScript (ES6+)"],
    image: "/portfolio.png",
    githubUrl: GITHUB_PROFILE_URL,
    liveDemoUrl: "https://your-chat-app-demo.example.com",
  },
  {
    id: 4,
    title: "Personal Portfolio Webstite (2026)",
    description:
      "A full-featured blogging platform with rich-text editing, comments, and role-based access control.",
    tags: ["React", "Node.js", "CSS", "Vite"],
    image: "/portfolio.png",
    githubUrl: GITHUB_PROFILE_URL,
    liveDemoUrl: "https://your-blog-platform-demo.example.com",
  },
];

function ProjectCard({ project }) {
  const { title, description, tags, image, githubUrl, liveDemoUrl } = project;

  return (
    <div className="col-12 col-md-6">
      <div className="project-card h-100">
        <div className="project-card-image-wrap">
          <img
            src={image}
            alt={`${title} preview`}
            className="project-card-image"
            loading="lazy"
          />
        </div>

        <div className="project-card-body">
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{description}</p>

          <div className="project-card-tags">
            {tags.map((tag, idx) => (
              <span className="project-tag" key={idx}>
                {tag}
              </span>
            ))}
          </div>

          <div className="project-card-actions">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn project-btn project-btn-github"
              aria-label={`View ${title} source code on GitHub`}
            >
              GitHub <span className="btn-arrow">&#8599;</span>
            </a>
            <a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn project-btn project-btn-demo"
              aria-label={`View live demo of ${title}`}
            >
              Live Demo <span className="btn-arrow">&#8599;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <section className="portfolio-section">
      <div className="container">
        <div className="portfolio-header text-center">
          <h2 className="portfolio-title">Recent Projects</h2>
          <p className="portfolio-subtitle">
            Here are some of the real-world projects I've built using the
            MERN stack.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}