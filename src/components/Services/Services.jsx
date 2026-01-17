import React from "react";
import "./Services.css";
import HeartEmoji from "../../assets/logos/heartemoji.png";
import Glasses from "../../assets/logos/glasses.png";
import Humble from "../../assets/logos/humble.png";
import Card from "../Card/Card";
import Resume from "./Samuel_Ezebuiro_Salesforce_CPQ_Optimized_Resume.docx";
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
  transition={{ duration: 3, ease: "easeOut" }}>
                        <span>
        I provide end-to-end Salesforce solutions focused on helping businesses sell smarter, scale faster, and protect revenue. As a Salesforce CPQ specialist, I design scalable pricing, configuration, discounting, and approval frameworks that eliminate deal errors and accelerate sales cycles. I complement this with deep OmniStudio expertise, building guided, intuitive experiences using OmniScripts, FlexCards, DataRaptors, and Integration Procedures that simplify complex processes and drive user adoption. As a Salesforce Platform Developer, I deliver secure, maintainable solutions that grow with the organization, while my expanding focus on Revenue Cloud enables me to align pricing, contracts, and approvals into a cohesive revenue engine. Backed by a strong front-end foundation in modern JavaScript and React, I bring a user-first mindset to every solution, ensuring systems are not only powerful but intuitive. I don’t just implement Salesforce, I engineer scalable systems that support long-term business growth.
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
            heading={"Platform Developer"}
            detail={
              "SalesforceCLI, VSCode, Lightning Web Components and Aura Frameworks,Dev Console,Data Loader,APEX"
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
