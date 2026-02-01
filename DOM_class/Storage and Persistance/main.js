//Object Literals syntax

let person = {
  name: "Gaurav",
  age: 30,
};

//JSON Format
// JSON.parse('{"name":"Rahul","age":22,"city":"Pune"}')
// {name: 'Rahul', age: 22, city: 'Pune'} --> Output

//JSON.parse converts json data in object format
//Now we can access the propertie of it .

//JSON.stringyfy --> converts it again back to original JSON format

//Local Storage
localStorage.setItem("theme", "dark"); // to set in storage
localStorage.getItem("theme"); // to retreive from storage
localStorage.removeItem("theme"); //to remove from storage

//storing multiple values in localstorage
localStorage.setItem("name", "Shanaya");
localStorage.setItem("Age", 21);
localStorage.setItem("City", "Mumbai");

//removes all items from localstorage
localStorage.clear();
