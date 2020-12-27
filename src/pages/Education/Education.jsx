import React from "react";
import { Container } from "react-bootstrap";
import "./education.scss";

export default function Education({ userData }) {
  return (
    <div className="education">
      <Container>
        <h1>Education</h1>
        {/* {userData.education.map((educationData, index) => (
          <h5 key={index}>{educationData.institution}</h5>
        ))} */}
        <div class="history-tl-container">
          <ul class="tl">
            {userData.education.map((educationData, index) => (
              <li class="tl-item" ng-repeat="item in retailer_history">
                <div class="timestamp">1st June 2015</div>
                <div class="item-title">{educationData.institution}</div>
                <div class="item-detail">
                  {educationData.studyType}
                  {" , "}
                  {educationData.area}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}
