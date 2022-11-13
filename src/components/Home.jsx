import React from "react";
import DesktopPic from "../assets/bg-chip.jpg";
import MobilePic from "../assets/bg-chip-beltoul.jpg";
const Home = (props) => {
  return (
    <div
      className={props.isMobile ? "Mobile-Home" : "Desktop-Home"}
      style={{
        backgroundImage: props.isMobile
          ? `url(${MobilePic})`
          : `url(${DesktopPic})`,
      }}
    >
      <div className={props.isMobile ? "Mobile-Welcome" : "Desktop-Welcome"}>
        <h3 className={props.isMobile ? "Mobile-Home-h3" : "Desktop-Home-h3"}>Welcome to the official website of UA's Developers' Club</h3>
        <p className={props.isMobile ? "Mobile-Home-p" : "Desktop-Home-p"}>
          This website was created to introduce people to our club, update all
          members of our future plans, the right people to contact, and so that
          I can practice using React lol
        </p>
      </div>
    </div>
  );
};

export default Home;
