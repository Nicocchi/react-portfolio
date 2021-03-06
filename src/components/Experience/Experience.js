import React from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";

function Experience() {
  return (
    <div id="experience" className="landing-wrapper">
      <div className="experience-jumbotron">
        <h1 className="move-up">02. Where I've Worked</h1>
        <div className="hr-rose move-up2"></div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <div className="tab-col fade-in">
              <Nav
                variant="pills"
                className="flex-column"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="first"
                    style={{ backgroundColor: "transparent" }}
                  >
                    Next Up Technologies
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    style={{ backgroundColor: "transparent" }}
                  >
                    OnlineLoans
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Col sm={9}>
              <Tab.Content className="experience-tab-content fade-in">
                <Tab.Pane eventKey="first">
                  <span style={{ display: "flex" }}>
                    <h3>CEO / CTO</h3>
                    <a
                      href="https://www.nextupapp.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <h3 style={{ marginLeft: "20px", color: "#ff0086" }}>
                        @ Next Up Technologies
                      </h3>
                    </a>
                  </span>
                  <p className="exp-desc">Powerful athlete management system</p>
                  <p className="exp-sub">Jan 2021 - Present</p>
                  <ul>
                    <li>Build and maintain overall site.</li>
                    <li>Deploy with CI/CD onto AWS services</li>
                    <li>
                      Use modern libraries and frameworks; React/Redux,
                      NodeJS/Express and MongoDB
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <span style={{ display: "flex" }}>
                    <h3>Engineer</h3>
                    <a
                      href="https://onlineloans.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <h3 style={{ marginLeft: "20px", color: "#ff0086" }}>
                        @ OnlineLoans
                      </h3>
                    </a>
                  </span>
                  <p className="exp-desc">
                    Financial technology company that creates products and
                    educational content to simplify loan finding. Borrowers of
                    any financial status - from perfect credit to scores that
                    need improvement - use our tools to compare, calculate, and
                    prequalify for loans.
                  </p>
                  <p className="exp-sub">Sept 2019 - May 2020</p>
                  <ul>
                    <li>Perform and direct web site updates.</li>
                    <li>
                      Evaluate code to ensure that it is valid, is properly
                      structured, meets industry standards and is compatible
                      withbrowers, devices, and operating systems.
                    </li>
                    <li>
                      Develop databases that support web applications and web
                      sites.
                    </li>
                    <li>
                      Install and configure hypertext transfer protocol (HTTP)
                      servers.
                    </li>
                    <li>
                      Identify problems uncovered by testing or customer
                      feedback, and correct problems or refer problems
                      toappropriate personnel for correction.
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}

export default Experience;
