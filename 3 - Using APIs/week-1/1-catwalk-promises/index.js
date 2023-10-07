"use strict";

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
const WALKING_CAT_URL =
  "http://www.anniemation.com/clip_art/images/cat-walk.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let currentPos = startPos;

    // Increment the left style property
    // by 10px every 5 seconds.
    const walkInterval = setInterval(() => {
      currentPos += STEP_SIZE_PX;
      img.style.left = `${currentPos}px`;

      // When cat reaches the stop position,
      // stop the interval and resolve the promise.
      if (currentPos >= stopPos) {
        clearInterval(walkInterval);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    // Change img source to Dancing cat GIF.
    img.src = DANCING_CAT_URL;

    setTimeout(() => {
      // Change img source back to Walking cat GIF
      // and resolve the promise.
      img.src = WALKING_CAT_URL;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  const walkAndDance = () => {
    // Cat walks to center position
    walk(img, startPos, centerPos)
      // Cat dances for 5 seconds
      .then(() => dance(img))
      // Cat walks from center to end of the screen
      .then(() => walk(img, centerPos, stopPos))
      // Repeat the walkAndDance function
      .then(walkAndDance);
  };

  walkAndDance();
}

window.addEventListener("load", catWalk);
