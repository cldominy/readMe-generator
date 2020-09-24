const inquirer = require("inquirer");
const fs = require('fs');
const markdownGenerate = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
{
    type: "input",
    name: "title",
    message: "What is the title of the project?"
},
{
    type: "input",
    name: "description",
    message: "Input the description of the project:"
},
{
    type: "input",
    name: "installation",
    message: "Input the installation instructions for the project:"
},
{
    type: "input",
    name: "usage",
    message: "Input the project's usage:"
},
{
    type: "input",
    name: "credit",
    message: "List all contributors, third-party assets that require attribution and/or tutorials used for this project:"
},
{
    type: "list",
    name: "license",
    message: "Select a license for this project:",
    choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense"
    ]
},
{
    type: "input",
    name: "contributing",
    message: "Input guidelines for contributing to the project:"
},
{
    type: "input",
    name: "tests",
    message: "Input examples of how to run any tests for the project:"
},
{
    type: "input",
    name: "githublink",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
}
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, markdownGenerate(data), function(err){
        if (err){
            return console.log(err);
        };
        console.log("Success! New ReadMe file was created!");
    });
}

// function to initialize program
function init() {

    inquirer
    .prompt(questions)
    .then(data => writeToFile("README.md", data)
)};

// function call to initialize program
init();
