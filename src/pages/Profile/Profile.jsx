import React from "react";
import "./profile.scss";
import devFocus from "../../images/undraw_dev_focus_b9xo3.png";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
  faHackerrank,
} from "@fortawesome/free-brands-svg-icons";

export default function Profile() {
  return (
    <div className="profile">
      <Container>
        <Row>
          <Col lg={5} xs={12}>
            <div className="main-heading">
              <h1>Hi!! I am Saloni</h1>
              <h3>I build things for the web.</h3>
              <div className="icons">
                <a href="https://www.linkedin.com/in/saloniagrawal25">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a href="https://twitter.com/SaloniAgrawal25">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="https://github.com/saloniagrawal25">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://www.hackerrank.com/saloniagrawal251">
                  <FontAwesomeIcon icon={faHackerrank} size="lg" />
                </a>
                <a href="https://www.facebook.com/saloni.agrawal.25/">
                  <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
              </div>
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
