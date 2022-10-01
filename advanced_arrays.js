//arrays - For Each recuperation
// if you ave a single parameter you can avoid brackets, in this case on "num"

 
const double = [];
const newArray = array.forEach(num => {
    double.push(num * 2); 
})

console.log('for Each', double);

//map

const mapArray = array.map(num => num * 2);

console.log('map', mapArray);

//filter

const filterArray = array.filter(num => num > 5);

console.log ('filter', filterArray);

//reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num 
}, 5);

console.log('reduce', reduceArray);
