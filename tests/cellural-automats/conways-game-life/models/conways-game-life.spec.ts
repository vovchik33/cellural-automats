import {createConwaysField} from 'cellural-automats/conways-game-life/models/conways-game-life';

describe("Conway's game life field creation", () => {
  it("Empty field creation", () => {
    const conwaysGameLifeField = createConwaysField(0,0);

    expect(conwaysGameLifeField.length).toEqual(0);
  });

  it("One row field creation", () => {
    const conwaysGameLifeField = createConwaysField(0,1);

    expect(conwaysGameLifeField.length).toEqual(1);
  });

  it("One cell field creation", () => {
    const conwaysGameLifeField = createConwaysField(1,1);

    expect(conwaysGameLifeField.length).toEqual(1);
  });
});
