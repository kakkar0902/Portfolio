import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Sonia Kakkar</span>{" "}
            from <span className="purple">Halifax, Canada</span>.
            <br />
            I’m currently studying {" "}
            <span className="purple">Full stack web development</span> at{" "}
            <span className="purple">Nova Scotia Community College</span>.
            <br />I hold an Integrated B.Sc. degree from{" "}
            {/* <span className="purple">Mathematics and Computing</span> from{" "} */}
            <span className="purple">DAV College, India</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li> */}
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sonia Kakkar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
