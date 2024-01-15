import { React, useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import "../styles/experience.css";

const Experience = () => {
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const [isIconRotated, setIsIconRotated] = useState(false);

  const toggleTimelineVisibility = () => {
    setIsTimelineVisible(!isTimelineVisible);
    setIsIconRotated(!isIconRotated);
  };

  return (
    <div className="container">
      <h2 onClick={toggleTimelineVisibility}>
        <SlArrowRight style={{ height: "20px", transform: isIconRotated ? "rotate(90deg)" : "rotate(0deg)" }} />
        Experience
      </h2>
      {isTimelineVisible && (
        <div className="timeline">
          <div className="timeline-item">
            <div className="date">01/24 - present</div>
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
      )}
    </div>
  );
};

export default Experience;
