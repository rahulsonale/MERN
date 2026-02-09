document.addEventListener("DOMContentLoaded", () => {
  const status = document.getElementById("status");
  status.textContent = "Processing...";
  console.log("this line is executed");

  setTimeout(() => {
    console.log("this will execute after next line");
  }, 2000);
  console.log("This will execute after 2 seconds");

  setInterval(() => {
    console.log("This will run every 1 second");
  }, 1000);

  document.getElementById("btn").addEventListener("click", () => {
    console.log("button was clicked");
  });
});
