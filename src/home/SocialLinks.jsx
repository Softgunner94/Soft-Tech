import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import "./SocialLinks.css";

const DEFAULT_LINKS = [
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/18xE8vUX3d/?mibextid=wwXIfr",
    icon: <FaFacebookF />,
    className: "social-links__icon--facebook",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/soft_gunner?igsh=a2FxaGxwYTFlMGk0&utm_source=qr",
    icon: <FaInstagram />,
    className: "social-links__icon--instagram",
  },
  {
    id: "twitter",
    label: "Twitter",
    href: "https://twitter.com/",
    icon: <FaTwitter />,
    className: "social-links__icon--twitter",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
    className: "social-links__icon--linkedin",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/+2349057575411",
    icon: <FaWhatsapp />,
    className: "social-links__icon--whatsapp",
  },
  {
    id: "tiktok",
    label: "TikTok",
    href: "https://www.tiktok.com/",
    icon: <FaTiktok />,
    className: "social-links__icon--tiktok",
  },
];

export default function SocialLinks({ links = DEFAULT_LINKS }) {
  return (
    <section className="social-links">
      <div className="social-links__container">
        <ul className="social-links__list">
          {links.map((link) => (
            <li key={link.id} className="social-links__item">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                title={link.label}
                className={`social-links__icon ${link.className}`}
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}