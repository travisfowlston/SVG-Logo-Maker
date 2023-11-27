/* All necessary packages for this application */
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "How would you describe your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "Please include your installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please include your usage information:",
  },
];
