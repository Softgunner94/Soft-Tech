import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Projects.css";

const DEFAULT_PROJECTS = [
  {
    id: "saint-jane",
    name: "E-commerce Website",
    info:"Shop Online From Home",
    image: "/pro1.jpg",
    imageAlt: "E-commerce Website",
    href: "/portfolio/saint-jane",
  },
  {
    id: "barterhouse",
    name: "Positve Professionals Website",
    info:"An Accounting, Tax and Auditing firm",
    image: "/pro2.jpg",
    imageAlt: "Barterhouse bourbon bottle and glass",
    href: "https://www.positiveprofessional.org/",
  },
  {
    id: "smartwatch",
    name: "Movies Website",
    info:"Enjoy Your Latest Movies",
    image: "/pro3.webp",
    imageAlt: "White smartwatch with strap",
    href: "/portfolio/aria-smartwatch",
  },
  {
    id: "fourth-project",
    name: "Portfolio Website",
    info:"My Personal Portfolio Showcase",
    image: "/pro4.jpg",
    imageAlt: "Fourth project preview",
    href: "/portfolio/fourth-project",
  },
];

export default function Projects({
  heading = "Projects",
  ctaLabel = "View More Projects",
  ctaHref = "/portfolio",
  projects = DEFAULT_PROJECTS,
}) {
  const topRow = projects.slice(0, 3);
  const bottomRow = projects.slice(3, 4);

  return (
    <section className="projects-section">
      <Container>
        <div className="projects-section__header">
          <h2 className="projects-section__heading">{heading}</h2>
          <a href={ctaHref} className="projects-section__cta">
            <span>{ctaLabel}</span>
            <span className="projects-section__cta-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </a>
        </div>

        <Row className="projects-section__row projects-section__row--top">
          {topRow.map((project) => (
            <Col key={project.id} xs={12} sm={6} lg={4} className="projects-section__col">
              <ProjectCircle project={project} />
            </Col>
          ))}
        </Row>

        {bottomRow.length > 0 && (
          <Row className="projects-section__row projects-section__row--bottom">
            <Col xs={12} sm={6} lg={4} className="projects-section__col projects-section__col--centered">
              <ProjectCircle project={bottomRow[0]} />
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
}

function ProjectCircle({ project }) {
  return (
    <a
      href={project.href}
      className="projects-section__circle"
      aria-label={`View ${project.name} in portfolio`}
    >
      <img
        className="projects-section__image"
        src={project.image}
        alt={project.imageAlt}
      />
      <span className="projects-section__overlay" aria-hidden="true">
        <span className="projects-section__overlay-text">{project.name}</span>
        <p className="projects-section__overlay-info">{project.info}</p>
      </span>
    </a>
  );
}