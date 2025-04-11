// ******date*******

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toTimeString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleTimeString());
console.log(typeof mydate);

let mycreateddate = new Date (2004,11,14)
// let mycreateddate = new Date (2004-10-14)
console.log(mycreateddate.toLocaleString());
let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getDay());

newdate.toLocaleString('defult',{weekday:"long"})











