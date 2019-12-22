import {createField, FieldType} from "cellural-automats/common/utils/field";
import {ConwayElementType, ConwayGameLifeCellType, mapConwayElementTypeToArray} from "../types";

export const createConwaysField = (
  width: number,
  height: number,
  initialValue: ConwayGameLifeCellType,
): FieldType<ConwayGameLifeCellType> => {
  return createField(width, height, 0);
};

export const nextStep = (oldField: FieldType<ConwayGameLifeCellType>): FieldType<ConwayGameLifeCellType> => {
  const result: FieldType<ConwayGameLifeCellType> = createConwaysField(oldField[0].length, oldField.length, 0);
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
  field: FieldType<ConwayGameLifeCellType>,
  x: number,
  y: number,
  figure: ConwayElementType,
): boolean => {
  const figureMask: number[][] = mapConwayElementTypeToArray(figure);
  figureMask.forEach((row: number[], rowIndex: number) => {
    row.forEach( (item: number, colIndex: number) => {
      if (item) {
        field[y + rowIndex][x + colIndex] = 1;
      }
    });
  });
  return true;
};
