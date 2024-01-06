import { useState, useEffect, useDebugValue } from "react";

const useScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowSize({
        width: newWidth,
        height: newHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Possible Screen sizes
  const possibleScreenSizes = [
    { name: "big", minWidth: 1001, maxWidth: Infinity },
    { name: "medium", minWidth: 701, maxWidth: 1000 },
    { name: "small", minWidth: 0, maxWidth: 700 },
  ];

  let screenSize = {
    name: "",
    width: windowSize.width,
    height: windowSize.height
  };

  // Find the first matching screen size
  const matchingScreen = possibleScreenSizes.find((screen) => {
    return (windowSize.width >= screen.minWidth && windowSize.width <= screen.maxWidth);
  });

  if (matchingScreen) { screenSize.name = matchingScreen.name; }

  // Display label in React DevTools
  useDebugValue(`Size: ${screenSize.name}, Width: ${windowSize.width}px, Height: ${windowSize.height}px`);

  return screenSize;
};

export default useScreenSize;
