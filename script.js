window.addEventListener("load", function(){

    const inputValue = document.getElementById("todo").value;
    const btn = document.querySelector("button");
    const toDoItem = document.querySelector("#todo-item");
    console.log(toDoItem);
    

    btn.addEventListener("click", function(){
    const p = document.createElement("p");
    const userInput =document.createTextNode(inputValue);
    document.getElementById("todo").value = "";
    document.getElementById("todo-item").appendChild(p);
    //input.value = "";
    p.appendChild(userInput);
   /* if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.getElementById("todo-item").appendChild(p);
      }
      document.getElementById("todo").value = "";*/
    });

    
      
      
   

   
  






});
