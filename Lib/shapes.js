// Contains classes for different shapes

class Circle {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <circle cx = "150" cy = "100" r = "80" fill = "${this.shapeColor}" />
            
            <text x = "150" y = "120" font-size = "60" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`

        return output;
    }
}

class Triangle {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <polyline points = "150, 18 244, 182 56, 182" fill = "${this.shapeColor}" />
            
            <text x = "150" y = "150" font-size = "50" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`

        return output;
    }
}

class Square {
    constructor(characters, textColor, shapeColor) {
        this.characters = characters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        const output = `<svg version = "1.1"
            width = "300" height = "200"
            xmlns = "http://www.w3.org/2000/svg">
            
            <rect x = "10" y = "10" width = "200" height = "200" fill = "${this.shapeColor}" />
            
            <text x = "110" y = "130" font-size = "80" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`

        return output;
    }
}

function createCircle(charactersInput, textColorInput, shapeColorInput)
{
    const circleOutput = new Circle(charactersInput, textColorInput, shapeColorInput);

    const renderCircle = circleOutput.render();

    return renderCircle;
}

function createTriangle(charactersInput, textColorInput, shapeColorInput)
{
    const triangleOutput = new Triangle(charactersInput, textColorInput, shapeColorInput);

    const renderTriangle = triangleOutput.render();

    return renderTriangle;
}

function createSquare(charactersInput, textColorInput, shapeColorInput)
{
    const squareOutput = new Square(charactersInput, textColorInput, shapeColorInput);

    const renderSquare = squareOutput.render();

    return renderSquare;
}


module.exports = {createCircle, createTriangle, createSquare};