/* All necessary packages */
const { Triangle, Circle, Square } = require("./shapes");

/* Test for a triangle with a blue background. */
describe("Triangle", () => {
  test("Tests for a triangle with a blue background.", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

/* Test for a circle with a blue background. */
describe("Circle", () => {
  test("Tests for a circle with a blue background.", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<circle cx="25" cy="75" r="20" stroke="red" fill="blue" stroke-width="5"/>'
    );
  });
});

/* Test for a square with a blue background. */
describe("Square", () => {
  test("Tests for a square with a blue background.", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="10" y="10" width="30" height="30" stroke="black" fill="blue" stroke-width="5"/>'
    );
  });
});
