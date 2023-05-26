// Add your Circle class here

// helpers.js
// Helper functions or Circle class implementation
// Define the Circle class and any other necessary functions or classes here

// Circle class implementation
class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    // Getter for diameter
    get diameter() {
      return this.radius * 2;
    }
  
    // Getter for circumference
    get circumference() {
      return 2 * Math.PI * this.radius;
    }
  
    // Getter for area
    get area() {
      return Math.PI * this.radius * this.radius;
    }
  
    // Setter for diameter
    set diameter(diameter) {
      this.radius = diameter / 2;
    }
  
    // Setter for circumference
    set circumference(circumference) {
      this.radius = circumference / (2 * Math.PI);
    }
  
    // Setter for area
    set area(area) {
      this.radius = Math.sqrt(area / Math.PI);
    }
  }
  
  module.exports = Circle;
  