import React from "react";
import "../styles/hof.css";
import bu_cert from "../imgs/bu_cert.png";
import basf from "../imgs/basf.png";
import who from "../imgs/who.png";
import nasa from "../imgs/nasa.png";
import uu from "../imgs/uu.png";
import nl_govt from "../imgs/netherland_govt.png";
import au_govt from "../imgs/australian_govt.png";
import us_energy from "../imgs/us_energy.png";

const hof = () => {
  return (
    <div className="container">
      <h2>Hall of Fames</h2>
      <div className="orgs">
        <div className="org">
          <img src={nasa} alt="" />
          <h4>NASA</h4>
        </div>
        <div className="org">
          <img src={who} alt="" />
          <h4>World Health Organization</h4>
        </div>
        <div className="org">
          <img src={nl_govt} alt="" />
          <h4>Netherland Govt</h4>
        </div>
        <div className="org">
          <img src={au_govt} alt="" />
          <h4>Australian Govt</h4>
        </div>
        <div className="org">
          <img src={us_energy} alt="" />
          <h4>U.S. Department of Energy</h4>
        </div>
        <div className="org">
          <img src={bu_cert} alt="" />
          <h4>BU-CERT</h4>
        </div>
        <div className="org">
          <img src={basf} alt="" />
          <h4>basf</h4>
        </div>
        <div className="org">
          <img src={uu} alt="" />
          <h4>Utrecht University</h4>
        </div>
      </div>
    </div>
  );
};

export default hof;
