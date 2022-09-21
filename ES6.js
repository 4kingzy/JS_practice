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

