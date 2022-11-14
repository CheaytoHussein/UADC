import React, { useState } from "react";

const DesktopNav = (props) => {
  const navListNames = ["Home", "Mission", "Plan", "Members"];
  return (
    <div className="Desktop-Nav">
      <h2 id="title" style={{ paddingLeft: "8%" }}>
        &lt;UADC/&gt;
      </h2>
      <span style={{ width: "15%" }}></span>
      <ul className="desktop-nav-list">
        {navListNames.map((element, idx) => {
          document.title = `UADC-${props.currentComponent}`;
          return (
            <li className="desktop-nav-links" key={idx}>
              <button
                className="desktop-nav-buttons"
                style={{
                  backgroundColor:
                  props.currentComponent == element
                      ? "rgba(177, 212, 224, 0.671) "
                      : "rgb(12, 45, 72)",
                }}
                onClick={() => {
                  props.changeComponent(element);
                }}
              >
                {element}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DesktopNav;
