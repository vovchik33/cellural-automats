import {createConwaysField} from 'cellural-automats/conways-game-life/models/conways-game-life';
import {nextStep} from "../../../../src/cellural-automats/conways-game-life/models/conways-game-life";
import {compareFields} from "../../../../src/cellural-automats/common/utils/field";

describe("Conway's game life field creation", () => {
  it("Empty field creation", () => {
    const conwaysGameLifeField = createConwaysField(0,0,0);

    expect(conwaysGameLifeField.length).toEqual(0);
  });

  it("One row field creation", () => {
    const conwaysGameLifeField = createConwaysField(0,1,0);

    expect(conwaysGameLifeField.length).toEqual(1);
  });

  it("One cell field creation", () => {
    const conwaysGameLifeField = createConwaysField(1,1,0);

    expect(conwaysGameLifeField.length).toEqual(1);
  });
});

describe("Conway's game life next step", () => {
  it("Lighter", () => {
    let conwaysGameLifeField1 = createConwaysField(5,5,0);
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;
    conwaysGameLifeField1[2][3] = 1;

    let conwaysGameLifeField2 = nextStep(conwaysGameLifeField1);
    let conwaysGameLifeField3 = nextStep(conwaysGameLifeField2);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeFalsy();
    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField3)).toBeTruthy();

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);
    console.log(conwaysGameLifeField3);
  });

  it("Block", () => {
    let conwaysGameLifeField1 = createConwaysField(4,4,0);
    conwaysGameLifeField1[1][1] = 1;
    conwaysGameLifeField1[1][2] = 1;
    conwaysGameLifeField1[2][1] = 1;
    conwaysGameLifeField1[2][2] = 1;

    let conwaysGameLifeField2 = nextStep(conwaysGameLifeField1);

    expect(compareFields(conwaysGameLifeField1, conwaysGameLifeField2)).toBeTruthy();

    console.log(conwaysGameLifeField1);
    console.log(conwaysGameLifeField2);
  });
})
