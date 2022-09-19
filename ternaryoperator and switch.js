# TERNARY OPERATOR
function isUserValid(bool) {
    return bool;
}
var answer = isUserValid(true) ? "Youmay enter" : "Access Denied";

#SWITCH
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "You encounter a monster!";
            break;
        case "back":
            whatHappens = "You are back in the house!";
            break;
        case "left":
            whatHappens = "You see a river";
            break;
        case "right":
            whatHappens = "You see a treasure chest";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
//using a window.moveCommand
window.moveCommand("forward")
'You encounter a monster!'
window.moveCommand("right")
'You see a treasure chest'
window.moveCommand("ggggg")
'please enter a valid direction'
