class Circle {

    constructor(radius) {
      this.radius = radius
    }
  
    //getter method
    get diameter() {
      return this.radius * 2;
    }
  
    //setter method
    set diameter(num) {
      this.radius = num / 2;
    }
  
    //getter method
    get circumference() {
      return Math.PI * this.diameter
    }
  
    set circumference(num) {
        this.radius = num / (2 * Math.PI)
    }
  
    // //getter method
    get area() {
      return Math.PI * Math.pow(this.radius, 2)
    }

  }