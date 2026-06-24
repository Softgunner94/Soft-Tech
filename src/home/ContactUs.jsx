import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

export default function ContactUs({
  heading = "Let's Get In Touch",
  description = `I'm always interested in new opportunities and collaborations.
    Whether you have a project in mind or just want to connect, feel free
    to reach out. Let's build something amazing together!`,
  ctaLabel = "Contact",
  ctaTo = "/contact",
  backgroundVideo = "/video.mp4",
}) {
  return (
    <section className="contact-banner">
        <video
        className="contact-banner__video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="contact-banner__bubble-wrap">
        <div className="contact-banner__bubble">
          <h2 className="contact-banner__heading">{heading}</h2>
          <span className="contact-banner__underline" aria-hidden="true" />
          <p className="contact-banner__description">{description}</p>
          <Link to={ctaTo} className="contact-banner__cta">
            {ctaLabel}
          </Link>
        </div>
        <span className="contact-banner__tail" aria-hidden="true" />
      </div>
    </section>
  );
}