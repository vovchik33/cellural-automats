import {createField, FieldType} from "../../common/utils/field";
import {ConwayGameLifeCellType} from "../types";

export const createConwaysField = (
  width: number,
  height: number,
  initialValue: ConwayGameLifeCellType
): FieldType<ConwayGameLifeCellType> => {
  return createField(width, height, 0);
}

export const nextStep = (oldField: FieldType<ConwayGameLifeCellType>): FieldType<ConwayGameLifeCellType> => {
  const result: FieldType<ConwayGameLifeCellType> = createConwaysField(oldField[0].length, oldField.length, 0);
  for(let row = 0; row<oldField.length; row++) {
    for (let col = 0; col<oldField[row].length; col++) {
      let count = 0;
      for (let x=-1; x<2; x++) {
        for (let y=-1; y<2; y++) {
          (oldField[(row+x)%row][(col+y)%col] === 1 && (x!=0) && (y!=0) && count++)
        }
      }
      result[row][col] = (count===3 && oldField[row][col] === 0)
        ?1
        :((count===2 ||count===3) && oldField[row][col]===1
            ?1
            :0
        );
    }
  }
  return result;
}