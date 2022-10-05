//flat method
//flattens the array

let array = [1,2,3,4,5];
array.flat()
//paste in console so it flattens array into --> [1,2,3,4,5,6]
let array2 = [1,2,[3,4],[5,6]];
array2.flat()
//for new layers of flattening we can use .flat(2) in .flat method like this:
let array3 = [1,2,[3,4,[5]]];
array3.flat(2)
//adds 5 on a flat array just like normal map function
let arrayComplete = array.flatMap(num => num + 5);

//Trimming

let userEmail = '     mario.vlahovicek@gmail.com'
let userEmail2 = 'turki@gmail.com      '
console.log(userEmail.trimStart())
console.log(userEmail2.trimEnd())

//FromEntries - transforms data in array in object format
let userProfiles = [['commanderTom', 23], ['derekZlander', 40], ['agubunga', 18]];

Object.fromEntries(userProfiles);

//try & catch -> "catch" catches a error that appears 
try {
    true + "hi"
} catch {
    console.log('you messed up')
}
