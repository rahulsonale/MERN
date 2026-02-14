function first() {
  console.log("a");
}

function second() {
  console.log("b");
}

function third() {
  setTimeout(() => {
    console.log("c");
  }, 100);
}

function fourth() {
  Promise.resolve().then(() => {
    console.log("d");
  });
}

function fifth() {
  Promise.resolve().then(() => {
    console.log("e");
  });
}

function sixth() {
  setTimeout(() => {
    console.log("f");
  }, 0);
}

third();
sixth();
fifth();
fourth();
second();
first();
// b a e d c f --> priority
//order of execution
//1.all synchronous code

//Note: queues follow FIFO
// -task added first to the queue will be executed first

//2.microtask queue (First in First out)
//3.task queue or macrotask queue (FIFO)

function infinitFn() {
  console.log("function called");

  Promise.resolve().then(infinitFn);
}

//microtask starvation
function timer() {
  setTimeout(() => {
    /*this function will never be called since macrotask queue will never be empty
    Event loop will ignore this since its priority is low */
    console.log("will never be executed");
  }, 0);
}

//infinitFn();
//timer();

//task queue callback - setTimeout , setInterval ,  DOM events - click , scroll , input etc...
//microtask queue callback - promise.resolve , Promise.reject , queueMicrotask , MutationObserver...
