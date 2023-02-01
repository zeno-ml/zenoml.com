import React from "react";
import Layout from "@theme/Layout";

export default function About() {
  let team = [
    {
      name: "Ángel Alexander Cabrera",
      role: "PhD Student",
      site: "cabreraalex.com",
      image: "alex.jpg",
    },
    {
      name: "Donald Bertucci",
      role: "Undergraduate Student",
      site: "https://www.donnybertucci.com/",
      image: "donnyb.jpg",
    },
    {
      name: "Erica Fu",
      role: "Undergraduate Student",
      site: "https://ericafu.me/",
      image: "ericaf.jpeg",
    },
    {
      name: "Tianqi Wu",
      role: "Masters Student",
      site: "https://tianqi-wu.github.io/",
      image: "tianqiw.png",
    },
    // {
    //   name: "Yi-Chen (Steven) Huang",
    //   role: "Research Scientist",
    //   site: "https://www.linkedin.com/in/yh3stevenhuang/",
    //   image: "steven.jpeg",
    // },
    {
      name: "Josh Zhou",
      role: "Undergraduate Student",
      site: "https://www.linkedin.com/in/josh-zhou-11501818b/",
      image: "josh.jpeg",
    },
    {
      name: "Ameet Talwalkar",
      role: "Associate Professor",
      site: "https://www.cs.cmu.edu/~atalwalk/",
      image: "ameet.jpeg",
    },
    {
      name: "Jason Hong",
      role: "Professor",
      site: "http://www.cs.cmu.edu/~jasonh/",
      image: "jason.png",
    },
    {
      name: "Adam Perer",
      role: "Assistant Research Professor",
      site: "https://perer.org",
      image: "adam.jpg",
    },
  ];
  return (
    <Layout title="About" description="About Zeno">
      <div
        style={{
          width: "900px",
          margin: "0px auto",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>About Us</h1>
        <p>
          Zeno is built by a team of researchers at Carnegie Mellon University.
        </p>
        <h1>Team</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {team.map((member) => (
            <PersonCard key={member.name} {...member} />
          ))}
        </div>
        <h1 style={{ marginTop: "20px" }}>Organizations & Sponsors</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <img
            src="/img/nsf.png"
            style={{ width: "300px", alignSelf: "center", marginRight: "50px" }}
          />
          <img
            src="/img/cmu.png"
            style={{ width: "150px", alignSelf: "center" }}
          />
        </div>
      </div>
    </Layout>
  );
}

function PersonCard(props) {
  return (
    <div style={{ padding: "10px", paddingLeft: "0px", width: "200px" }}>
      <img
        src={"/img/" + props.image}
        style={{ width: "200px", borderRadius: "10px", width: "175px" }}
      />
      <div style={{ maxWidth: "175px" }}>
        <a href={props.site}>
          <h2 style={{ margin: "0px" }}>{props.name}</h2>
        </a>
        <h4
          style={{
            marginTop: "5px",
            fontWeight: "500",
            color: "var(--ifm-menu-color)",
          }}
        >
          {props.role}
        </h4>
      </div>
    </div>
  );
}
