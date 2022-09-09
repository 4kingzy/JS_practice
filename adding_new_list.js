#ADDING A NEW LIST
var button = document.getElementById("button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");
var trash = document.getElementsByClassName("delete");

function toggleClassDoneOnAndOff(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("done");
    }
}

ul.addEventListener("click", toggleClassDoneOnAndOff);

function inputLength () {
    return input.value.length;
}
function eventListener () {
    var li = document.createElement("li");
    var btn = document.createElement("button");
        btn.innerHTML = "Remove";
        btn.className = "delete";
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        li.appendChild(btn);
        input.value = "";
}

button.addEventListener("click", function (){
    if (inputLength() > 0) {
       eventListener(); 
    }    
})
input.addEventListener("keypress", function (event){
    if (inputLength() > 0 && event.keyCode === 13) {
        eventListener();
    }    
})

ul.addEventListener("click", function(e) {
    var target = e.target;
    if (target.classList.contains("delete")) {
      target.parentNode.remove();
    }
  });



