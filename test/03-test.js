import { expect } from 'chai';
import { calculateGridSize, getStepsToAccessPort } from '../src/03.js';

/*
--- Day 3: Spiral Memory ---

You come across an experimental new kind of memory stored on an infinite
two-dimensional grid.

Each square on the grid is allocated in a spiral pattern starting at a
location marked 1 and then counting up while spiraling outward. For
example, the first few squares are allocated like this:

17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...
While this is very space-efficient (no squares are skipped), requested data
must be carried back to square 1 (the location of the only access port for this
memory system) by programs that can only move up, down, left, or right.
They always take the shortest path: the Manhattan Distance between the
location of the data and square 1.

For example:

* Data from square 1 is carried 0 steps, since it's at the access port.
* Data from square 12 is carried 3 steps, such as: down, left, left.
* Data from square 23 is carried only 2 steps: up twice.
* Data from square 1024 must be carried 31 steps.

How many steps are required to carry the data from the square identified in
your puzzle input all the way to the access port?

Your puzzle input is 368078.
*/

describe('AoC 03-01 - Infinite two-dimensional memory grid', () => {

  it('should calculate a grid of size 1 for number 1', () => {
    const result = calculateGridSize(1);
    expect(result).to.equal(1);
  });

  it('should calculate correct grid size for number 4', () => {
    const result = calculateGridSize(4);
    expect(result).to.equal(3);
  });

  it('should calculate correct grid size for number 9', () => {
    const result = calculateGridSize(9);
    expect(result).to.equal(3);
  });

  it('should calculate correct grid size for number 10', () => {
    const result = calculateGridSize(10);
    expect(result).to.equal(5);
  });

  it('should calculate correct grid size for number 12', () => {
    const result = calculateGridSize(12);
    expect(result).to.equal(5);
  });

  it('should calculate correct grid size for number 23', () => {
    const result = calculateGridSize(23);
    expect(result).to.equal(5);
  });

  it('should calculate correct steps for left column in 5x5 grid', () => {
    const expectedResults = [
      { number: 17, steps: 4 },
      { number: 18, steps: 3 },
      { number: 19, steps: 2 },
      { number: 20, steps: 3 },
      { number: 21, steps: 4 }
    ];
    expectedResults.forEach(data => {
      const result = getStepsToAccessPort(data.number);
      expect(result).to.equal(data.steps);
    });
  });

  it('should calculate correct steps for bottom row in 5x5 grid', () => {
    const expectedResults = [
      { number: 21, steps: 4 },
      { number: 22, steps: 3 },
      { number: 23, steps: 2 },
      { number: 24, steps: 3 },
      { number: 25, steps: 4 }
    ];
    expectedResults.forEach(data => {
      const result = getStepsToAccessPort(data.number);
      expect(result).to.equal(data.steps);
    });
  });

  it('should calculate 0 steps for number 1', () => {
    const result = getStepsToAccessPort(1);
    expect(result).to.equal(0);
  });

  it('should calculate 3 steps for number 12', () => {
    const result = getStepsToAccessPort(12);
    expect(result).to.equal(3);
  });

  it('should calculate 31 steps for number 1024', () => {
    const result = getStepsToAccessPort(1024);
    expect(result).to.equal(31);
  });

  it('should calculate X steps for number 368078', () => {
    const result = getStepsToAccessPort(368078);
    expect(result).to.equal(31);
  });

});
