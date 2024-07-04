/* // [premitive]
//7- String, Number, Boolean, null, undefined, symbol, BigInt

const score=100
const scorevalue=100.3

const isLoggedIn= false
const outSidetemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

const bigNumber=2324325345456456212n

// reference (Non Premitive)
// Array, Object, Function

const heros=["Shaktiman", "naagraj", "doga"]

let myObj={
    name:"Achyut",
    age:21,
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outSidetemp);
console.log(typeof myFunction);

*/

// **********************************************

//stack(primitive), heap(non primitive)

let myName="Achyut";

let lastName=myName;
lastName="Bhagwat";

console.log(myName);
console.log(lastName);

let userOne={
    email:"achyut@gmail.com",
    upi:"abc@ybl"
}
userTwo=userOne;
userTwo.email="bhagwat@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);