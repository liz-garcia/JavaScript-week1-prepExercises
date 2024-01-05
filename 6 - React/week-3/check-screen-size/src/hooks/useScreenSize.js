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
  const bigScreen = { size: "bigScreen", minWidth: 1001, maxWidth: Infinity };
  const mediumScreen = { size: "mediumScreen", minWidth: 701, maxWidth: 1000 };
  const smallScreen = { size: "smallScreen", minWidth: 0, maxWidth: 700 };

  const possibleScreenSizes = [bigScreen, mediumScreen, smallScreen];
  let screenSize;

  // Use the find method to find the first matching screen size
  const matchingScreen = possibleScreenSizes.find((screen) => {
    return (
      windowSize.width >= screen.minWidth 
      && windowSize.width <= screen.maxWidth
    );
  });

  if (matchingScreen) {
    screenSize = matchingScreen.size;
  }

  // Display label in React DevTools
  useDebugValue(`Size: ${screenSize}, Width: ${windowSize.width}px, Height: ${windowSize.height}px`);

  return screenSize;
};

export default useScreenSize;
