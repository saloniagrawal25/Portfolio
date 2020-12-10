import React from "react";
import "./contact.scss";
import contactImage from "../../images/undraw_personal_opinions_g3kr2.png";
import { Container, Row, Col, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div className="contact3 py-5">
      <Row Name="no-gutters">
        <Container>
          <Row>
            <Col lg={7}>
              <div class="card-shadow">
                <img src={contactImage} alt="Contact" class="img-fluid" />
              </div>
            </Col>
            <Col lg={5}>
              <div class="contact-box ml-3">
                <h1>Quick Contact</h1>
                <Form class="mt-4">
                  <Row>
                    <Col lg={12}>
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="name"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="email"
                          placeholder="email address"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div class="form-group mt-2">
                        <input
                          class="form-control"
                          type="text"
                          placeholder="phone"
                        />
                      </div>
                    </Col>
                    <Col lg={12}>
                      <div class="form-group mt-2">
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="message"
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <button
                        type="submit"
                        class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
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
