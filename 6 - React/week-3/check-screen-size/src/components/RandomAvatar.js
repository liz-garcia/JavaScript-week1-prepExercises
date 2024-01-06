import React from "react";
import { Sidney, Maya, John } from "./Avatar.js";

const RandomAvatar = (props) => {
  const avatarName = props.avatarName;
  const screenSize = props.screen;
  return (
    <div className="random-avatar">
      <div className="avatar">
      {avatarName === "Sidney" && < Sidney />}
      {avatarName === "Maya" && < Maya />}
      {avatarName === "John" && < John />}
      </div>
      <h3>You are seeing <span>{avatarName}</span> because your screen size is <span>{screenSize}</span>!</h3>
    </div>
  );
};

export default RandomAvatar;
