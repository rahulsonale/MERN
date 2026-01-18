document.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector("#box");

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  // Start dragging
  box.addEventListener("mousedown", (event) => {
    isDragging = true;

    offsetX = event.clientX - box.offsetLeft;
    offsetY = event.clientY - box.offsetTop;

    box.style.cursor = "grabbing";
  });

  // Move box
  document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    box.style.left = event.clientX - offsetX + "px";
    box.style.top = event.clientY - offsetY + "px";
  });

  // Stop dragging
  document.addEventListener("mouseup", () => {
    isDragging = false;
    box.style.cursor = "grab";
  });
});
