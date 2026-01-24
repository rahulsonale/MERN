//The core problem : When elements are created later (dynamically), events attached earlier don’t work on them.

// 1. Peformance is enhanced
// 2. dynamic content is handled
// 3. clearner code as all logic related to handling is in a single place
// 4. memory efficient since we register a single event listener

/*Event Bubbling & Capturing*/

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", () => {
  console.log("Child clicked");
});

/*Click button → output:*/
//-->Child clicked
//-->Parent clicked

/*stopPropogation();*/
child.addEventListener("click", (e) => {
  e.stopPropagation();
});
//By using this parent will not get triggered

//call / apply / bind refresher.
