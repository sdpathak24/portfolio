import React from "react";
// import File from "../file/Sarvagn_Pathak_Resume.pdf";
import File from "../file/sarvagn_pathak_resume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div>
      <div className="btn-wrapper">
        {/*<h2>My Resume:</h2>*/}
        <button>
          <a href="mailto:sarvagnpathak03@gmail.com">Contact</a>
        </button>
        <button>
          <a className="btn-content" href={File} download={"Sarvagn_Pathak_Resume"} target="_blank" rel="noreferrer">
            Resume
            <MdOutlineFileDownload />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
