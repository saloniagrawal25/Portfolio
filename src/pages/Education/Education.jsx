import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./education.scss";

export default function Education({ userData }) {
  return (
    <div className="education">
      <Container>
        <Row>
          <Col md={12}>
            <h1>Education</h1>
            <div id="content">
              <ul className="timeline">
                {userData.education.map((educationData, index) => (
                  <li
                    className="event"
                    data-Date={[
                      educationData.start.year,
                      educationData.end.year,
                    ].join("-")}
                    key={index}
                  >
                    <h2>{educationData.institution}</h2>
                    <p>
                      {educationData.studyType}{" "}
                      {educationData.area && "in " + educationData.area} with{" "}
                      {educationData.gpa > 10
                        ? educationData.gpa + "%"
                        : "CGPA " + educationData.gpa + "/10"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
