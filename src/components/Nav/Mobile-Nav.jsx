import React, { useState } from "react";
import arrow from "../../assets/arrow.svg";
const MobileNav = () => {
  const [clickedArrow, setClickedArrow] = useState(false);
  const [mobileNavElement, setMobileNavElement] = useState("Home");
  const mobileNavListNames = ["Home", "Mission", "Plan", "Members"];
  return (
    <div
      className="Mobile-Nav"
      style={{ height: `${clickedArrow ? 100 : 10}vh` }}
    >
      {/*Change navbar height onclick*/}
      <div className="horizontal-elements-nav">
        <h2 id="title" style={{ fontSize: "200%" }}>
          &lt;UADC/&gt;
        </h2>
        <img
          src={arrow}
          alt="arrow button"
          className="nav-arrow"
          style={{ transform: `rotate(${clickedArrow ? 180 : 0}deg)` }}
          onClick={() => setClickedArrow(!clickedArrow)}
        />
      </div>
      {clickedArrow && (
        <ul className="nav-list">
          {mobileNavListNames.map((element, idx) => {
            document.title = `UADC-${mobileNavElement}`;
            return (
              <li
                className="mobile-nav-links"
                key={idx}
                style={{ top: `${18 * (idx + 1)}%` }}
              >
                <button
                  className="mobile-nav-buttons"
                  style={{
                    backgroundColor:
                      mobileNavElement == element
                        ? "rgb(177, 212, 224)"
                        : "rgb(12, 45, 72)",
                  }}
                  onClick={() => {
                    setMobileNavElement(element);
                    setTimeout(() => setClickedArrow(false), 100);
                    //changing components and closing the navbar
                  }}
                >
                  {element}
                </button>
              </li>
            );
          })}
        </ul>
      )}
      {/* Rendering the list when the onclick */}
    </div>
  );
};

export default MobileNav;
