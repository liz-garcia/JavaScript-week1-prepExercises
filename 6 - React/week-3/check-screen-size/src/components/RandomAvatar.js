import React from "react";
import useScreenSize from "../hooks/useScreenSize.js";
import { Sidney, Maya, John } from "./Avatar.js";

const RandomAvatar = () => {
  const currentScreenSize = useScreenSize();

  const isBigScreen = currentScreenSize === "bigScreen";
  const isMediumScreen = currentScreenSize === "mediumScreen";
  const isSmallScreen = currentScreenSize === "smallScreen";

  let selectedAvatar;

  if (isBigScreen) {
    selectedAvatar = <Sidney />;
  } else if (isMediumScreen) {
    selectedAvatar = <Maya />;
  } else if (isSmallScreen) {
    selectedAvatar = <John />;
  }

  return (
    <div className="avatar">
      {selectedAvatar}
    </div>
  );
};

export default RandomAvatar;
