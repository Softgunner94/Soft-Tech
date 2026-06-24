import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

const DEFAULT_SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building enterprise-grade web applications using React.js, Next.js, Angular, and TypeScript. Expertise in micro-frontend architecture, Single-SPA, NX Monorepo with Module Federation, and performance optimization.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="8 18 4 12 8 6" />
        <line x1="14.5" y1="4" x2="9.5" y2="20" />
        <polyline points="16 6 20 12 16 18" />
      </svg>
    ),
  },
  {
    id: "ui-ux",
    title: "Ui/Ux Implementation",
    description:
      "Translating wireframes and mockups into responsive, user-friendly interfaces. Proficient in HTML5, CSS3, SCSS, Tailwind CSS, and cross-browser compatibility.",
    icon: (
      <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l4 5-4 15-4-15 4-5z" />
        <path d="M3 9h18" />
      </svg>
    ),
  },
  {
    id: "desktop-apps",
    title: "Desktop Apps",
    description:
      "Developing cross-platform desktop applications using Tauri framework, delivering high-performance native apps with web technologies.",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 9a7 7 0 0 1 14 0" />
        <rect x="3" y="9" width="18" height="9" rx="2" />
        <line x1="8.5" y1="5" x2="7.5" y2="3.5" />
        <line x1="15.5" y1="5" x2="16.5" y2="3.5" />
        <circle cx="8.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="15.5" cy="13" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Services({
  heading = "Services",
  services = DEFAULT_SERVICES,
}) {
  return (
    <section className="services">
      <Container>
        <div className="services__header">
          <h2 className="services__heading">{heading}</h2>
          <span className="services__heading-underline" aria-hidden="true" />
        </div>

        <Row className="services__row">
          {services.map((service) => (
            <Col key={service.id} xs={12} md={6} lg={4} className="services__col">
              <div className="services__card">
                <span className="services__icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3 className="services__title">{service.title}</h3>
                <span className="services__title-underline" aria-hidden="true" />
                <p className="services__description">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}