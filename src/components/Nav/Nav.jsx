import React, { useState } from "react";
import DesktopNav from "./Desktop-Nav.jsx";
import MobileNav from "./Mobile-Nav.jsx";

const Nav = (props) => {
  return props.isMobile ? <MobileNav /> : <DesktopNav />;
};

export default Nav;
