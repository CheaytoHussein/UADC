import React, { useState } from "react";
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home.jsx";
import Mission from "./components/Mission.jsx";
import Members from "./components/Members.jsx";
import Plan from "./components/Plan.jsx";
const App = () => {
  const [currentComponent, setCurrentComponent] = useState("Home");
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 860 ? true : false
  );
  const checkWidth = () =>
    window.innerWidth < 860 ? setIsMobile(true) : setIsMobile(false);
  window.addEventListener("resize", checkWidth);
  return (
    <>
      <Nav
        isMobile={isMobile}
        currentComponent={currentComponent}
        setCurrentComponent={(component) => setCurrentComponent(component)}
      />
      {currentComponent == "Home" && <Home isMobile={isMobile} />}
      {currentComponent == "Mission" && <Mission isMobile={isMobile} />}
      {currentComponent == "Plan" && <Plan isMobile={isMobile} />}
      {currentComponent == "Members" && <Members isMobile={isMobile} />}
    </>
  );
};

export default App;
