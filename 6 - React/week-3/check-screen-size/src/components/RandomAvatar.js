import React from "react";
import useScreenSize from "../hooks/useScreenSize.js";
import { Sidney, Maya, John } from "./Avatar.js";

const RandomAvatar = () => {
  const screenSize = useScreenSize();

  const isBigScreen = screenSize.name === "big";
  const isMediumScreen = screenSize.name === "medium";
  const isSmallScreen = screenSize.name === "small";

  return (
    <div className="random-avatar">
      <div className="avatar">
      {isBigScreen && <div id="Sidney">< Sidney /></div>}
      {isMediumScreen && <div id="Maya">< Maya /></div>}
      {isSmallScreen && <div id="John">< John /></div>}
      </div>
      <h3>You are seeing this avatar because your screen size is {screenSize.name}!</h3>
    </div>
  );
};

export default RandomAvatar;
