import React from "react";
import cSharpLogo from "../../images/c-sharp-logo.svg";
import cssLogo from "../../images/icons8-css3.svg";
import htmlLogo from "../../images/icons8-html-5.svg";
import githubLogo from "../../images/icons8-github.svg";
import sqlLogo from "../../images/icons8-microsoft-sql-server - Copy.svg";
import mongodbLogo from "../../images/icons8-mongodb.svg";
import reactLogo from "../../images/icons8-react-native.svg";
import sassLogo from "../../images/icons8-sass.svg";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <Container>
        <h1>Skills</h1>
        <Row>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image
                src={cSharpLogo}
                width={96}
                height={96}
                alt="cSharp"
              />
              <Figure.Caption>
                <span>C# Language</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image
                src={sqlLogo}
                width={96}
                height={96}
                alt="SQL Server"
              />
              <Figure.Caption>
                <span>SQL Server</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image
                src={mongodbLogo}
                width={96}
                height={96}
                alt="MongoDB"
              />
              <Figure.Caption>
                <span>MongoDB</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image
                src={reactLogo}
                width={96}
                height={96}
                alt="React"
              />
              <Figure.Caption>
                <span>React</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image src={htmlLogo} width={96} height={96} alt="HTML" />
              <Figure.Caption>
                <span>HTML</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image src={cssLogo} alt="CSS" width={96} height={96} />
              <Figure.Caption>
                <span>CSS</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image src={sassLogo} width={96} height={96} alt="Sass" />
              <Figure.Caption>
                <span>Sass</span>
              </Figure.Caption>
            </Figure>
          </Col>
          <Col lg={true} md={3} xs={6}>
            <Figure>
              <Figure.Image
                src={githubLogo}
                width={96}
                height={96}
                alt="Github"
              />
              <Figure.Caption>
                <span>Github</span>
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
