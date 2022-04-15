import "./style.scss";
import App from "./App";

const spiderman = (person: String) => {
  return "Hello, " + person;
};

/* console.log(`API URL is: ${process.env.API_URL}`); */
console.log(`DEVELOPMENT API URL: ${process.env.API_URL_DEV}`);
console.log(`Secret key: ${process.env.S3_API}`);
console.log(`PRODUCTION API URL: ${process.env.API_URL_PROD}`);

let user = `Secret key: ${process.env.S3_API}`;

function component() {
  const element = document.createElement("div");

  element.innerHTML = spiderman(user);

  return element;
}

document.body.appendChild(component());

class Car {
  model: String;
  doors: Number;
  isElectric: Boolean;

  constructor(model: String, doors: Number, isElectric: Boolean) {
    this.model = model;
    this.doors = doors;
    this.isElectric = isElectric;
  }

  make(): void {
    console.log(`This car is ${this.model} which has ${this.doors} doors`);
  }
}
let newCar = new Car("Innova", 4, false);
newCar.make();
