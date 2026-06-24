import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./MySkills.css";

/* ── Inline SVG tech logos ─────────────────────────────────────── */
const JavaScriptLogo = () => (
  <svg viewBox="0 0 128 128" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="128" fill="#F7DF1E" rx="6" />
    <path
      d="M112 30H16a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h96a2 2 0 0 0 2-2V32a2 2 0 0 0-2-2z"
      fill="#F7DF1E"
    />
    <path
      d="M66.77 86.24c1.49 2.44 3.43 4.23 6.86 4.23 2.88 0 4.72-1.44 4.72-3.43 0-2.38-1.89-3.22-5.06-4.6l-1.74-.75c-5.01-2.13-8.34-4.8-8.34-10.44 0-5.2 3.96-9.16 10.14-9.16 4.4 0 7.56 1.53 9.84 5.54l-5.39 3.46c-1.18-2.12-2.46-2.96-4.45-2.96-2.02 0-3.3 1.28-3.3 2.96 0 2.07 1.28 2.91 4.24 4.19l1.74.74c5.9 2.53 9.24 5.12 9.24 10.92 0 6.26-4.91 9.67-11.51 9.67-6.45 0-10.62-3.08-12.65-7.11l5.66-3.26zm-27.28.54c1.08 1.93 2.06 3.56 4.42 3.56 2.26 0 3.69-.88 3.69-4.32V62.7h6.95v23.52c0 7.12-4.17 10.36-10.26 10.36-5.5 0-8.69-2.85-10.31-6.27l5.51-3.53z"
      fill="#000"
    />
  </svg>
);

const HtmlLogo = () => (
  <svg viewBox="0 0 128 128" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <path fill="#E44D26" d="M19.37 114.44L8.17 0h111.67l-11.21 114.4L63.94 128z" />
    <path fill="#F16529" d="M64 118.67l36.89-10.22L109.63 11H64z" />
    <path
      fill="#EBEBEB"
      d="M64 52.67H45.15l-1.29-14.44H64V24H28.37l.34 3.76 3.43 38.51H64zm0 37.47l-.06.02-15.56-4.2-.99-11.12H33.24l1.96 21.94 28.74 7.98.06-.02z"
    />
    <path
      fill="#fff"
      d="M63.94 52.67v14.33h17.56l-1.65 18.51-15.91 4.29v14.9l28.76-7.97.21-2.38 3.3-36.93.34-3.75zm0-28.67v14.23h34.4l.29-3.16.65-7.31.34-3.76z"
    />
  </svg>
);

const CssLogo = () => (
  <svg viewBox="0 0 128 128" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
    <path fill="#1572B6" d="M19.37 114.44L8.17 0h111.67l-11.21 114.4L63.94 128z" />
    <path fill="#33A9DC" d="M64 118.67l36.89-10.22L109.63 11H64z" />
    <path
      fill="#fff"
      d="M64 52.67H28.8l1.04 11.66H64zm0-28.67H27.44l1.05 11.67H64zM64 80.14l-.06.02-15.56-4.2-.99-11.12H33.24l1.96 21.94 28.74 7.98.06-.02z"
    />
    <path
      fill="#EBEBEB"
      d="M64 52.67v11.66h17.22l-1.62 18.18-15.6 4.21v12.14l28.76-7.97.21-2.38 3.3-36.93.34-3.75zm0-28.67v11.67h33.79l.28-3.15.65-7.31.34-3.21z"
    />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 128 128" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
    <g fill="#61DAFB">
      <circle cx="64" cy="64" r="11.4" />
      <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13-1.2-21.9-9.6-26.6-8.5-4.8-19.3-1.9-30.2 7.7C50.9 7.4 40.2 4.4 31.7 9.2c-8.4 4.7-11.8 13.6-9.7 26.6.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.5-6.9 2.3C7.3 49.6 0 57.3 0 64s7.3 14.4 16.6 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13 1.2 21.9 9.6 26.6 2.5 1.4 5.2 2.1 8.1 2.1 6.4 0 13.7-3.3 20.8-9.3 7.1 6 14.4 9.3 20.8 9.3 2.9 0 5.6-.7 8.1-2.1 8.4-4.7 11.8-13.6 9.7-26.6-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.5 6.9-2.3 9.2-4.4 16.6-12.1 16.6-18.8s-7.3-14.4-16.7-18.8zM92.1 19.3c4.5 2.5 6.3 8.4 4.9 16.8-.3 1.9-.8 3.9-1.3 5.9-4.9-1.1-10.2-2-15.7-2.5-3.3-4.6-6.7-8.9-10.1-12.7 6.9-6.1 13.5-9.1 18.7-9.1 1.2 0 2.4.2 3.5.6zm-81 16.8c-1.4-8.4.4-14.3 4.9-16.8 5.1-2.9 11.8 0 18.9 6.3-3.4 3.8-6.7 8-10 12.5-5.5.5-10.8 1.4-15.7 2.5-.5-2-.9-3.9-1.1-4.5zM17.3 82.8c-4.5-2.2-10.1-6.7-10.1-18.8C7.2 52 12.8 47.5 17.3 45.2c1.9-.9 4-1.7 6.2-2.5 1.5 5.3 3.5 10.8 5.9 16.4-2.4 5.6-4.4 11.2-5.9 16.4-2.2-.7-4.3-1.6-6.2-2.7zm8.6 27.9c-4.5-2.5-6.3-8.4-4.9-16.8.3-1.9.8-3.9 1.3-5.9 4.9 1.1 10.2 2 15.7 2.5 3.3 4.6 6.7 8.9 10.1 12.7-6.9 6.1-13.5 9.1-18.7 9.1-1.2 0-2.4-.2-3.5-.6zm45.4-3.9c-2.1 2.2-4.2 4.2-6.3 6-2.1-1.8-4.2-3.8-6.3-6-2-2.1-3.9-4.4-5.8-6.6 3.9.2 7.9.3 12.1.3s8.2-.1 12.1-.3c-1.9 2.2-3.8 4.5-5.8 6.6zm14.3-18.1c-4.2.5-8.6.7-13 .7-4.4 0-8.8-.2-13-.7-2.8-4-5.4-8.2-7.7-12.6-2.3-4.4-4.4-8.9-6-13.3 1.6-4.4 3.7-8.9 6-13.3 2.3-4.4 4.9-8.6 7.7-12.6 4.2-.5 8.6-.7 13-.7 4.4 0 8.8.2 13 .7 2.8 4 5.4 8.2 7.7 12.6 2.3 4.4 4.4 8.9 6 13.3-1.6 4.4-3.7 8.9-6 13.3-2.3 4.4-4.9 8.6-7.7 12.6zm28.7-4.1c2.4-5.6 4.4-11.2 5.9-16.4 2.2.8 4.3 1.6 6.2 2.5 4.5 2.2 10.1 6.7 10.1 18.8 0 12.1-5.6 16.6-10.1 18.8-1.9.9-4 1.7-6.2 2.5-1.5-5.3-3.5-10.8-5.9-16.4v-9.8zm5.9-50.4c-1.4-8.4.4-14.3 4.9-16.8 1.1-.4 2.3-.6 3.5-.6 5.2 0 11.8 3 18.7 9.1-3.3 3.8-6.7 7.9-10 12.5-5.5.5-10.8 1.4-15.7 2.5-.5-1.9-.9-4.4-1.4-6.7z" />
    </g>
  </svg>
);

