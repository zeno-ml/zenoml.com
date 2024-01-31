import React from "react";

interface TestimonialProps {
  name: string;
  message: string;
  project: string;
  link: string;
  image: string;
}

export function Testimonial({ name, message, project, link, image }: TestimonialProps) {
  return (
    <div style={{ width: "50%" }}>
      <p style={{ fontStyle: "italic" }}>{message}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <h3>{name}</h3>
        <img src={image} style={{ height: "24px" }} />
      </div>
      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        {link ? (
          <a style={{ color: "white", fontVariant: "small-caps" }} href={link}>
            read more →
          </a>
        ) : (
          <></>
        )}
        <a style={{ color: "white", fontVariant: "small-caps" }} href={project}>
          explore with zeno →
        </a>
      </div>
    </div>
  );
}
