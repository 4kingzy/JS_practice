#FOR_LOOP

var todos = [
"eat",
"sleep",
"exercise",
"study",
"drink plenty of water"];

// todos.length = 5 ... todos.length is a number created depending on number of indexes in a file

//syntax
for (var i=0; i < todos.length; i++) {
console.log(todos[i] + "!");
}

for (var i=0; i < todos.length; i++) {
console.log(todos[i] = todos[i] + "!");
}

for (var i=0; i < todos.length; i++) {
todos.pop();
}
var todosLength = todos.length;
for (var i=0; i < todosLength; i++) {
todos.pop();
}

#WHILE_LOOP

//upwards
var counterOne = 0;
while (counterOne < 10) {
console.log(counterOne);
counterOne++
}

//downwards
var counterOne = 10;
while (counterOne > 0) {
console.log(counterOne);
counterOne--
}

#DO_LOOP

var counterTwo = 0;
do {
console.log(counterTwo);
counterwo--;
} while (counterTwo > 10);

#FOR_EACH_LOOP
//calling function
function logTodos(i){
    console.log(i);
}
todos.forEach(logTodos);
//using whole forEach method
todos.forEach(function(i){
    console.log(i);
})
