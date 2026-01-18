document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("ul#item-list").addEventListener("click", (event) => {
    console.log(event.target);

    if (event.target.closest("button")) {
      event.target.closest(".item").remove();
    } else if (event.target.matches("input[type='checkbox']")) {
      event.target.closest(".item").classList.toggle("completed");
    } else if (event.target.closest("label")) {
      console.log("label clicked");
    }
  });

  const form = document.querySelector("#add-item-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    let newTodo = formData.get("new-todo");
    addNewTodo(newTodo);
  });

  function addNewTodo(newTodo) {
    const itemList = document.getElementById("item-list");
    const itemListCount = itemList.children.length;
    const item = document.createElement("li");
    item.classList.add("item");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = `todo${itemListCount + 1}`;
    input.name = input.id;

    const label = document.createElement("label");
    label.textContent = newTodo;
    label.htmlFor = input.name;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // deleteButton.addEventListener("click")

    item.append(input, label, deleteButton);
    itemList.append(item);
  }
});
