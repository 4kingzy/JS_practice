//js1

export const add = (a,b) => a+b;

//or

export default function add() {
   return a + b;
}


//js2

import {add} from "./add";

//or

import add from "./add";


//Webpack - example of a Webpack
module.exports = {
   entry: "./app/main.js",
   output: {
      path: "./dist",
      filename: "bundle.js"
   }
}
