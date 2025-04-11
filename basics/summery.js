// primitive 

// 7 types ;string,number,boolean,null,undefined,symbol,bigint
const score= 100
const scorevalue= 100.3
const isLoggedIn= false
const outsideTemp=null
let userEmail= undefined
const id = Symbol('123')
const anotherId = Symbol(123)

// console.log(id===anotherId);

const bigNumber= 345678575687475n

// non premitive or reference

// Array,Objects,function
const heros = ["jihan","salar","yaram"]
let Objects
{
    name: "jihan"
    age:35

}  


 const myFunction= function() {
     console.log("hello world");
     
}
console.log(typeof anotherId);


// memory

// stack  memory = primitive types use stack memory 

// heap memory = non-primitive types use heap memory
let myYoutubename = "vnnivinibnfi.com"
let anotherName = myYoutubename
anotherName = "aqsayaseen"
console.log(anotherName);
console.log(myYoutubename);

let userone = {
    upi: "user@ybl"
}
let usertwo = userone 
usertwo.upi = "user2ybl"

console.log(userone.upi);
console.log(usertwo.upi);