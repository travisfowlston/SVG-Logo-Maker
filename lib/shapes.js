/* Created a parent class called shape. */
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

/* A class for a triangle that inherits properties from the parent shape class. */
class Triangle extends Shape {
  render() {
    /* Returns the SVG code for a triangle with the specified color. */
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

/* A class for a circle that inherits properties from the parent shape class. */
class Circle extends Shape {
  render() {
    /* Returns the SVG code for a circle with the specified color. */
    return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
  }
}

/* A class for a square that inherits properties from the parent shape class. */
class Square extends Shape {
  render() {
    /* Returns the SVG code for a square with the specified color. */
    return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
