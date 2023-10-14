"use strict";

const STEP_INTERVAL_MS = 50;
const STEP_SIZE_PX = 10;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {
    let position = startPos;
    const intervalId = setInterval(() => {
      img.style.left = `${position}px`;
      position += STEP_SIZE_PX;
      if (position >= stopPos) {
        clearInterval(intervalId);
        resolve();
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {
    const savedSrc = img.src;
    img.src = DANCING_CAT_URL;
    setTimeout(() => {
      img.src = savedSrc;
      resolve();
    }, DANCE_TIME_MS);
  });
}

async function catWalk() {
  const img = document.querySelector("img");
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  // Measure execution time - save startTime
  const startTime = performance.now();
  // Measure execution time - save startTime

  async function walkAndDance() {
    while (true) {
      await walk(img, startPos, centerPos);
      await dance(img);
      await walk(img, centerPos, stopPos);
      await walkAndDance();
    }
  }

  walkAndDance();

  //Measure execution time - save endTime & log Execution time
  const endTime = performance.now();
  const executionTime = endTime - startTime;
  console.log(`Execution time: ${executionTime} milliseconds`);
  //Measure execution time - save endTime & log Execution time

  // Test code for asynchronicity
  setTimeout(() => {
    console.log("After 500 milliseconds.");
  }, 500);
  setTimeout(() => {
    console.log("After 2 seconds.");
  }, 2000);
}

window.addEventListener("load", catWalk);

// Q: Do you feel this version is easier to read than the version you made in the previous week?

// A: I believe this one is easier to read. I like that we don't have to add more arrow functions within the `walkAndDance` function.

//

// Q: Is this version more efficient or not or is there no difference?

// A: Just out of curiosity I actually tried to measure the execution time of both blocks of code (from last week and this week), and apparently `async...await` indeed works faster than the Promises syntax from last week. Although the time difference in this case was actually minimal.. However, I would like to ask, what is the most precise way to measure the speed/execution time of my code? Because I am not sure if I did it correctly.

//

// Q: Async/await makes the code wait until the Promise is resolved. Does this then also block any other functions from running? Why or why not?

// A: I tried to test this by running some `console.log` functions after 500 millisecond and after 2 seconds; and it shows that Async/await does not block other functions from running, it has a non/blocking behavior: while it's waiting for the Promise to resolve, the function does not block or freeze the entire program. It continues to respond to other events and can run other code simultaneously.
