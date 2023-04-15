// Add your Circle class here
// create a class of Circle
// Circle will accept 1 parameter, radius, and use this.radius to store the value

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Define getter method for diameter 
    // calculate each value using this.radius
    get diameter() {
        return this.radius * 2;
    }
    // Define setter method for diameter which will accept values for each calculation, 
    // calculate the radius based on the input value and set this.radius accordingly
    // which will accept values for each calculation
    set diameter(diameter) {
        this.radius = diameter / 2
    }



    // define getter method for circumference
    // calculate each value using this.radius
    get circumference() {
        return this.radius * 2 * Math.PI;
    }
    // Define setter method for circumference
    // calculate the radius based on the input value and set this.radius accordingly
    // which will accept values for each calculation
    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI)
    }



    // define getter method for area
    // calculate each value using this.radius
    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    // Define setter method for area
    // calculate the radius based on the input value and set this.radius accordingly
    // which will accept values for each calculation
    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}