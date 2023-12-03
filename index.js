/* All necessary packages for this application. */
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

/* Created an array of questions for the user to create the logo. */
const questions = [
  {
    type: "input",
    name: "charChoice",
    message: "Enter up to three characters for your logo.",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      } else {
        return "Please enter up to three characters.";
      }
    },
  },
  {
    type: "input",
    name: "charColor",
    message:
      "Enter a color for the characters using a color keyword or hexadecimal number.",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape for your logo.",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color for the shape you have selected using a color keyword or hexadecimal number.",
  },
];

/* Prompts the user with the questions array using Inquirer. */
inquirer.prompt(questions).then((answers) => {
  /* Used a switch statement to check for the shape that is selected instead of if-else statments. */
  let shape;
  switch (answers.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    case "Circle":
      shape = new Circle();
      break;
  }

  /* Sets the color for the shape based on the answer to the prompt. */
  shape.setColor(answers.shapeColor);

  /* Renders the shape with the specified color. */
  const svgShapeCode = shape.render();

  /* Generate the SVG text code from the characters prompt with the specified color. */
  const svgCharCode = `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.charColor}">${answers.charChoice}</text>`;

  /* Combines the shape and characters SVG code within a group element so that the text is put on top of the shape. */
  const svgGroupCode = `<g>${svgShapeCode}${svgCharCode}</g>`;

  /* Puts the group element from above with <svg> tags and specifies width and height of logo container. */
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgGroupCode}</svg>`;

  /* Creates the logo.svg file and writes the SVG code to it. */
  fs.writeFile("logo.svg", svgCode, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Successfully created logo.svg");
    }
  });
});
