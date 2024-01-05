import React from "react";
import RandomAvatar from "./components/RandomAvatar.js";
import useScreenSize from "./hooks/useScreenSize.js";
import "./index.css";

const App = () => {
  const screenSize = useScreenSize();
  return (
    <div className="app">
    <h1>Check Screen Size</h1>
    <h2>{screenSize.width} / {screenSize.height}</h2>
    < RandomAvatar />
    </div>
  );
};

export default App;
