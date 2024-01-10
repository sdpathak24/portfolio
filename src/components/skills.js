import { useState } from "react";
import React from "react";
import { SlArrowRight } from "react-icons/sl";
import "../styles/skills.css";

const SkillBox = ({ skill, rating }) => {
  const totalDots = 10;
  const filledDots = Array(rating).fill(null);
  const emptyDots = Array(totalDots - rating).fill(null);

  return (
    <div className="skill-box">
      <h3>{skill}</h3>
      <div className="dots">
        {filledDots.map((_, index) => (
          <span key={index} className="filled-dot"></span>
        ))}
        {emptyDots.map((_, index) => (
          <span key={index} className="empty-dot"></span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
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
        Skills
      </h2>
      {isTimelineVisible && (
        <div className="box-wrapper">
          <div className="box">
            <SkillBox skill="JavaScript" rating={7} />
            <SkillBox skill="Python" rating={6} />
            <SkillBox skill="C++" rating={3} />
            <SkillBox skill="HTML" rating={8} />
            <SkillBox skill="CSS" rating={9} />
            <SkillBox skill="PHP" rating={5} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