const CodingLogo = () => (
  <svg viewBox="0 0 24 24" width="52" height="52" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="2" x2="12" y2="22" />
  </svg>
);

/* ── Data ──────────────────────────────────────────────────────── */
const techLogos = [
  { id: 1, label: "JavaScript", Logo: JavaScriptLogo },
  { id: 2, label: "HTML5",      Logo: HtmlLogo },
  { id: 3, label: "CSS3",       Logo: CssLogo },
  { id: 4, label: "React JS",   Logo: ReactLogo },
  { id: 5, label: "Coding",     Logo: CodingLogo },
];

const leftSkills = [
  { name: "UI Design",       pct: 85 },
  { name: "React.js / Next.js",  pct: 90 },
  { name: "TypeScript / JavaScript",   pct: 90 },
];

const rightSkills = [
  { name: "REST API / GraphQL",          pct: 85 },
  { name: "HTML5 / CSS3 / Tailwind",   pct: 95 },
  { name: "Angular / Single-SPA",   pct: 85 },
];


/* ── Component ────────────────────────────────────────────────── */
const MySkills = () => {
  return (
    <section className="myskills">
      <div className="myskills__container container-fluid">
        <div className="myskills__section-wrapper">

          {/* ── Header row ─────────────────────────── */}
          <Row className="myskills__header align-items-start g-4 mb-4">
            <Col xs={12} md={6}>
              <span className="myskills__eyebrow">My Professional</span>
              <h2 className="myskills__heading">
                Background Skills and<br />Accomplishments
              </h2>
            </Col>
            <Col xs={12} md={6} className="myskills__desc-col">
              <p className="myskills__desc">
                Built responsive, high-performance web applications using modern frontend technologies with a focus on usability and scalability. Successfully delivered projects from design to deployment while optimizing performance and user experience.
              </p>
            </Col>
          </Row>

          {/* ── Logo bubbles ───────────────────────── */}
          <Row className="myskills__logos-row g-3 mb-5 justify-content-center">
            {techLogos.map(({ id, label, Logo }) => (
              <Col key={id} xs={6} sm={4} md={2} className="d-flex justify-content-center">
                <div className="myskills__logo-bubble" aria-label={label}>
                  <Logo />
                  <span className="myskills__logo-label">{label}</span>
                </div>
              </Col>
            ))}
          </Row>

          {/* ── Skill bars ─────────────────────────── */}
          <Row className="myskills__bars-row g-4">
            {/* Left column */}
            <Col xs={12} md={6}>
              {leftSkills.map(({ name, pct }) => (
                <div key={name} className="myskills__skill-item">
                  <div className="myskills__skill-header">
                    <span className="myskills__skill-name">{name}</span>
                    <span className="myskills__skill-pct">{pct}%</span>
                  </div>
                  <div className="myskills__track">
                    <div className="myskills__fill" style={{ width: `${pct}%` }}>
                      <span className="myskills__thumb" />
                    </div>
                  </div>
                </div>
              ))}
            </Col>

            {/* Right column */}
            <Col xs={12} md={6}>
              {rightSkills.map(({ name, pct }) => (
                <div key={name} className="myskills__skill-item">
                  <div className="myskills__skill-header">
                    <span className="myskills__skill-name">{name}</span>
                    <span className="myskills__skill-pct">{pct}%</span>
                  </div>
                  <div className="myskills__track">
                    <div className="myskills__fill" style={{ width: `${pct}%` }}>
                      <span className="myskills__thumb" />
                    </div>
                  </div>
                </div>
              ))}

              
            </Col>
          </Row>

        </div>
      </div>
    </section>
  );
};

export default MySkills;