import React from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";

export default function About() {
  const citation = `
@inproceedings{cabrera23zeno,
  author = {Cabrera, Ángel Alexander and Fu, Erica and Bertucci, Donald and Holstein, Kenneth and Talwalkar, Ameet and Hong, Jason I. and Perer, Adam},
  title = {Zeno: An Interactive Framework for Behavioral Evaluation of Machine Learning},
  year = {2023},
  isbn = {978-1-4503-9421-5/23/04},
  publisher = {Association for Computing Machinery},
  address = {New York, NY, USA},
  url = {https://doi.org/10.1145/3544548.3581268},
  doi = {10.1145/3544548.3581268},
  booktitle = {CHI Conference on Human Factors in Computing Systems},
  location = {Hamburg, Germany},
  series = {CHI '23}
}`;

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
    {
      name: "Yi-Cheng (Steven) Huang",
      role: "Research Assistant",
      site: "https://www.linkedin.com/in/yh3stevenhuang/",
      image: "steven.jpg",
    },
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
          maxWidth: "900px",
          margin: "0px auto",
          padding: "40px",
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
        <h1 style={{ marginTop: "20px" }}>Contact</h1>
        <p>
          If you have any questions or issues with Zeno please ask in our{" "}
          <a href="https://gitter.im/zeno-ml-eval/community">Gitter Channel</a>{" "}
          or open an issue on{" "}
          <a href="https://github.com/zeno-ml/zeno/issues/new">GitHub</a>
        </p>
        <h1 style={{ marginTop: "20px" }}>Cite</h1>
        <p>
          Please reference our CHI 2023 paper if you would like to cite Zeno:
        </p>
        <CodeBlock language="bibtex">{citation}</CodeBlock>
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
