let experience = 200;
let wizardLevel = false;

if (experience > 90) {
let wizardLevel= true;
}

//property of an object can be changed in constant variable with [obj.wizardLvl = true;]

const obj = {
player: "bobby";
exp: 100;
wizardLvl: false;
}

//destructuring
const obj = {
player: "bobby",
exp: 100,
wizardLvl: true
}

const {player, exp} = obj;
let {wizardLvl} = obj;

//Object properties
const name = "jon snow";

const obj = {
[name]:"hello",
[1+2]:"hihi"
}

const a = "Simon";
const b = true;
const c = {};

//template strings
const name = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name}! You seem to be ${age-10}. What a lovely ${pet} you have.`

//default arguments
function greet (name='', age= 30, pet="horse") {
return `Hello ${name}! You seem to be ${age-10}. What a lovely ${pet} you have.`}
//calling default argument
greet();
greet("john", 50, "monkey");

//symbol
let sym = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
