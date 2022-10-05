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
//  EXERCISE
// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
//Solution:
console.log(array.flat(2))


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//Solution:
console.log(greeting.flatMap(x => x.join(' ')))


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
//Solution
console.log(greeting.flatMap(x => x.join(' ')).join(' '))

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
//Solution
console.log(trapped.flat(Infinity))
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! Learn more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
//Solution:
console.log(userEmail3.trimEnd().trimStart())


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
//Solution
const usersArray = Object.entries(users)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
//Solution
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
//Solution
const updatedUsers = Object.fromEntries(updatedUsersArray)
console.log(updatedUsers)
