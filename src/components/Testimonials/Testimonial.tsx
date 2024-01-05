import React from "react";

interface TestimonialProps {
  name: string;
  message: string;
  project: string;
}

export function Testimonial({ name, message, project }: TestimonialProps) {
  return (
    <div className="testimonial">
      <p style={{ fontStyle: "italic" }}>{message}</p>
      <h3>{name}</h3>
      <a style={{ color: "white", fontVariant: "small-caps" }} href={project}>
        explore project →
      </a>
    </div>
  );
}
