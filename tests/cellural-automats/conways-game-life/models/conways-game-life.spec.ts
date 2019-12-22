// @ts-ignore
import {compareFields} from "cellural-automats/common/utils/field";
// @ts-ignore
import {createConwaysField, nextStep, putFigure} from "cellural-automats/conways-game-life/models/conways-game-life";
// @ts-ignore
import {ConwayElementType} from "cellural-automats/conways-game-life/types";

describe("Conway's game life field creation", () => {
  it("Empty field creation", () => {
    const conwaysGameLifeField = createConwaysField(0, 0, 0);

    expect(conwaysGameLifeField.length).toEqual(0);
  });

  it("One row field creation", () => {
    const conwaysGameLifeField = createConwaysField(0, 1, 0);

    expect(conwaysGameLifeField.length).toEqual(1);
  });

  it("One cell field creation", () => {
    const conwaysGameLifeField = createConwaysField(1, 1, 0);

    expect(conwaysGameLifeField.length).toEqual(1);
  });
});

describe("Conway's game life next step", () => {
  it("Lighter", () => {
    const conwaysGameLifeField1 = createConwaysField(5, 5, 0);
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;
    conwaysGameLifeField1[2][3] = 1;

    const conwaysGameLifeField2 = nextStep(conwaysGameLifeField1);
    const conwaysGameLifeField3 = nextStep(conwaysGameLifeField2);

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);
    console.log(conwaysGameLifeField3);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeFalsy();
    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField3)).toBeTruthy();
  });

  it("Block", () => {
    const conwaysGameLifeField1 = createConwaysField(4, 4, 0);
    conwaysGameLifeField1[1][1] = 1;
    conwaysGameLifeField1[1][2] = 1;
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;

    const conwaysGameLifeField2 = nextStep(conwaysGameLifeField1);

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeTruthy();
  });
});

describe("Conway's game life put figure", () => {
  it("Lighter", () => {
    const conwaysGameLifeField1 = createConwaysField(5, 5, 0);
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;
    conwaysGameLifeField1[2][3] = 1;

    const conwaysGameLifeField2 = createConwaysField(5, 5, 0);
    putFigure(conwaysGameLifeField2, 1, 2, ConwayElementType.LIGHTER);

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeTruthy();
  });

  it("Block", () => {
    const conwaysGameLifeField1 = createConwaysField(4, 4, 0);
    conwaysGameLifeField1[1][1] = 1;
    conwaysGameLifeField1[1][2] = 1;
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;

    const conwaysGameLifeField2 = createConwaysField(4, 4, 0);
    putFigure(conwaysGameLifeField2, 1, 1, ConwayElementType.BLOCK);

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeTruthy();
  });
});
