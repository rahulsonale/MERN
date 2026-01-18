let section = document.createElement("section");
let para = document.createElement("p");
para.id = "title";
para.textContent = "Some random text here";

section.append(para);

let body = document.body.append(section);
console.dir(body);

const link = document.createElement("a");
link.href = "https://www.google.com/";
link.textContent = "Google";
link.target = "_blank";

section.append(link);
console.dir(link);

//insert Before
const span = document.createElement("span");
span.textContent = "This will be inserted before the link ";

section.insertBefore(span, link);

//prepend
const prependElement = document.createElement("p");
prependElement.textContent = "Will be added at the  beginning";

const anotherelement = document.createElement("div");
anotherelement.textContent = "text node inside the link";
section.prepend(prependElement, anotherelement);

//remove_elements
const removebtn = document.createElement("button");
removebtn.textContent = "Remove topmost element";

removebtn.addEventListener("click", function () {
  if (section.firstChild) {
    section.firstChild.remove();
  } else {
    alert("All elements removed");
  }
});

let div2 = document.createElement("div");
div2.textContent = "div below section : ";
document.body.append(div2);

div2.append(removebtn);

//there are two ways to remove all child node of an element

//1.innerhtml --> "" - we can set it to blank
//2.replacechildren() method - without any arguments - it will clear all the child nodes

const newpara = document.createElement("p");
newpara.textContent = "This will remove all the other content";

const newlink = document.createElement("a");
newlink.textContent = "new link";
newlink.href = "https://mail.google.com/mail/u/0/#inbox";

section.replaceChildren(newpara, newlink);
