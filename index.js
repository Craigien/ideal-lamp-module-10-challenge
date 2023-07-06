const inquirer = require('inquirer');
const fs = require('fs');


function getUserInput()
{
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter up to three characters that you would like to see in the logo',
                name: 'characters',
            },

            {
                type: 'input',
                message: 'Please enter the desired color of the text: color name or hexidecimal',
                name: 'textColor',
            },

            {
                type: 'list',
                message: 'Please choose the desired shape for the logo',
                choices: ['Circle', 'Triangle', 'Square'],
                name: 'shape',
            },

            {
                type: 'input',
                message: 'Please enter the desired color of the shape: color name or hexidecimal',
                name: 'shapeColor',
            },
        ])
        .then((response) => {
            console.log(response);

            if (response.shape === "Circle")
            {
                const renderShape = new Circle(response.characters, response.textColor, response.shapeColor);

                const output = renderShape.render();
            }
        });
}

getUserInput();

// To Do

// Use JEST to confirm that user entered valid inputs before generating SVG file
// Create classes for different shapes
// Write SVG file
// Comments
// README