/* All necessary packages for this application */
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./shapes");

const questions = [
  {
    type: "input",
    name: "charChoice",
    message: "Enter up to three characters for your logo.",
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
    message: "Choose a shape for your logo",
    choices: ["Triangle", "Square", "Circle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color for the shape you have selected using a color keyword or hexadecimal number.",
  },
];
