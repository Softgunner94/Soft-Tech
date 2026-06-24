import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import Profile from "/soft2.PNG";

export default function AboutMe({
  eyebrow = "About Me",
  title = "Personal Details",
  description = `Front-End Engineer / Web Developer with 2+ years of experience building responsive, user-focused web applications. Skilled in developing scalable, high-performance interfaces using React.js, Next.js, Angular, TypeScript, JavaScript, HTML5, and CSS3. Experienced in creating admin dashboards, integrating REST APIs, optimizing application performance, and delivering modern, accessible web experiences.`,
  ctaLabel = "View Full Details",
  ctaHref = "#",
}) {
  return (
    <section className="about-me">
      <Container className="section_wrapper">
        <Row className="align-items-center about-me__row">
          {/* Image column */}
          <Col xs={12} lg={5} className="about-me__image-col">
            <div className="about-me__image-card">
                <img
                  className="about-me__image"
                  src={Profile}
                />
            </div>
          </Col>

          {/* Text column */}
          <Col xs={12} lg={7} className="about-me__text-col">
            <span className="about-me__eyebrow">{eyebrow}</span>
            <h2 className="about-me__title">{title}</h2>
            <p className="about-me__description">{description}</p>
            <Link to="/about">
            <Button className="about-me__cta">
              {ctaLabel}
            </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}