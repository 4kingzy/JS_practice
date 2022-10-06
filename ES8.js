//PadStart and PadEnd --> creates a spase on front or end of string equal to the input number

"Turtle".padStart(19);
"Turtle".padEnd(19);

//Object Value and Object Entries
//Object.keys
let obj = {
    username0: "Maja",
    username1: "Mario",
    username2: "Mahalec"
}
Object.keys(obj).forEach((key,index) => {
    console.log(key, obj[key]);
})

//Object.value
Object.values(obj).forEach(value => {
    console.log(value);
})

//Object.entries
Object.entries(obj).forEach(value => {
    console.log(value);
})

//example with a entries
Object.entries(obj).map(value => {
    return value[1] + value[0].replace("username", "");
})
