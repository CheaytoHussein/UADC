import React from "react";
import code from "../assets/code.svg";
import community from "../assets/community.svg";
import graph from "../assets/graph.svg";
import laptop from "../assets/laptop.svg";
import mobile from "../assets/mobile.svg";

const Mission = (props) => {
  document.body.style.overflowY = "auto";
  const svgLinks = [code, community, graph, laptop, mobile];
  return (
    <div>
      <div
        className={
          props.isMobile
            ? "mission-mobile-svgs-container"
            : "mission-desktop-svgs-container"
        }
      >
        {svgLinks.map((svg, index) => {
          return (
            <img
              key={index}
              src={svg}
              className={
                props.isMobile ? "mission-mobile-svgs" : "mission-desktop-svgs"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mission;
