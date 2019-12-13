import {createVector, VectorType} from "../../../../src/cellural-automats/common/utils/field";

const output = console.log;

describe("Field creation", () => {
  const vectorLength: number = 10;
  it("Create vector of number", () => {
    const initialNumber: number = 1;
    const vector: VectorType<number> = createVector(vectorLength, initialNumber);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every(value=>value===initialNumber));
  });

  it("Create vector of boolean", () => {
    const initialBoolean: boolean = true;
    const vector: VectorType<boolean> = createVector(vectorLength, initialBoolean);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every(value=>value===initialBoolean));
  });

  it("Create vector of string", () => {
    const initialString: string = "str";
    const vector: VectorType<string> = createVector(vectorLength, initialString);

    expect(vector.length).toBe(vectorLength);
    expect(true).toBe(vector.every(value=>value===initialString.slice()));
  });

  it("Create empty vector", () => {
    const vector: VectorType<any> = createVector(0, 1);

    expect(vector.length).toBe(0);
  });
})
