const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./Lib/shapes.js');


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
                const output = shapes.createCircle(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./Examples/Circle.svg', output, (err) => 
                    err ? console.error(err) : console.log("Successfully created circle")
                );
            }

            if (response.shape === "Triangle")
            {
                const output = shapes.createTriangle(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./Examples/Triangle.svg', output, (err) => 
                    err ? console.error(err) : console.log("Successfully created triangle")
                );
            }

            if (response.shape === "Square")
            {
                const output = shapes.createSquare(response.characters, response.textColor, response.shapeColor);

                console.log(output);

                fs.writeFile('./Examples/Square.svg', output, (err) => 
                    err ? console.error(err) : console.log("Successfully created square")
                );
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