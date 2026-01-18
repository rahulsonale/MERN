let data = [];

let firstname = document.querySelector("#firstname");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email1");
let confirm_email = document.querySelector("#email2");
let checkemail = document.querySelector(".checkemail");
let gender = document.querySelector("#gender");

let femaleContainer = document.createElement("div");
const heading = document.createElement("h2");
heading.className = "femalenames";
heading.innerText = "Female Candidates";
let ul = document.createElement("ul");

femaleContainer.append(heading);
femaleContainer.append(ul);
document.body.appendChild(femaleContainer);

checkemail.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value === confirm_email.value && email.value !== "") {
    console.log("Emails match ");
  } else {
    console.log("Emails do not match ");
  }

  let obj = {
    firstname: firstname.value,
    lastname: lastname.value,
    email: email.value,
    confirm_email: confirm_email.value,
    gender: gender.value,
  };
  data.push(obj);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    if (data[i].gender == "female") {
      console.log(data[i].firstname);
    }
  }
  if (obj.gender === "female") {
    const list = document.createElement("li");
    list.innerText = obj.firstname;
    ul.append(list);
  }
});
