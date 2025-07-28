import React from "react";
import "./Services.css";
import { ReactTyped } from "react-typed";
import HeartEmoji from "../../assets/logos/heartemoji.png";
import Glasses from "../../assets/logos/glasses.png";
import Humble from "../../assets/logos/humble.png";
import Card from "../Card/Card";
import Resume from "./Samuel_Ezebuiro_Resume.PDF";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 1, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id="Services">
      {/* left side */}
      {/* always remember to break sentences */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
                       <span>Services</span>
                <motion.div
                 initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6, ease: "easeOut" }}>
                        <span>
          I architect end‑to‑end digital solutions by combining deep Salesforce
          OmniStudio expertise—designing guided, multi‑step customer journeys
          with OmniScripts, crafting reusable, context‑aware UI components via
          FlexCards, and orchestrating real‑time, low‑code integrations through
          declarative Integration Procedures—with front‑end prowess in ReactJS
          to build modular, responsive web and mobile applications, and data
          analysis skills in Power BI and Excel to create interactive dashboards
          and automated workflows that surface actionable insights.
          <br />I also enhance those OmniStudio solutions by configuring
          DataRaptor and Data Mapper transformations for precise data handling,
          applying conditional rendering in FlexCards for personalized
          experiences, managing package versions and deployments via
          Vlocity-managed packages, and implementing error handling and
          telemetry in Integration Procedures—ensuring robust, maintainable, and
          scalable digital journeys that deliver consistent performance and
          drive lasting ROI.
        </span>
                </motion.div>
  
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blurl" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side*/}

      <div className="cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ left: "8rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Omnistudio Developer"}
            detail={
              "DataMappers,Omniscripts,Integration Procedures,FlexCards,Expression Sets"
            }
          />
        </motion.div>

        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "-10rem" }}
          transition={transition}
          style={{ top: "11rem", left: "-9rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Front-End Developer"}
            detail={
              "HTML, CSS, JavaScript, ReactJS,React Native,NodeJs,SCSS,Bootstrap 5"
            }
          />
        </motion.div>

        <motion.div
          initial={{ left: "100%" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          style={{ top: "20rem", left: "8rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Data Analyst"}
            detail={
              "R, Microsoft Power BI, Microsoft Excel,Shiny,ggplot2,tableau,Python"
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
