import React from "react";
import DesktopPic from "../assets/bg-chip.jpg";
import MobilePic from "../assets/bg-chip-beltoul.jpg";
const Home = ({isMobile}) => {
  document.body.style.overflowY = "hidden";
  return (
    <section
      className="Home-container"
      style={{
        backgroundImage: isMobile
          ? `url(${MobilePic})`
          : `url(${DesktopPic})`,
      }}
    >
      <div className="Welcome-container">
        <h3>
          Welcome to the official website of UA's Developers' Club
        </h3>
        <p>
          This website was created to introduce people to our club, update all
          members of our future plans, the right people to contact, and so that
          I can practice using React lol
        </p>
      </div>
    </section>
  );
};

export default Home;
