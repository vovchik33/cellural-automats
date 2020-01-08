import {createMatrix, MatrixType} from "../../common/utils/matrix";
import {ConwayElementType, ConwayGameLifeCellType, mapConwayElementTypeToArray} from "../types";

export const createConwaysField = (
  width: number,
  height: number,
  initialValue: ConwayGameLifeCellType,
): MatrixType<ConwayGameLifeCellType> => {
  return createMatrix(width, height, initialValue);
};

export const nextStep = (oldField: MatrixType<ConwayGameLifeCellType>): MatrixType<ConwayGameLifeCellType> => {
  const result: MatrixType<ConwayGameLifeCellType> = createConwaysField(oldField[0].length, oldField.length, 0);
  const rowCount: number = oldField.length;
  const colCount: number = oldField[0].length;
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      let count = 0;
      for (let x = -1; x < 2; x++) {
        for (let y = -1; y < 2; y++) {
          if (oldField[(row + x + rowCount) % rowCount][(col + y + colCount) % colCount]) { count++; }
        }
      }
      if (oldField[row][col] > 0) { count--; }
      result[row][col] = (count === 3 && oldField[row][col] === 0)
        ? 1
        : ((count === 2 || count === 3) && oldField[row][col] === 1
          ? 1
          : 0
        );
    }
  }
  return result;
};

export const putFigure = (
  target:MatrixType<ConwayGameLifeCellType>,
  x:number,
  y:number,
  elementType:ConwayElementType
): boolean => {
  const figureMask: Array<Array<number>> = mapConwayElementTypeToArray(elementType);
  figureMask.forEach((row: Array<number>, rowIndex:number) => {
    row.forEach( (item: number, colIndex:number) => {
      if (item) {
        target[y+rowIndex][x+colIndex] = figureMask[rowIndex][colIndex];
      }
    });
  });
  return true;
};