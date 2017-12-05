export function calculateGridSize(number) {
  let gridSize = 1;
  while ((gridSize * gridSize) < number) {
    gridSize++;
  }
  if (gridSize % 2 == 0) gridSize++;
  return gridSize;
}

export function getStepsToAccessPort(number) {
  const gridSize = calculateGridSize(number);
  const highestNumberInGrid = (gridSize * gridSize);

  const stepsToCenter = (gridSize - 1) / 2;
  const stepsBackwardsToPreviousCorner = (gridSize - 1);

  const cornerNumbers = [
    highestNumberInGrid,
    (highestNumberInGrid - (stepsBackwardsToPreviousCorner * 1)),
    (highestNumberInGrid - (stepsBackwardsToPreviousCorner * 2)),
    (highestNumberInGrid - (stepsBackwardsToPreviousCorner * 3) - 1)
  ].reverse();

  let cornerOne;
  let cornerTwo;
  for (let i = 0; i < cornerNumbers.length; i++) {
    cornerOne = cornerNumbers[i];
    cornerTwo = cornerNumbers[i + 1];
    if (number >= cornerOne && number <= cornerTwo) break;
  }

  console.log(`${number} is between ${cornerOne} and ${cornerTwo}`);

  const centerNumber = (cornerOne + stepsToCenter);
  if (number <= centerNumber) {
    // Walk forwards to the center, subtracting a required step each time
    let stepsOnEdge = stepsToCenter;
    for (let i = cornerOne; i <= centerNumber; i++) {
      if (number === i) break;
      stepsOnEdge--;
    }
    return (stepsToCenter + stepsOnEdge)
  } else {
    let stepsOnEdge = 0;
    for (let i = centerNumber; i <= cornerTwo; i++) {
      if (number === i) break;
      stepsOnEdge++;
    }
    return (stepsToCenter + stepsOnEdge)
  }
}

export function getStepsToAccessPort_old(number) {
  const gridSize = calculateGridSize(number);
  const highestNumberInGrid = (gridSize * gridSize);
  const placesBehindHighestNumber = (highestNumberInGrid - number);

  const gridSizeIsEven = (gridSize % 2 === 0);
  // Even grids have their highest number in the top-left
  // Odd grids have their highest number in the bottom-right

  const indexOfAccessPort = (gridSize % 2 === 0)
    ? (gridSize / 2)
    : ((gridSize - 1) / 2);

  if (gridSizeIsEven) {
    // Even grids have their highest number in the top-left
  } else {
    // Odd grids have their highest number in the bottom-right
    if (placesBehindHighestNumber >= gridSize) {
      // We are looking at the left column
      let verticalMovesRequired = (indexOfAccessPort - (placesBehindHighestNumber - gridSize)) - 1;
      if (verticalMovesRequired < 0) {
        verticalMovesRequired = verticalMovesRequired * -1;
      }
      const rightMovesRequired = indexOfAccessPort;
      return verticalMovesRequired + rightMovesRequired;
    } else {
      // We are looking at the bottom row
      let horizontalMovesRequired = (indexOfAccessPort - placesBehindHighestNumber);
      if (horizontalMovesRequired < 0) {
        horizontalMovesRequired = horizontalMovesRequired * -1;
      }
      const upMovesRequired = indexOfAccessPort;
      return horizontalMovesRequired + upMovesRequired;
    }
  }

  //console.log(`${number} needs grid size of ${gridSize}. Access port at grid index ${indexOfAccessPort}`);
  return 0;
}

/*
grid size -> row index
1 -> 0
2 -> 1
3 -> 1
4 -> 2
5 -> 2
6 -> 3
7 -> 3
*/

export function foo(number) {
  let gridSize = 1;
  while ((gridSize * gridSize) < number) {
    gridSize++;
  }
  if (gridSize % 2 == 0) gridSize++;

}