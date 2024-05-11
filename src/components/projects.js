import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa6";

const Project = ({ name, desc, link, YtLink }) => {
  return (
    <div className="project-box">
      <h3>{name}</h3>
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="link">
        {link && (
          <a href={link}>
            <FaGithub />
          </a>
        )}
        {YtLink && (
          <a href={YtLink}>
            <FaYoutube />
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div className="projects">
        <Project
          name={"Price-Comparison website"}
          desc={
            <ul>
              <li>Developed with flask based on python.</li>
              <li>Team leader of size 10.</li>
              <li>Created a web scrapper to get best price for any porduct.</li>
              <li>Contributed in management, developement and testing.</li>
            </ul>
          }
          link={"https://github.com/sdpathak24/price-comparison"}
          YtLink={"https://www.youtube.com/watch?v=izb1ylKzZi0"}
        />
        <Project
          name={"Blockchain Voting System"}
          desc={
            <ul>
              <li>Created during National level Hackathon - Hack Infinity organized by DCEI.</li>
              <li>Developed a decentralized voting system using blockchain technology.</li>
              <li>Ranked 2nd out of 62 teams.</li>
              <li>Contributed as front end developer.</li>
            </ul>
          }
          link={"https://github.com/harshvadi07/blockchain-voting-system"}
        />
        <Project
          name={"Digital Verification System"}
          desc={
            <ul>
              <li>Created a platform to verify students from their id card.</li>
              <li>developed our own hashing algorithm.</li>
              <li>Used javascript, tesseract.js and NOSQL.</li>
              <li>Contributed in creating algorithm and as backend engineer.</li>
            </ul>
          }
        />
        <Project
          name={"Video Streaming with RTSP and RTP"}
          desc={
            <ul>
              <li>Developed a video streaming platform.</li>
              <li>Using RTSP and RTP.</li>
              <li>Implemented socket programming.</li>
              <li>Contributed as programmer.</li>
            </ul>
          }
          YtLink={"https://www.youtube.com/watch?v=lpj6hh1LWZ0"}
        />
        <Project
          name={"HOTD!"}
          desc={
            <ul>
              <li>Inspiration from a book called Atomic Habits by James Clear.</li>
              <li>Add your best highlights of your day.</li>
              <li>Share with your friends and family by pressing HOTD!.</li>
              <li>Supports progressive web app</li>
            </ul>
          }
          link={"https://github.com/sdpathak24/HOTD"}
        />
        <Project
          name={"Breaker"}
          desc={
            <ul>
              <li>This is an app to increse your productivity.</li>
              <li>Add your goal that you want to practice daily.</li>
              <li>Maintain the continuity.</li>
            </ul>
          }
          link={"https://github.com/sdpathak24/breaker"}
        />
      </div>
    </div>
  );
};

export default Projects;
