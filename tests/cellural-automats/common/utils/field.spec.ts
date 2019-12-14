import {createField, createVector, FieldType, VectorType} from "cellural-automats/common/utils/field";

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
    const field: FieldType<number> = createField(fieldWidth, fieldHeight, initialValue);

    expect(field.length).toBe(fieldHeight);
    field.forEach((value: VectorType<number>) => {
      expect(value.length).toBe(fieldWidth);
      expect(value.every((value: number) => value === initialValue))
    })

  });

  it("Create field of SomeType", () => {
    type SomeType = {
      value: number
    }
    const initialValue: SomeType = {value:1};
    const field: FieldType<SomeType> = createField(fieldWidth, fieldHeight, initialValue);

    console.log(field);
    expect(field.length).toBe(fieldHeight);
    field.forEach((row: VectorType<SomeType>) => {
      expect(row.length).toBe(fieldWidth);
      expect(row.every((item: SomeType) => item.value === 1)).toBe(true);
    })

  });

  it("Create field with empty rows", () => {
    const rowsNumber: number = 10;
    const initialValue: boolean = true;
    const field: FieldType<any> = createField(0, rowsNumber, initialValue);

    console.log(field);

    expect(field.length).toBe(rowsNumber);
    field.forEach((row: any) => {
      expect(row.length).toBe(0);
    })
  });

  it("Create empty field", () => {
    const field: FieldType<any> = createField(0, 0, 1);

    expect(field.length).toBe(0);
  });

});

