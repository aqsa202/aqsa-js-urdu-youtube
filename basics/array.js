const myarray = [0,1,2,3,4,5,]
const myhero = ["jihan"]
const myarray2 = new Array(1,2,3,4)

console.log(myarray[1]);

// Array method ******

myarray.push(6)
myarray.pop()
console.log(myarray);


myarray.unshift(9,7,8)
myarray.shift()
console.log(myarray.includes(9));
console.log(myarray.indexOf(4));
const newarray = myarray.join()

console.log(myarray);
console.log(typeof newarray);

// slice , splice 
console.log("A" , myarray);
const myarr = myarray.slice(1,3)
console.log("B" , myarr);
console.log(myarr);

console.log("c" , myarr)
const myarr2 = myarray.splice(1,3)
console.log(myarr2);

const arraynumber = ["A","B","C","D"]
const words = ["Z","X","V","G"]
arraynumber.push(words)

console.log(arraynumber);
console.log(arraynumber[3][1]);
 const allcombinaton = arraynumber.concat(words)
console.log(allcombinaton);
const allnewnumber = [...arraynumber,...words]
console.log(allnewnumber);
const anotherarray = [1,2,3,[4,5,,6],7,[6,7,[4,5]]]
const anotherarray2 = anotherarray.flat(Infinity)
console.log(anotherarray2);

console.log (Array.isArray("aqsa"))
console.log (Array.from("aqsa"))
console.log(Array.from({name: "aqsa"}));

let score = 100
let score2= 300
let score3 = 500 
console.log(Array.of(score,score2,score3));

