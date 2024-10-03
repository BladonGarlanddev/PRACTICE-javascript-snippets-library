

class Vehicle {
    make:string;
    model:string;
    year:number;

  constructor(_make:string, _model:string, _year:number) {
    // Initialize the vehicle's make, model, and year.
    this.make = _make;
    this.model = _model;
    this.year = _year;
  }

  // Add a method to display vehicle information.
  displayInfo() {
    console.log(`Make: ${this.make}`)
    console.log(`Make: ${this.model}`);
    console.log(`Make: ${this.year}`);
  }

  // Add a method to start the vehicle.
  start() {
    console.log("VROOOOOOM VRATATABRATAATNYANYNAYNAY")
  }
}

// Derived Class: Car (inherits from Vehicle)
// Explore inheritance, super(), and method overriding.
class Car extends Vehicle {
    doors: number;
    private _price: number;
    
  constructor(_make:string, _model:string, _year:number, _doors:number, _price:number) {
    super(_make, _model, _year)
    this.doors =  _doors;
    this._price = _price;
  }

  // Override the start method to add specific behavior for cars.
  start() {
    super.start()
  }

  get price() {
    return this._price
  }

  set price(price:number) {
    this._price = price
  }

  static sayVroom() {
    console.log("vroom")
  }
}



// Singleton Pattern
// Explore the singleton pattern to ensure only one instance of a class is created.

class CarFactory {
  constructor() {
    if (CarFactory.instance instanceof CarFactory) {
      return CarFactory.instance;
    }
    Object.freeze(this);
    CarFactory.instance = this;
    
    // Initialize the factory (e.g., keep track of car production).
  }

  createCar(make, model, year, doors) {
    // Create a new car instance and return it.
  }
}

// Example Use Cases:

// 1. Instantiate a Vehicle and call its methods.
// 2. Instantiate a Car and call its methods (including overridden ones).
// 3. Experiment with method chaining.
// 4. Use static methods and properties.
// 5. Use getters and setters to manage private properties.
// 6. Demonstrate the singleton pattern by ensuring only one CarFactory instance exists.

let firstCar = new Car("ford", "aveo", "2025", 4, 100)
console.log(firstCar.price)
firstCar.price = 1000
console.log(firstCar.price)