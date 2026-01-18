let mother = {
  name: "Priya Singh",
  age: 33,
  address: "Baner, Pune",
  gender: "female",
  city: "Pune",
};

let student = {
  name: "Pratik Patil",
  age: 15,
  standard: "10th",
  gender: "male",
  address: "Viman Nagar, Pune",
  section: "C",
};

//to update new values...
mother.occupation = "Housewife";
student.class = "X";

console.log({ mother, student });

/* Create a vehicle object that has following properties: 
number of seats, top speed, mileage, number of airbags */
let vehicle1 = {
  noOfSeats: 7,
  topSpeed: 180,
  mileage: 40,
  noOfAirbags: 5,
};

/* updating the number of seats */
vehicle1.noOfSeats = 4;

/* adding a property in vehicle */
vehicle1.colors = ["white", "black", "grey"];

/* deleting a property in vehicle */
delete vehicle1.noOfAirbags;

/* nested objects */
vehicle1.address = {
  addressLine1: "Aria tower",
  addressLine2: "Baner",
  city: "Pune",
  state: "Maharashtra",
};

//console.log("The address of vehicle is", vehicle1.address.city);
//console.log("City of vehicle address:", vehicle1?.address?.city);

/* accessing a property that is not yet defined */
//console.log(vehicle1.name); //--> this will show error because there is no key present with "name".

/* accessing a property that is not yet defined */
vehicle1.name = "Scorpio";
console.log(vehicle1);

const vehicle2 = {
  name: "Thar",
  noOfSeats: 4,
  topSpeed: 180,
  mileage: 40,
  colors: ["white", "black", "grey"],
  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
  },
};

/* array of objects */
const vehicles = [vehicle1, vehicle2];
console.log({ vehicles });

for (let i = 0; i < vehicles.length; i++) {
  console.log("Name of vehicle is:", vehicles[i]?.name);
  console.log("Name of the City:", vehicles[i]?.address?.city);
}

console.log("vehicle1.name", vehicle1.name);
console.log('vehicle1["name"]', vehicle1["name"]);

/* Object.values(objName) gives the array of Values */
const vehicleObjValues = Object.values(vehicle1);
const addressObjValues = Object.values(vehicle1.address);
console.log({ vehicleObjValues, addressObjValues });

/* for ... of loop in array of objects */
console.log("printing the array of objects using for ... of loop");
for (let value of vehicles) {
  console.log(value);
}

/* Change the value of city to Mumbai, if city is Pune using for ... of loop */
for (let vehicle of vehicles) {
  if (vehicle?.address?.city === "Pune") {
    vehicle.address.city = "Mumbai";
  }
}

let vehicle3 = {
  name: "XUV700",
  noOfSeats: 7,
  topSpeed: 180,
  currentSpeed: 100,
  mileage: 40,
  colors: ["white", "black", "grey"],
  address: {
    addressLine1: "Aria tower",
    addressLine2: "Baner",
    city: "Pune",
    state: "Maharashtra",
  },
  isRunning: function () {
    if (this.currentSpeed > 0)
      console.log("XUV is running at speed " + this.currentSpeed);
    else console.log("XUV is not running");
  },
};

vehicle3.isRunning();
vehicle3.currentSpeed = 0;
vehicle3.isRunning();

/* implement this Resume management system */

const resume = {
  name: "Vaibhav",
  email: "vaibhav@gmail.com",
  phone: "9876554322",
  skills: ["Javascript", "HTML", "CSS"],
  workExperience: ["Tally", "Chitkara University"],
  display: function () {
    // display all the details of the resume in any format
  },
  addSkills: function (newSkill) {
    //add this new skill to skills array
  },
  addWorkExperience: function (newExperience) {
    //add this new experience to work experience array
  },
  showSkills: function () {
    //shows all the skills
  },
};

resume.display();
resume.addSkills("React");
resume.addWorkExperience("AccioJob");
resume.showSkills();

/* Object.keys(objName) gives the array of keys */
const vehicleObjKeys = Object.keys(vehicle1);
const addressObjKeys = Object.keys(vehicle1.address);
console.log({ vehicleObjKeys, addressObjKeys });

/* for ... in loop in object */
console.log("Printing the vehicle1 object using for ... in loop");
for (let key in vehicle1) {
  console.log(key + ": " + vehicle1[key]);
}
