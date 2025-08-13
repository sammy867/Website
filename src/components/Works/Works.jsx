import React from "react";
import "./Works.css";
import Upwork from "../../assets/logos/Upwork.png";
import ranger from "../../assets/logos/ranger.png";
import salesforce from "../../assets/logos/salesforce.png";
import trailhead from "../../assets/logos/trailhead.png";
import skyfilabs from "../../assets/logos/skyfilabs.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works For All These
        </span>
        <span>Brands & Clients</span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 3, ease: "easeOut" }}>
        <span>
          I’ve architected responsive ReactJS SPAs and pixel-perfect web apps at
          Side Hustle; executed complex data pipelines—wrangling, modeling,
          visualization, and dashboard automation—in collaboration with
          Skyfi Labs; delivered custom, interactive data‑driven solutions for
          freelance clients; and now, as a Nigeria‑based Salesforce OmniStudio
          developer for a UK firm, I build high‑performance, low‑code customer
          journeys with OmniScripts, FlexCards, DataRaptors, and Integration
          Procedures to optimize workflows and drive measurable ROI.
        </span>
        </motion.div>
        <a href="https://www.linkedin.com/in/samuel-ezebuiro-b36896237/">
          <button className="button s-button">Hire Me</button>
        </a>

        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: "3.5", type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={ranger} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={salesforce} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={trailhead} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={skyfilabs} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
