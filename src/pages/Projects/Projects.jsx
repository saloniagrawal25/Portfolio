import React from "react";
import { Container, Card, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./projects.scss";

export default function Projects({ userData }, collapse) {
  // const MAX_LENGTH = 50;
  //const sliceNum = 5;
  // const [projects, setProjects] = useState(userData.projects);

  // function showMore(collapse) {
  //   !collapse
  //     ? setProjects(userData.projects)
  //     : setProjects(userData.projects.slice(0, sliceNum));
  // }
  // showMore(collapse);
  return (
    <div className="projects">
      <Container>
        <h1>Projects</h1>
        <Row>
          {userData.projects.map((project, index) => (
            <Col key={index} lg={4} md={6} sm={12}>
              {project.website && (
                <Card className="cards">
                  {project.images.map((image, i) => (
                    <div key={i}>
                      {project.website ? (
                        <a href={project.website}>
                          <Card.Img
                            variant="top"
                            src={image.resolutions.desktop.url}
                          />
                        </a>
                      ) : (
                        <Card.Img
                          variant="top"
                          src={image.resolutions.desktop.url}
                        />
                      )}
                    </div>
                  ))}
                  <Card.Body>
                    <Card.Title>{project.displayName}</Card.Title>
                    {/* {project.description.length < MAX_LENGTH ? (
                    <Card.Text>{project.description}</Card.Text>
                  ) : (
                    <Card.Text>{project.summary}</Card.Text>
                  )} */}
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
