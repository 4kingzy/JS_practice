var database = [
    {
        username: "andrei",
        password: "super",
    },
    {
        username: "sally",
        password: "super2",
    },
    {
        username: "ingrid",
        password: "super3",
    }
];


var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all the learning",
    },
    {
        username: "sally",
        timeline: "Javascript is soooo coool!",
    }
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
    for (var i=0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    } 
    return false;
}

function signIn (username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}
signIn(usernamePrompt, passwordPrompt);
