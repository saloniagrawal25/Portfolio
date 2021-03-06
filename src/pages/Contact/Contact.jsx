import React from "react";
import "./contact.scss";
import contactImage from "../../images/undraw_personal_opinions_g3kr1.png";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact3 py-5">
      <Row className="no-gutters">
        <Container>
          <Row>
            <Col lg={7}>
              <div className="card-shadow">
                <img src={contactImage} alt="Contact" className="img-fluid" />
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-box ml-3">
                <h1>Get In Touch</h1>
                <Form
                  className="mt-4"
                  action="mailto:saloniagrawal250797@gmail.com"
                  method="POST"
                  enctype="multipart/form-data"
                  name="EmailForm"
                >
                  <Row>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="name"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="email address"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="phone"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <Form.Group className="mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="message"
                        ></textarea>
                      </Form.Group>
                    </Col>
                    <Col lg={12}>
                      <button
                        type="submit"
                        className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                      >
                        <span>SUBMIT</span>
                      </button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </div>
  );
}
