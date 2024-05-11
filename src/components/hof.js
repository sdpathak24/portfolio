import React from "react";
import "../styles/hof.css";
import bu_cert from "../imgs/bu_cert.png";
import basf from "../imgs/basf.png";

const hof = () => {
  return (
    <div className="container">
      <h2>Hall of Fames</h2>
      <div className="orgs">
        <div className="org">
          <img src={bu_cert} alt="" />
          <p>BU-CERT</p>
        </div>
        <div className="org">
          <img src={basf} alt="" />
          <p>basf</p>
        </div>
      </div>
    </div>
  );
};

export default hof;
