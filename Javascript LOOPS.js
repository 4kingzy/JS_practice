#FOR LOOP
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
