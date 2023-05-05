/*window.onload = pageLoadedListener;

function pageLoadedListener() {
    alert("I'm alive!");
}*/

/*window.onload = init;

function init() {
    let image = document.getElementById("zero");
    image.onclick = showAnswer;
}

function showAnswer() {
    let image = document.getElementById("zero");
    image.src = "../imagez/xero.jpg";
}

this was hardcoded to unblur img zero*/

//window.onload = init;

function init() {
  let image = document.getElementsByTagName("img");
  for (let i = 0; i < image.length; i++) {
    image[i].onmouseover = showImage;
  }
}

function showImage(eventObj) {
  let image = eventObj.target;

  let name = image.id;
  name = name + ".jpg";
  image.src = name;

  setTimeout(reblur, 2000, image);
}

function reblur(image) {
  var name = image.id;
  name = name + "blur.jpg";
  image.src = name;
}

/*function timeHandler() {
    alert("Hey what are you doing just sitting there staring at the screen")

}

/*setTimeout(timeHandler, 5000);
setInterval(timeHandler, 1000);



let tick = true;
function ticker() {
    if (tick) {
        console.log("Tick");
        tick = false;
    } else {
        console.log("Tock");
        tick = true;
    }
}
setInterval(ticker, 1000);
/*Window.onload = init;
function init() {
    let map = document.getElementById("map");

    onmousemove = showCoords;
}

function showCoords(eventObj) {
    let coords = document.getElementById("coords");
    let map = eventObj.target

    
}*/

function resize() {
  let element = document.getElementById("display");
  element.innerHTML = element.innerHTML + " that tickles!";
}

window.onresize = resize;

let addOne = function (x) {
  return x + 1;
};
let six = addOne(5);

//window.onload = addOne;
//alert("The page is loaded!");

console.log(six);

/*function fun(echo) {
    console.log(echo);
}

fun("hello");

function boo(aFunction) {
    aFunction("boo");
}
boo(fun);
console.log(fun);

fun(boo);

let moreFun = fun;
moreFun("hello again");

function echoMaker() {
    return fun;
}
let bigFun = echoMaker();
bigFun("Is there an echo?");*/

passengers = [
  { name: "Jane Doloop",  paid: true,  ticket: "Coach" },
  { name: "Dr. Evel",     paid: true,  ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: false, ticket: "coach" },
  { name: "Sal Russman",  paid: true,  ticket: "premium" },
  { name: "Jocall Dean",  paid: false, ticket: "premium" },
  { name: "Tom Bundwood", paid: false, ticket: "coach" },
];

function checkPaid(passengers) {
  message = passengers.paid;
  for (let i = 0; i < passengers.length; i++) {
    if (passengers[i].paid) {
      return false;
    }
    alert(message + " has paid, Come on board please");
  }
  return true;
}

//Passing functions from functions

function createDrinkOrder(passenger) {
  let orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      alert("Your choice is wine, cola or water");
    };
  } else {
    orderFunction = function () {
      alert("your choice is cola or water.");
    };
  }
  return orderFunction;
}

function createDinnerOrder(passenger) {
  let DinnerOrder;
  if (passenger.ticket === "firstclass") {
    DinnerOrder = function () {
      alert("Chicken  or  Pasta ?");
    };
  } else if (passenger.ticket === "premium") {
    DinnerOrder = function () {
      alert(" Snack box or Chesse plate");
    };
  } else {
    DinnerOrder = function () {
      alert("Peanuts   or   Pretzels");
    };
  }
  return DinnerOrder;
}
//function serveCustomer(passengers) {
createDinnerOrder(passengers );

function addN(n) {
  let adder = function (x) {
    return n + x;
  };
  return adder;
}

let toAdd = addN(3);
console.log(toAdd(10));

/*function serveCustomer(passengers) {
  let getDrinkOrderFunction = createDrinkOrder(passengers);

  let getDinnerOrderFunction = createDinnerOrder(passengers);

  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
  getDrinkOrderFunction();
  getDinnerOrderFunction();
  getDrinkOrderFunction();
}

function servePassengers(passengers) {
  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }

  for (let i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}
servePassengers(passengers);*/


