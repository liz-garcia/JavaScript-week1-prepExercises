"use strict";

function runExperiment(sampleSizes) {
    const valueCounts = [0, 0, 0, 0, 0, 0];

    for (let sampleSizeIndex = 0; sampleSizeIndex < sampleSizes.length; sampleSizeIndex++){
        const sampleSize = sampleSizes[sampleSizeIndex];

        for (let i = 0; i < sampleSize; i++){
            const randomInteger = Math.floor(Math.random() * 6) + 1;

            if (randomInteger === 1){
                valueCounts[0]++;
            }
            else if (randomInteger === 2){
                valueCounts[1]++;
            }
            else if (randomInteger === 3){
                valueCounts[2]++;
            }
            else if (randomInteger === 4){
                valueCounts[3]++;
            }
            else if (randomInteger === 5){
                valueCounts[4]++;
            }
            else if (randomInteger === 6){
                valueCounts[5]++;
            }
        }
  }

  // TODO
  // Write a for loop that iterates `sampleSize` times (sampleSize is a number).
  // In each loop iteration:
  //
  // 1. Generate a random integer between 1 and 6 (as if throwing a six-sided die).
  // 2. Add `1` to the element of the `valueCount` that corresponds to the random
  //    value from the previous step. Use the first element of `valueCounts`
  //    for keeping a count how many times the value 1 is thrown, the second
  //    element for value 2, etc.

  const results = [];

  for (const valueCount of valueCounts){
        const valueCountPercentage = (valueCount * 100) / sampleSize;

        const fixedValueCountPercentage = valueCountPercentage.toFixed(2);

        results.push(fixedValueCountPercentage);
  }

  return results;
}

function main() {
    const sampleSizes = [100, 1000, 1000000];

    for (const sampleSize of sampleSizes){
        console.log(runExperiment(sampleSize), sampleSize)
    }
  // TODO
  // Write a for..of loop that calls the `runExperiment()` function for each
  // value of the `sampleSizes` array.
  // Log the results of each experiment as well as the experiment size to the
  // console.
  // The expected output could look like this:
  //
  // [ '26.00', '17.00', '10.00', '19.00', '16.00', '12.00' ] 100
  // [ '14.60', '17.10', '19.30', '15.50', '16.70', '16.80' ] 1000
  // [ '16.71', '16.68', '16.69', '16.66', '16.67', '16.59' ] 1000000
}

main();