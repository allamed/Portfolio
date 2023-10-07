import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Allamed </span>

            <br />I am a Software engineer, Web developer
            <br />AWS Certified Solutions Architect Associate
            <br />
            {/*Apart from coding, some other activities that I love to do!*/}
          </p>
          {/*
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>*/}

          {/*<p style={{ color: "#b2bec3" }}>
            "Create with purpose, and let your work inspire meaningful change"{" "}
          </p>
          <footer className="blockquote-footer">Allamed</footer>*/}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
