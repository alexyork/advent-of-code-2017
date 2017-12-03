import _ from 'lodash';

export function getSpreadsheetChecksum(spreadsheetInput) {
  const rows = spreadsheetInput.split('\n').map(r => r.trim()).filter(r => !!r);

  let checksum = 0;
  rows.forEach(row => {
    const cells = row.trim().split(',').map(c => parseInt(c, 10));
    const sortedCells = _.sortBy(cells);

    const smallestCellValue = sortedCells[0];
    const largestCellValue = sortedCells[sortedCells.length - 1];
    const difference = (largestCellValue - smallestCellValue);
    checksum += difference;
  });
  return checksum;
}

export function getSpreadsheetChecksum2(spreadsheetInput) {
  const rows = spreadsheetInput.split('\n').map(r => r.trim()).filter(r => !!r);

  let checksum = 0;
  rows.forEach(row => {
    const cells = row.trim().split(',').map(c => parseInt(c, 10));
    const sortedCells = _.sortBy(cells);
    let evenlyDivisibleNumbersFound = false;

    for (let i = 0; i < sortedCells.length; i++) {
      if (evenlyDivisibleNumbersFound) break;

      for (let k = (i + 1); k < sortedCells.length; k++) {
        if (evenlyDivisibleNumbersFound) break;

        const divisionResult = (sortedCells[k] / sortedCells[i]);
        const wasEvenlyDivisible = (divisionResult % 1) === 0;

        if (wasEvenlyDivisible) {
          evenlyDivisibleNumbersFound = true;
          checksum += divisionResult;
        }
      }
    }
  });
  return checksum;
}