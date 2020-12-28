import React from "react";
import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import moment from "moment";
import "./experience.scss";

export default function Experience({ userData }) {
  return (
    <div className="experience">
      <Container>
        <h1>Where I've worked</h1>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey={userData.work[0].company}
        >
          <Row>
            <Col lg={3}>
              <Nav className="flex-column">
                <Nav.Item className="nav-item">
                  {userData.work.map((workData, index) => (
                    <Nav.Link key={index} eventKey={workData.company}>
                      {workData.company}
                    </Nav.Link>
                  ))}
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={9}>
              <Tab.Content>
                {userData.work.map((workData, index) => (
                  <Tab.Pane eventKey={workData.company} key={index}>
                    <h5>{workData.position}</h5>
                    <p>
                      {moment(workData.startDate).format("MMM YYYY")} {" - "}
                      {workData.isCurrentRole ? (
                        <span>Present</span>
                      ) : (
                        moment(workData.endDate).format("MMM YYYY")
                      )}
                    </p>
                    <p>
                      <i>{workData.summary}</i>
                    </p>
                    <ul>
                      {workData.highlights.map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
}
