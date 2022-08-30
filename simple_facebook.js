var database = [
    {
        username: "andrei",
        password: "super",
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

function signIn (user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username or password!");
    }
}
signIn(usernamePrompt, passwordPrompt);
