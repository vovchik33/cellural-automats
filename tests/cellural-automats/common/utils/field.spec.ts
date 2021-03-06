import {
  cloneMatrix,
  cloneVector,
  compareMatrixes,
  compareVectors,
  createMatrix,
  createVector,
  concatVector,
  MatrixType,
  VectorType,
} from "cellural-automats/common/utils";

describe("Vector creation", () => {
  const vectorLength: number = 10;
  it("Create vector of number", () => {
    const initialNumber: number = 1;
    const vector: VectorType<number> = createVector(vectorLength, initialNumber);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every((value: number) => value === initialNumber));
  });

  it("Create vector of boolean", () => {
    const initialBoolean: boolean = true;
    const vector: VectorType<boolean> = createVector(vectorLength, initialBoolean);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every((value: boolean) => value === initialBoolean));
  });

  it("Create vector of string", () => {
    const initialString: string = "str";
    const vector: VectorType<string> = createVector(vectorLength, initialString);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every((value: string) => value === initialString.slice()));
  });

  it("Create empty vector", () => {
    const vector: VectorType<any> = createVector(0, 1);

    expect(vector.length).toBe(0);
  });
});

describe("Field creation", () => {
  const fieldWidth: number = 3;
  const fieldHeight: number = 2;

  it("Create field of number", () => {
    const initialValue: number = 1;
    const field: MatrixType<number> = createMatrix(fieldWidth, fieldHeight, initialValue);

    expect(field.length).toBe(fieldHeight);
    field.forEach((value: VectorType<number>) => {
      expect(value.length).toBe(fieldWidth);
      expect(value.every((item: number) => item === initialValue));
    });

  });

  it("Create field of SomeType", () => {
    interface ISomeType {
      value: number;
    }
    const initialValue: ISomeType = {value: 1};
    const field: MatrixType<ISomeType> = createMatrix(fieldWidth, fieldHeight, initialValue);

    console.log(field);
    expect(field.length).toBe(fieldHeight);
    field.forEach((row: VectorType<ISomeType>) => {
      expect(row.length).toBe(fieldWidth);
      expect(row.every((item: ISomeType) => item.value === 1)).toBe(true);
    });

  });

  it("Create field with empty rows", () => {
    const rowsNumber: number = 10;
    const initialValue: boolean = true;
    const field: MatrixType<any> = createMatrix(0, rowsNumber, initialValue);

    console.log(field);

    expect(field.length).toBe(rowsNumber);
    field.forEach((row: any) => {
      expect(row.length).toBe(0);
    });
  });

  it("Create empty field", () => {
    const field: MatrixType<any> = createMatrix(0, 0, 1);

    expect(field.length).toBe(0);
  });

});

describe("Field cloning", () => {
  it("Vector cloning", () => {
    const vector1: VectorType<number> = createVector(10, 1);
    const vector2: VectorType<number> = cloneVector(vector1);

    console.log(vector1);
    console.log(vector2);

    expect(compareVectors(vector1, vector2)).toBeTruthy();
  });

  it("Field cloning", () => {
    const field1: MatrixType<number> = createMatrix(5, 5, 1);
    const field2: MatrixType<number> = cloneMatrix(field1);

    console.log(field1);
    console.log(field2);

    expect(compareMatrixes(field1, field2)).toBeTruthy();
  });
});

describe("Field concat", () => {
  it("Vector concating", () => {
    const vector1: VectorType<number> = createVector(10, 1);
    const vector2: VectorType<number> = createVector(5, 2);
    const vector3: VectorType<number> = concatVector(vector1, vector2, 5);
    const vector4: VectorType<number> = [1,1,1,1,1,2,2,2,2,2];

    console.log(vector1);
    console.log(vector2);
    console.log(vector3);
    console.log(vector4);

    expect(vector3.length).toBe(10);
    expect(compareVectors(vector3, vector4)).toBeTruthy();
  });

  // it("Field concating", () => {
  //   const field1: MatrixType<number> = createField(5, 5, 1);
  //   const field2: MatrixType<number> = cloneMatrix(field1);
  //
  //   console.log(field1);
  //   console.log(field2);
  //
  //   expect(compareMatrixes(field1, field2)).toBeTruthy();
  // });
});
