import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const NAV_LINKS = [
  { Link: "Home", path: "/" },
  { Link: "About", path: "/about" },
  { Link: "Portfolio", path: "/portfolio" },
];



export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-navbar ${scrolled ? "site-navbar--scrolled" : ""}`}
    >
      <Container className="site-navbar__container">
        <Navbar.Brand as={NavLink} to="/" className="site-navbar__brand" onClick={closeMenu}>
          <span className="site-navbar__wordmark"><img src="./logo1.png" alt="" width={100} /></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-label="Toggle navigation" className="site-navbar__toggle">
          <span className="site-navbar__burger" />
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav" className="site-navbar__collapse">
          <Nav className="site-navbar__nav">
            {NAV_LINKS.map((link) => (
              <Nav.Link
                key={link.path}
                as={NavLink}
                to={link.path}
                end={link.path === "/"}
                className="site-navbar__link"
                onClick={closeMenu}
              >
                {link.Link}
              </Nav.Link>
            ))}


            <Nav.Link
              as={NavLink}
              to="/contact"
              className="site-navbar__link site-navbar__link--contact"
              onClick={closeMenu}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}