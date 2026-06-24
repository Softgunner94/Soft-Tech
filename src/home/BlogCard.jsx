import React, { useState } from "react";

export default function BlogCard({ post }) {
  const [flipped, setFlipped] = useState(false);

  const toggleFlip = () => setFlipped((prev) => !prev);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  return (
    <div className="blog-card__col">
      <div
        className={`blog-card ${flipped ? "blog-card--flipped" : ""}`}
        onClick={toggleFlip}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${post.title}. Press to ${flipped ? "see summary" : "read more"}.`}
      >
        <div className="blog-card__inner">
          {/* ---------- FRONT FACE ---------- */}
          <div className="blog-card__face blog-card__face--front">
            <div className="blog-card__image-wrap">
              <img
                className="blog-card__image"
                src={post.image}
              />
            </div>

            <div className="blog-card__meta">
              <img
                className="blog-card__avatar"
                src={post.author.avatar}
                alt={post.author.name}
              />
              <span className="blog-card__author">{post.author.name}</span>
              <span className="blog-card__date">{post.date}</span>
              <span className="blog-card__stat">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
                </svg>
                {post.likes}
              </span>
              <span className="blog-card__stat">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                {post.comments}
              </span>
            </div>

            <h3 className="blog-card__title">{post.title}</h3>
            <p className="blog-card__excerpt">{post.excerpt}</p>

            <span className="blog-card__hint">Click to read more</span>
          </div>

          {/* ---------- BACK FACE ---------- */}
          <div className="blog-card__face blog-card__face--back">
            <h3 className="blog-card__back-title">{post.title}</h3>
            <p className="blog-card__back-text">{post.fullText}</p>
            <a
              href={BlogCard}
              className="blog-card__cta"
              onClick={(e) => e.stopPropagation()}
            >
              Read Full Article
            </a>
            <span className="blog-card__hint">Click to flip back</span>
          </div>
        </div>
      </div>
    </div>
  );
}