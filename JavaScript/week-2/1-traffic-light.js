"use strict";

function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextStateIndex(trafficLight) {
  if (trafficLight.stateIndex < 2){
    trafficLight.stateIndex = trafficLight.stateIndex + 1;
  }
  else {
    trafficLight.stateIndex = 0;
  }
  return trafficLight.stateIndex;
}

function waitSync(secs) {
  const start = Date.now();
  while (Date.now() - start < secs * 1000) {
  }
}

function main() {
  const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };

  for (let cycle = 0; cycle < 6; cycle++) {
    const currentState = getCurrentState(trafficLight);
    console.log(cycle, "The traffic light is now", currentState);

    waitSync(1);
    trafficLight.stateIndex = getNextStateIndex(trafficLight);
  }
}

main();