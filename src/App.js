import React, { useState } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home.jsx";
const App = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 860 ? true : false
  );
  const checkWidth = () =>
    window.innerWidth < 860 ? setIsMobile(true) : setIsMobile(false);
  window.addEventListener("resize", checkWidth);

  return (
    <>
      <Nav  isMobile={isMobile} />
      <Home isMobile={isMobile} />
    </>
  );
};

export default App;
