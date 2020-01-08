import {MatrixType} from "cellural-automats/common/utils/matrix";

export type ConwayGameLifeCellType = number;

export enum ConwayElementType {
  // static
  BLOCK,
  // fighter
  GLIDER,
  LIGHTER,
}

export const mapConwayElementTypeToArray = (type: ConwayElementType): MatrixType<number> => {
  switch (type) {
    case ConwayElementType.BLOCK:
      return [
        [1, 1],
        [1, 1],
      ];
    case ConwayElementType.GLIDER:
      return [
        [1, 0, 1],
        [0, 1, 1],
        [0, 1, 0],
      ];
    case ConwayElementType.LIGHTER:
      return [
        [1, 1, 1],
      ];
    default: return [[0]];
  }
};
