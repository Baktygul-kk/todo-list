const form = document.getElementById("form");
const todo = document.getElementById("todo");
const btn = document.getElementById("btn");
const item = document.getElementById("todo-item");


form.addEventListener("submit", (e)=>{
e.preventDefault();

const input = todo.value;
console.log(input);



btn.addEventListener("click", (e)=>{
  const p = document.createElement("p");
  item.append(p);
  p.innerHTML=input;
 // console.log(p);

 
});

item.addEventListener("click", (e)=>{
  //const clear = item.querySelector("p");
console.log(clear);
  clear.remove();
});



});
