export function mazeJumpSteps(jumpOffsets) {
  let stillInTheMaze = true;
  let steps = 0;

  let currentPositionIndex = 0;
  while (stillInTheMaze) {
    const currentInstruction = jumpOffsets[currentPositionIndex];
    const nextPositionIndex = (currentPositionIndex + currentInstruction);

    jumpOffsets[currentPositionIndex] = (currentInstruction + 1);
    steps++;
    stillInTheMaze = (nextPositionIndex >= 0 && nextPositionIndex < jumpOffsets.length);
    currentPositionIndex = nextPositionIndex;
  }

  return steps;
}

export function mazeJumpSteps2(jumpOffsets) {
  let stillInTheMaze = true;
  let steps = 0;

  let currentPositionIndex = 0;
  while (stillInTheMaze) {
    const currentInstruction = jumpOffsets[currentPositionIndex];
    const nextPositionIndex = (currentPositionIndex + currentInstruction);

    if (currentInstruction >= 3) {
      jumpOffsets[currentPositionIndex] = (currentInstruction - 1);
    } else {
      jumpOffsets[currentPositionIndex] = (currentInstruction + 1);
    }

    steps++;
    stillInTheMaze = (nextPositionIndex >= 0 && nextPositionIndex < jumpOffsets.length);
    currentPositionIndex = nextPositionIndex;
  }

  return steps;
}