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

/*Local Storage : It is the data which is stored in the browser for a particular URL, the data is permanent,*/
//Data is removed when the browser data is cleared or if it is programatically remove item or clear method.

localStorage.setItem("theme", "dark"); // to set in localstorage
localStorage.getItem("theme"); // to retreive from localstorage
localStorage.removeItem("theme"); //to remove from localstorage

//storing multiple values in localstorage
localStorage.setItem("name", "Shanaya");
localStorage.setItem("Age", 21);
localStorage.setItem("City", "Mumbai");

//removes all items from localstorage
//localStorage.clear();

const FORM_DATA = "user-info";

function loadFormDataFromStorage() {
  let formData = localStorage.getItem(FORM_DATA);
  if (formData) {
    formData = JSON.parse(formData);
  }
  return formData;
}

document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("#user-info");
  form.addEventListener("input", function () {
    let formData = new FormData(this);
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let gender = formData.get("gender");
    //console.log({ firstName, lastName, gender });
    console.log();

    localStorage.setItem(
      "user-info",
      JSON.stringify({ firstName, lastName, gender }),
    );

    form.addEventListener("submit", function () {});
  });
});
