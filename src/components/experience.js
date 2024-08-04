import React from "react";
import "../styles/experience.css";

const Experience = () => {
  return (
    <div className="container">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="date">01/24 - 06/24</div>
          <div className="right">
            <div className="post">Security Intern</div>
            <div className="Company">SAG lab, DRDO</div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="date">05/23 - 07/23 </div>
          <div className="right">
            <div className="post">Research Intern</div>
            <div className="Company">DA-IICT</div>
            <div className="content">
              Worked part-time as Research assistant and analysed various security and cryptographic network protocols
              and developed our own algorithm for enhancing security.
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="date">06/23 - 12/23 </div>
          <div className="right">
            <div className="post">Techincal Assitant</div>
            <div className="Company">DA-IICT</div>
            <div className="content">Teaching Assistant for the course IT-304, Computer Networks</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
