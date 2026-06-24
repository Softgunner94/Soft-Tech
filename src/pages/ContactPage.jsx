import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";

/*
 * ─────────────────────────────────────────────────────────────
 *  EMAILJS SETUP  (replace the three placeholders below)
 *  1. Sign up free at https://www.emailjs.com
 *  2. Add an Email Service  → copy the Service ID
 *  3. Create an Email Template with these variables:
 *       {{from_name}}  {{from_email}}  {{phone}}
 *       {{company}}    {{message}}
 *     → copy the Template ID
 *  4. Go to Account → API Keys → copy your Public Key
 * ─────────────────────────────────────────────────────────────
 */
const EMAILJS_SERVICE_ID = "service_ljjqzse";   // 🔑 replace
const EMAILJS_TEMPLATE_ID = "template_m9jgbz5";  // 🔑 replace
const EMAILJS_PUBLIC_KEY = "V3Jbo5b7MIfrbG-TA";   // 🔑 replace

const WHATSAPP_NUMBER = "2349057575411"; // country code without +

const ContactPage = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMsg("Please fill in Name, Email, and Message fields.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      company: formData.company,
      message: formData.message,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      <section className="contact">
        <div className="contact__container container-fluid">
          <div className="contact__section-wrapper">

            {/* ── Page heading ─────────────────────── */}
            <div className="contact__header text-center mb-5">
              <h2 className="contact__title">Let's Build Something Great Together</h2>
              <p className="contact__subtitle">
                Whether you're starting a new project, improving an existing website, or looking for a frontend developer to join your team, I'd love to hear from you. Reach out, and let's build something exceptional together.
              </p>
            </div>

            {/* ── Body ─────────────────────────────── */}
            <Row className="contact__body g-5 align-items-start">

              {/* Left — info panel */}
              <Col xs={12} md={5} lg={4}>
                <div className="contact__info">
                  <h3 className="contact__info-heading">Get in touch today</h3>
                  <p className="contact__info-text">
                    I'm open to freelance projects, contract work, and full-time opportunities. If you're looking for a developer who values clean code, performance, and user experience, let's connect and discuss your next project.
                  </p>

                  <ul className="contact__info-list">
                    <li>
                      <span className="contact__info-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <polyline points="2,4 12,13 22,4" />
                        </svg>
                      </span>
                      mayhourh@gmail.com
                    </li>
                    <li>
                      <span className="contact__info-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l.98-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      +234 9061960402
                    </li>
                    <li>
                      <span className="contact__info-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      Nigeria
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Right — form card */}
              <Col xs={12} md={7} lg={8}>
                <div className="contact__form-card">
                  <form ref={formRef} onSubmit={handleSubmit} noValidate>
                    <Row className="g-3">
                      <Col xs={12} sm={6}>
                        <div className="contact__field-group">
                          <label className="contact__label">Name <span className="contact__required">*</span></label>
                          <input
                            type="text"
                            name="name"
                            className="contact__input"
                            placeholder="John Carter"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>

                      <Col xs={12} sm={6}>
                        <div className="contact__field-group">
                          <label className="contact__label">Email <span className="contact__required">*</span></label>
                          <input
                            type="email"
                            name="email"
                            className="contact__input"
                            placeholder="example@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>

                      <Col xs={12} sm={6}>
                        <div className="contact__field-group">
                          <label className="contact__label">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            className="contact__input"
                            placeholder="(123) 456 - 789"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>

                      <Col xs={12} sm={6}>
                        <div className="contact__field-group">
                          <label className="contact__label">Company</label>
                          <input
                            type="text"
                            name="company"
                            className="contact__input"
                            placeholder="Facebook"
                            value={formData.company}
                            onChange={handleChange}
                          />
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="contact__field-group">
                          <label className="contact__label">Message <span className="contact__required">*</span></label>
                          <textarea
                            name="message"
                            className="contact__input contact__textarea"
                            placeholder="Please type your message here..."
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </Col>

                      {/* Status messages */}
                      {status === "success" && (
                        <Col xs={12}>
                          <div className="contact__alert contact__alert--success">
                            ✅ Message sent successfully! I'll get back to you soon.
                          </div>
                        </Col>
                      )}
                      {status === "error" && (
                        <Col xs={12}>
                          <div className="contact__alert contact__alert--error">
                            ❌ {errorMsg}
                          </div>
                        </Col>
                      )}

                      <Col xs={12} className="d-flex justify-content-end">
                        <button
                          type="submit"
                          className="contact__submit-btn"
                          disabled={status === "sending"}
                        >
                          {status === "sending" ? (
                            <span className="contact__spinner" />
                          ) : (
                            "Send message"
                          )}
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              </Col>
            </Row>
              {/* ── WhatsApp floating button ─────────────── */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cp-whatsapp-fab"
            aria-label="Chat with us on WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
              <path fill="#25D366" d="M256.064,0C114.656,0,0.048,114.624,0.048,256.032c0,45.104,11.856,89.008,34.4,127.856L0,512l131.024-34.368 c37.952,20.688,80.8,31.552,125.04,31.568c141.408,0,256.016-114.624,256.016-256.032 C512.048,114.624,397.472,0,256.064,0z" />
              <path fill="#FFFFFF" d="M386.688,126.336c-39.232-39.248-91.376-60.88-146.928-60.864c-114.464,0-207.568,93.104-207.584,207.568 c0,36.56,9.584,72.288,27.872,103.776L23.152,488.24l131.552-34.544c29.568,16.112,62.832,24.624,96.64,24.64h0.064 c114.48,0,207.552-93.104,207.584-207.552C447.584,217.776,425.936,165.584,386.688,126.336z M239.776,396.96 c-30.848,0.016-61.072-8.032-87.424-23.28L132.304,360.24l-47.536,12.48l12.672-46.336l-11.232-18.72 C55.456,298.544,50.72,267.552,50.752,236.432c0.064-96.8,78.864-175.6,175.712-175.6c46.912,0.016,91.072,18.256,124.192,51.456 c33.104,33.168,51.312,76.496,51.296,124.384C417.808,318.064,339.04,396.896,239.776,396.96z M342.336,296.64 c-5.28-2.656-31.328-15.488-36.176-17.264c-4.848-1.792-8.368-2.656-11.872,2.656c-3.52,5.312-13.6,17.264-16.688,20.816 c-3.088,3.568-6.176,3.968-11.456,1.328c-5.28-2.656-22.32-8.224-42.512-26.272c-15.712-14.048-26.32-31.424-29.408-36.688 c-3.088-5.248-0.32-8.128,2.288-10.736c2.32-2.32,5.296-6.048,7.936-9.056c2.64-3.024,3.52-5.184,5.296-8.624 c1.776-3.456,0.888-6.496-0.448-9.056c-1.328-2.56-11.872-28.56-16.272-39.088c-4.32-10.352-8.672-8.944-11.872-9.104 c-3.072-0.16-6.592-0.176-10.112-0.176c-3.52,0-9.248,1.328-14.112,6.64c-4.848,5.328-18.48,18.048-18.48,44.032 c0,25.984,18.912,51.056,21.552,54.496c2.656,3.44,36.72,56.096,89.024,78.592c12.432,5.376,22.144,8.576,29.728,10.992c12.528,4.016,23.92,3.456,32.96,2.096 c10.032-1.504,31.328-12.8,35.776-25.152c4.432-12.336,4.432-22.912,3.12-25.104C348.64,299.856,347.632,299.312,342.336,296.64z" />
            </svg>
            <span className="cp-whatsapp-tooltip">Chat on WhatsApp</span>
          </a>
          </div>
         
        </div>

      </section>
    </>
  );
};

export default ContactPage;