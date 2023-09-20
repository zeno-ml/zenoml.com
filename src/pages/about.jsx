import CodeBlock from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import React from "react";

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

  let currentTeam = [
    {
      name: "Alex Cabrera",
      role: "PhD Candidate",
      site: "https://cabreraalex.com",
      image: "alex.jpg",
    },
    {
      name: "Alex Bäuerle",
      role: "Research Scientist",
      site: "https://a13x.io/",
      image: "alexb.jpeg",
    },
    {
      name: "Erica Fu",
      role: "Undergraduate Student",
      site: "https://ericafu.me/",
      image: "ericaf.jpeg",
    },
    {
      name: "Ankitha Vasudev",
      role: "Masters Student",
      site: "https://ankithavasudev.com/",
      image: "ankitha.png",
    },
    {
      name: "Josh Zhou",
      role: "Undergraduate Student",
      site: "https://www.linkedin.com/in/josh-zhou-11501818b/",
      image: "josh.jpeg",
    },
    {
      name: "Donald Bertucci",
      role: "Undergraduate Student",
      site: "https://www.donnybertucci.com/",
      image: "donnyb.jpg",
    },
    {
      name: "Ameet Talwalkar",
      role: "Associate Professor",
      site: "https://www.cs.cmu.edu/~atalwalk/",
      image: "ameet.jpeg",
    },
    {
      name: "Graham Neubig",
      role: "Associate Professor",
      site: "http://www.phontron.com/",
      image: "neubig.jpeg",
    },
    {
      name: "Jason Hong",
      role: "Professor",
      site: "http://www.cs.cmu.edu/~jasonh/",
      image: "jason.png",
    },
    {
      name: "Adam Perer",
      role: "Assistant Professor",
      site: "https://perer.org",
      image: "adam.jpg",
    },
  ];

  let prevContributors = [
    {
      name: "Tianqi Wu",
      role: "Masters Student",
      site: "https://tianqi-wu.github.io/",
      image: "tianqiw.png",
    },
    {
      name: "Yi-Cheng Huang",
      role: "Research Associate",
      site: "https://www.linkedin.com/in/yh3stevenhuang/",
      image: "steven.jpg",
    },
  ];

  return (
    <Layout title="About" description="About Zeno">
      <div
        id="about"
        style={{
          maxWidth: "900px",
          margin: "0px auto",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem" }}>About Us</h1>
        <p>
          <span style={{ fontWeight: "700", color: "var(--ifm-color-primary)" }}>
            Zeno
          </span>{" "}
          is designed, built, and maintained by a team of interdisciplinary researchers
          at{" "}
          <span style={{ color: "#c41230", fontWeight: "600" }}>
            Carnegie Mellon University
          </span>
          . We span research groups in Machine Learning, Human-Computer Interaction, and
          Language Technologies. We are passionate about empowering people to understand
          the complexities of AI systems in order to design the future of responsible
          AI.
        </p>
        <h1>Team</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {currentTeam.map((member) => (
            <PersonCard key={member.name} {...member} />
          ))}
        </div>
        <h1 style={{ marginTop: "20px" }}>Past Members</h1>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {prevContributors.map((member) => (
            <PersonCard key={member.name} {...member} />
          ))}
        </div>
        <h1 style={{ marginTop: "20px" }}>Sponsors & Organizations</h1>
        <p>
          We are thankful to our sponsors and affiliated organizations. Zeno is part of
          the{" "}
          <a href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/">
            Mozilla Technology Fund
          </a>{" "}
          and developed partly with the support of multiple NSF grants and fellowships.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <a
            href="https://foundation.mozilla.org/en/blog/auditing-ai-announcing-the-2023-mozilla-technology-fund-cohort/"
            style={{
              width: "140px",
              alignSelf: "center",
              marginRight: "50px",
            }}
          >
            <img src="/img/mozilla.png" />
          </a>
          <img
            src="/img/nsf.png"
            style={{ width: "300px", alignSelf: "center", marginRight: "50px" }}
          />
          <img src="/img/cmu.png" style={{ width: "150px", alignSelf: "center" }} />
        </div>
        <h1 style={{ marginTop: "20px" }}>Contact</h1>
        <p>
          If you have any questions or issues with Zeno please send an email to{" "}
          <a href="mailto:hello@zenoml.com">hello@zenoml.com</a>, ask in our{" "}
          <a href="https://discord.gg/km62pDKAkE">Discord</a>, or open an issue on{" "}
          <a href="https://github.com/zeno-ml/zeno/issues/new">GitHub</a>
        </p>
        <h1 style={{ marginTop: "20px" }}>Cite</h1>
        <p>
          Please reference our
          <a href="https://cabreraalex.com/zeno.pdf"> CHI 2023 paper</a> if you would
          like to cite Zeno:
        </p>
        <CodeBlock language="bibtex">{citation}</CodeBlock>
      </div>
    </Layout>
  );
}

function PersonCard(props) {
  return (
    <div style={{ width: "200px" }}>
      <img
        src={"/img/" + props.image}
        style={{
          width: "170px",
          height: "170px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div style={{ maxWidth: "175px" }}>
        <a href={props.site}>
          <h3 style={{ margin: "0px" }}>{props.name}</h3>
        </a>
        <h4
          style={{
            marginTop: "5px",
            fontWeight: "400",
            color: "var(--ifm-menu-color)",
          }}
        >
          {props.role}
        </h4>
      </div>
    </div>
  );
}
