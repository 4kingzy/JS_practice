const basket = ['mango', 'apple', 'cucumber'];
const detailedBasket = {
    'mango' : 10,
    'coconut' : 15,
    'banana' : 8
}


//for of LOOPS
// it iterates - strings and arrays
for (item of basket) {
    console.log(item);
}



//for in LOOPS
// it enumerates - objects
for (item in detailedBasket) {
    console.log(item);
}
