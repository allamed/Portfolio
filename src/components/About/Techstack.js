import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
    DiJava,
  DiPython,
  DiGit,
    DiMysql
} from "react-icons/di";
import {
  SiPytorch,
    SiAngular,
  SiNextdotjs,
    SiSpringboot,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/*<Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>*/}
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact title="React"/>
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="NodeJs"/>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot title="SpringBoot" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular title="Angular" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql title="MySql" />
      </Col>
    </Row>
  );
}

export default Techstack;
