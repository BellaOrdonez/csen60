

function addTodo() {
  console.log("button was clicked")
  const input = document.getElementById("list-input")
  console.log("Input value =", input.value)
}

const list = document.querySelector("ul")
//const list = list[0]
console.log(ul)

const li = document.createElement("li")
li.textContent=input.value
ul.appendChild(li)