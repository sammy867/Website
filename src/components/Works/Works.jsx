import React from "react";
import "./Works.css";
import Upwork from "../../assets/logos/Upwork.png";
import Fiverr from "../../assets/logos/fiverr.png";
import Amazon from "../../assets/logos/amazon.png";
import Shopify from "../../assets/logos/Shopify.png";
import Facebook from "../../assets/logos/Facebook.png";
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
          Works for All these
        </span>
        <span>Brands & Clients</span>
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
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
