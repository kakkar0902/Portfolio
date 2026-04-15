import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Full Stack Web Development student at Nova Scotia Community College with hands-on experience in building responsive web applications using HTML, CSS, JavaScript, React, Node.js, and REST APIs. Strong background in IT support, teaching, and problem-solving. Passionate about creating clean, user-friendly, and efficient web applications while gaining real-world development experience through internships.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, and MongoDB{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend development.
              <br />
              <br />
              My key technical skills include building RESTful APIs, working with databases, handling CRUD operations, and implementing authentication and debugging applications.
              {/* <i>
                <b className="purple">
                  {" "}
                  Web Applications, Blockchain Solutions,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems. */}
              <br />
              <br />
              Whenever possible, I enjoy building full-stack projects using Node.js with Express on the backend and React or modern frontend frameworks like Next.js on the frontend.
              {/* <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
