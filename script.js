const form = document.getElementById("form");
const todo = document.getElementById("todo");
const btn = document.getElementById("btn");
const item = document.getElementById("todo-item");


form.addEventListener("submit", (e)=>{
e.preventDefault();

const input = todo.value;
console.log(input);


  const p = document.createElement("p");
  item.append(p);
  p.innerHTML=input;
  console.log(p);

 p.addEventListener("click", () => {
    p.remove();
  });

});
