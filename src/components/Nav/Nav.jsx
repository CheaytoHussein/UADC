import React, { useState } from "react";
import DesktopNav from "./Desktop-Nav.jsx";
import MobileNav from "./Mobile-Nav.jsx";

const Nav = (props) => {
  const changeComponent = (component) => {
    props.setCurrentComponent(component);
  };
  return props.isMobile ? (
    <MobileNav
      changeComponent={(component) => changeComponent(component)}
      currentComponent={props.currentComponent}
    />
  ) : (
    <DesktopNav
      changeComponent={(component) => changeComponent(component)}
      currentComponent={props.currentComponent}
    />
  );
};

export default Nav;
