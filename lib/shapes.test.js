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
      '<circle cx="150" cy="115" r="80" fill="blue" />'
    );
  });
});

/* Test for a square with a blue background. */
describe("Square", () => {
  test("Tests for a square with a blue background.", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<rect x="73" y="40" width="160" height="160" fill="blue" />'
    );
  });
});