function Dog(call, breed, weight){
  this.call = call;
  this.breed = breed;
  this.weight = weight;
  this.bark = function () {
    if (this.weight > 25) {
      alert(this.call + ' says woof woof!')
    } else {
      alert(this.call + 'says weef weef!')
    }
  };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog('Fluffy', "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let dogs = [fido, fluffy, spot];

for (let i = 0; i < dogs.length; i++) {
  dogs[i].bark();
  let size = "small";
  if (dogs[i].weight > 10) {
    size = 'large';
  }

  console.log("Dog: " + dogs[i].call + " is a " + size + ' ' + dogs[i].breed);
  
}

class Car {
  constructor(make, model, year, color, mileage, passengers, convertible, started) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.cola1 = color;
    this.mileage = mileage;
    this.passengers = passengers;
    this.convertible = convertible;
    this.started = started;
    this.started = function () {
      this.started = true;
    };
    this.stop = function () {
      this.started = false;
    };
    this.drive = function () {
      if (this.started) {
        console.log(this.make + " " + this.model + " goes zoom zoom!");
      } else {
        console.log("Start the engine first.");
      }
    };
  }
};

let chevy = new Car("Chevy", 'Bel Air', 1957, 'red', 1021, 2, false, false);
let fiat = new Car('fiat', '500', 1957, 'medium Blue', 88000, 2, false, false);
let taxi = new Car('webville motors', 'Taxi', 1955, 'yellow', 281341, 4, false, false);
let cadi = new Car('GM', 'cadillac', 1954, 'tan', 12892, 5, false, false);
let testCar = new Car('webville motors', 'Test car', 2014, 'marine', 2, true, 21);
let cars = [chevy, cadi, taxi, fiat, testCar];

for (let i = 0; i < cars.length; i++) {
  cars[i].started();
  cars[i].drive();
  cars[i].drive();
  cars[i].stop();
  
}

let limoParams = { make: 'Webville Motors', model: 'limo', year: 1983, color: 'back', passengers: 12, convertible: true, mileage: 21120 }; 
let limo = new Car(limoParams);
let limoDog = new Dog('Rhapsody in Blue', 'poodle', 40);

console.log(limo.make + " " + limo.model + " is a " + typeof limo);
console.log(limoDog.name + " is a " + typeof limoDog);

function dogCatcher(obj) {
  if (obj instanceof Dog) {
    return true
    
  };
  return false;
}
function Cat(name, breed, weight) {

}

let meow = new Cat('meow', 'siamse', 10);
let whiskers = ('whiskers', 'mixed', 12);
let fido2 = { name: 'Fido', breed: 'Mixed', weight: 38 };

/*function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  this.bark = function() {
    if (this.weight > 25) {
      alert(this.name + " says woof!");
    } else {
      alert(this.name + " says yip!");
    }
  };
}

let fluffy2 = new Dog('Fluffy', 'poodle', 30);
let spot2 = new Dog('spot', 'chihuahua', 10);
let dogs2 = [meow, whiskers, fido, fluffy, spot];

for (let i = 0; i, dogs2.length; i++) {
  if (dogCatcher(dogs2[i])) {
    console.log(dogs2[i].name + " is a dog!");
  }
}
*/

function Male(Identity, color, job, married, single) {
  this.Identity = name;
  this.color = color;
  this.job = job;
  this.married = married;
  this.single = single;

}

//adding and removing properties from object constructors
let Man = new Male("Stanley", "Black", 'cop', true, false);
let Guy = new Male('Jacob', 'White', 'accountant', false, true);

//adding
Man.Powers = true;
Man.weight = 264;
Guy.car = function (NumOfCars) {
  return (NumOfCars = 32);
};
let trust = Guy.car()
console.log(trust);

//instanceof
let studentparams = { Gender: 'Male', Class: "ss3", Age: 16, Passsed: true, Prefect: false };

let student = new inTake(studentparams);
//we will add and remove property, buh the instanceof willl still be student

student.course = 'arts';
delete student.Passsed;

let oy = (student instanceof 'inTake');
console.log(oy);

