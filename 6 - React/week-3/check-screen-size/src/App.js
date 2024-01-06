import React from "react";
import RandomAvatar from "./components/RandomAvatar.js";
import useScreenSize from "./components/useScreenSize.js";
import "./index.css";

const App = () => {
  const screenSize = useScreenSize();
  const screenSizeName = screenSize.name;
  const isBigScreen = screenSizeName === "big";
  const isMediumScreen = screenSizeName === "medium";
  const isSmallScreen = screenSizeName === "small";

  return (
    <div className="app">
    <h1>Check Screen Size</h1>
    <h2>{screenSize.width}px / {screenSize.height}px</h2>
    {isBigScreen && < RandomAvatar avatarName="Sidney" screen={screenSizeName}/>}
    {isMediumScreen && < RandomAvatar avatarName="Maya" screen={screenSizeName}/>}
    {isSmallScreen && < RandomAvatar avatarName="John" screen={screenSizeName}/>}
    </div>
  );
};

export default App;
