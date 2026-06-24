import React from "react";
import { Container, Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import "./OurBlog.css";


const AVATAR =
  "https://placehold.co/64x64/ffd9c2/8a4b2f?text=MW";

const DEFAULT_POSTS = [
  {
    id: "self-doubt-and-fear",
    image: "/night.jpg",
    author: { name: "Samuel Scott", avatar: AVATAR },
    date: "10th Dec",
    likes: 1590,
    comments: 84,
    title: "Break Through Self Doubt And Fear",
    excerpt:
      "Dream interpretation has many forms; it can be done be done for the sake of fun, hobby or can be taken up as a serious career.",
    fullText:
      "Dream interpretation has many forms; it can be done for the sake of fun, as a hobby, or pursued as a serious career. Understanding the patterns behind doubt and fear helps you recognize what's holding you back, and gives you a starting point for moving past it with intention.",
    href: "#",
  },
  {
    id: "portable-fashion",
    image: "/York.jpg",
    author: { name: "Mark Wiens", avatar: AVATAR },
    date: "30th Dec",
    likes: 1500,
    comments: 72,
    title: "Portable Fashion For Young Women",
    excerpt:
      "You may be a skillful, effective employer but if you don't trust your personnel and the opposite, then the chances of improving.",
    fullText:
      "You may be a skillful, effective employer, but if you don't trust your personnel — and the feeling isn't mutual — the chances of improving and expanding the business shrink fast. Trust, much like fashion, has to be portable: built to move with you wherever the work takes you.",
    href: "#",
  },
  {
    id: "dreams-premonition",
    image: "/Chicago.jpg",
    author: { name: "Joshua Smith", avatar: AVATAR },
    date: "13th Jan",
    likes: 2000,
    comments: 76,
    title: "Do Dreams Serve As A Premonition",
    excerpt:
      "So many of us are demotivated to achieve anything. Such people are not enthusiastic about anything. They don't want to work involved.",
    fullText:
      "So many of us are demotivated to achieve anything. Such people aren't enthusiastic about anything and don't want to get involved in the work it takes. Whether dreams genuinely serve as a premonition is debatable — but the motivation they stir in us is real enough to act on.",
    href: "#",
  },
];

export default function OurBlog({
  heading = "Latest Posts From Our Blog",
  subheading = `You may be a skillful, effective employer but if you don't trust your
    personnel and the opposite, then the chances of improving and expanding
    the business`,
  posts = DEFAULT_POSTS,
}) {
  return (
    <section className="our-blog">
      <Container>
        <div className="our-blog__header">
          <h2 className="our-blog__heading">{heading}</h2>
          <p className="our-blog__subheading">{subheading}</p>
        </div>

        <Row className="our-blog__row">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </Row>
      </Container>
    </section>
  );
}