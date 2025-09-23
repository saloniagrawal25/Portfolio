import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./projects.scss";

export default function Projects({ userData }) {
  if (!userData.projects) return null;
  return (
    <div className="projects">
      <Container>
        <h1>Projects</h1>
        <Row>
          {userData.projects.map((project, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              {project.website && (
                <Card className="cards">
                  {project?.images &&
                    (() => {
                      const firstImage = Object.values(project.images)[0];
                      return firstImage ? (
                        <div>
                          {project.website ? (
                            <a href={project.website}>
                              <Card.Img
                                variant="top"
                                src={firstImage.resolutions.desktop.url}
                              />
                            </a>
                          ) : (
                            <Card.Img
                              variant="top"
                              src={firstImage.resolutions.desktop.url}
                            />
                          )}
                        </div>
                      ) : null;
                    })()}
                  <Card.Body>
                    <Card.Title>{project.displayName}</Card.Title>
                    <a href={project.githubUrl}>
                      <FontAwesomeIcon icon={faGithub} size="lg" />
                    </a>
                    <a href={project.website} style={{ marginLeft: "0.5rem" }}>
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="1px" />
                    </a>
                    <br />
                    {project.languages.map((language, i) => (
                      <Badge key={i} className="language">
                        {language}
                      </Badge>
                    ))}
                    {project.libraries.map((library, i) => (
                      <Badge key={i} className="library">
                        {library}
                      </Badge>
                    ))}
                  </Card.Body>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
