import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chinookImage from "../../Assets/Projects/chinook-ai.svg";
import shorelineImage from "../../Assets/Projects/shoreline-ai.svg";
import videosphereImage from "../../Assets/Projects/videosphere-ai.svg";
import taskManagerImage from "../../Assets/Projects/task-manager-ai.svg";

const projects = [
  {
    imgPath: chinookImage,
    isBlog: false,
    title: "Chinook App Backend",
    summary:
      "Node.js and Express backend that powers artist, album, track, search, and theme workflows against the Chinook database.",
    description:
      "Built as the final phase of a cumulative backend assignment, with the API refactored into Express routers and aligned to a fixed frontend contract.",
    stack: ["Node.js", "Express.js", "SQL", "Validation"],
    highlights: [
      "Implemented create, update, delete flows for artists, albums, and tracks.",
      "Added case-insensitive artist search and support for the new themes table.",
      "Introduced validation schemas and router-based endpoint organization."
    ],
    ghLink: "https://github.com/kakkar0902/Chinook-App-Backend"
  },
  {
    imgPath: shorelineImage,
    isBlog: false,
    title: "Shoreline Woodworks",
    summary:
      "Responsive website implementation translated from a Figma prototype into a production-style frontend workflow.",
    description:
      "Focused on clean UI execution, cross-device responsiveness, and collaborative team delivery using branches, pull requests, and documented testing practices.",
    stack: ["Frontend", "Responsive Design", "Figma", "GitHub Flow"],
    highlights: [
      "Converted provided design direction into polished, reusable UI sections.",
      "Validated mobile behavior against the prototype and browser device tooling.",
      "Worked within a team setup using forks, branches, reviews, and testing guidance."
    ],
    ghLink: "https://github.com/kakkar0902/Shoreline-Woodworks-Website"
  },
  {
    imgPath: videosphereImage,
    isBlog: false,
    title: "VideoSphere",
    summary:
      "Next.js platform for uploading once and distributing video content across multiple channels with a documented team workflow.",
    description:
      "Designed around modern full-stack practices including App Router structure, typed code, Cloudflare R2 uploads, Docker deployment, and a strong docs culture.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Cloudflare R2"],
    highlights: [
      "Supports video distribution to YouTube, Vimeo, and optional Google Drive backup.",
      "Includes docs, tests, linting, formatting, and CI-ready development scripts.",
      "Built for self-hosting with Docker and a scalable team contribution workflow."
    ],
    ghLink: "https://github.com/kakkar0902/VideoSphere"
  },
  {
    imgPath: taskManagerImage,
    isBlog: false,
    title: "Task Manager Study",
    summary:
      "Flask and SQLite application covering authenticated task management from registration through protected CRUD operations.",
    description:
      "Combines two course milestones into one practical app, adding secure login, hashed passwords, session-based access control, and task lifecycle management.",
    stack: ["Flask", "SQLite", "Flask-Bcrypt", "Authentication"],
    highlights: [
      "Users can register, log in with username or email, and manage personal tasks.",
      "Task routes are protected so CRUD actions require authentication.",
      "Database and tables are created automatically when the app starts."
    ],
    ghLink: "https://github.com/kakkar0902/Task-Manager-Application"
  }
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of backend, frontend, and full-stack projects with custom cover art and implementation highlights.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={6} lg={6} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
