import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import dental from "../../Assets/Projects/dental.gif";
import taskFlow from "../../Assets/Projects/gif x2_edit_2.gif";
import suicide from "../../Assets/Projects/suicide.png";
import luneNoire from "../../Assets/Projects/astro.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={taskFlow}
              isBlog={false}
              title="TaskFlow"
              description="Built with React Js and Spring Boot, this Web App streamlines task management for users. It features an intuitive interface for creating and assigning tasks, and keeps users informed of tasks from superiors.
               It also provides helpful project statistics, including participation rates and task completion rates, for optimizing team productivity.."
              ghLink="https://github.com/allamed/taskFlow-frontend"

            />
          </Col>



          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={dental}
              isBlog={false}
              title="Dental-app"
              description="Desktop application built with JavaFX for managing medical records at a dental practice. It enables users to handle patient information and appointments, as well as interact with radiographic images to record medical notes for specific teeth"
              ghLink="https://github.com/allamed/dental_management_javafx"

            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
                imgPath={luneNoire}
                isBlog={false}
                title="Astro-Moon"
                description="React-based astrology application that provides personalized astrological information based on a user's birth details, including data on the Black Moon and astrological houses."
                ghLink="https://github.com/allamed/astro-calculator"
                demoLink="https://mysteresdufeminin.netlify.app/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
