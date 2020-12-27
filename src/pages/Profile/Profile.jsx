import React from "react";
import "./profile.scss";
import devFocus from "../../images/undraw_dev_focus_b9xo3.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Profile() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <div className="main-heading">
              <h1>Hi!! I am Saloni</h1>
              <h2>I build things for the web.</h2>
            </div>
          </Col>
          <Col lg={7} xs={12}>
            <img
              src={devFocus}
              alt="homepage"
              className="img-responsive photo img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
