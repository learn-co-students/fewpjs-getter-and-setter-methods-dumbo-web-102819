// Add your Circle class here

class Circle {

    constructor(radius) {
        this.radius = radius
    }
    
    get diameter() {
        return this.radius * 2
    }

    set diameter(newDia) {
        this.radius = newDia / 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    set circumference(newCir) {
        this.radius = ((newCir / Math.PI) / 2)
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }
}