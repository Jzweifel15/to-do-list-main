const todo = ["go for a walk", "go to store", "eat human food"]

const list = document.getElementById("list");

const form = document.getElementById("new-form");

let counter = 0;


document.addEventListener("submit", function(event) {
    event.preventDefault();
    let textField = document.getElementById("text-field").value;
    newElement(textField);
});



function addData() {
    for(let i = 0; i < todo.length; i++) {
        newElement(todo[i])
    }
}


function newElement(item) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const p = document.createElement("p");
 
    button.setAttribute("class", "like-btn");
    li.innerText = item
    button.innerText = "like";
    button.addEventListener("click", likeCounter);
    p.innerText = 0;
    li.appendChild(button);
    li.appendChild(p);
    list.appendChild(li);
}

function likeCounter(e)
{  
    console.log(e.target.nextElementSibling);
}

addData()

