"use strict";

const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0,
};

let cycle = 0;
while (cycle < 2) {
  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);

  if (currentState === "green") {
    trafficLight.stateIndex = 1; // Turn to orange
  } else if (currentState === "orange") {
    trafficLight.stateIndex = 2; // Turn to red
  } else if (currentState === "red") {
    trafficLight.stateIndex = 0; // Turn to green
    cycle++; // Increment cycle count
  }
}
