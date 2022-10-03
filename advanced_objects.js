//Reference Type - with each object we create a "box" with a designated value in it, and with a case of object2 we are referencing object 1

let object1 = {value:10};
let object2 = object1;
let object3 = {value: 10};

//context vs scope - "this" tells us what is inside of a scope hes in

const object4 = {
    a: function() {
        console.log(this);
    }
}

//instantiation
class Player {
    constructor (name,type) {
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}
class Wizard extends Player {
    constructor(name,type) {
        super(name,type)
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Dominique', 'Barbarian');


//cloning a object

let obj = {a:'a', b:'b', c: {deep: 'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj};
//deepcloning
let superClone = JSON.parse(JSON.stringify(obj))
