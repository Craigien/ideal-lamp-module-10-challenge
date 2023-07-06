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
            
            <text x = "150" y = "125" font-size = "60" text-anchor = "middle" fill = "${this.textColor}">${this.characters}</text>

            </svg>`
    }
}

module.exports = {Circle};