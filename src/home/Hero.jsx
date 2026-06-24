import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Hero.css";
import Image from "/soft.PNG";
import SocialLinks from "../home/SocialLinks";

export default function Hero({
  eyebrow = "Hey There'",
  name = "i'm Abiodun oluwamayowa",
  description = "Front-End Engineer/Web Developer",
  ctaLabel = "Hire Me",
  ctaHref = "#",
 
}) {
  return (
    <section className="hero">
      <Container>
        <Row className="align-items-center hero__row">
          {/* Text column */}
          <Col xs={12} lg={6} className="hero__text-col">
            <span className="hero__eyebrow">{eyebrow}</span>
            <span className="services__heading-underline" aria-hidden="true" />
            <h1 className="hero__title">{name}</h1>
            <p className="hero__description">{description}</p>
           <Link to="/contact"><Button className="hero__cta">
              {ctaLabel}
            </Button>
            </Link>
            <div>
              <SocialLinks />
            </div>
          </Col>

          {/* Image column */}
          <Col xs={12} lg={6} className="hero__image-col">
            <div className="hero__art">
              <span className="hero__glow" aria-hidden="true" />
              <span className="hero__frame" aria-hidden="true" />

              <svg
                className="hero__dots"
                viewBox="0 0 460 520"
                aria-hidden="true"
                focusable="false"
              >
                <circle cx="40" cy="60" r="7" className="hero__dot hero__dot--lg" />
                <circle cx="95" cy="120" r="4" className="hero__dot hero__dot--sm" />
                <circle cx="55" cy="200" r="9" className="hero__dot hero__dot--lg" />
                <circle cx="120" cy="170" r="5" className="hero__dot hero__dot--sm" />
                <circle cx="65" cy="295" r="6" className="hero__dot hero__dot--md" />
                <circle cx="140" cy="330" r="9" className="hero__dot hero__dot--lg" />
                <circle cx="370" cy="80" r="4" className="hero__dot hero__dot--sm" />
                <circle cx="420" cy="130" r="6" className="hero__dot hero__dot--md" />
                <circle cx="385" cy="200" r="5" className="hero__dot hero__dot--sm" />
                <circle cx="435" cy="255" r="8" className="hero__dot hero__dot--lg" />
              </svg>

              <img
                className="hero__image"
                src={Image}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}