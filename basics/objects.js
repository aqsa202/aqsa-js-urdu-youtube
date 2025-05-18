// singleton

// objects literals

const mySymbol = Symbol("key1")


const jsuser = {
    name :"aqsa",
    "full name": "aqsayaseen",
   [ mySymbol]:"key1",
    age :19,
    location : "arzanipur",
    email : "aqsagoogle.com",
    inLoggedIn : false ,
    lastlogindays : ["monday" , "tuesday"]
}
console.log(jsuser["full name"]);
console.log(jsuser["email"]);
// console.log(jsuser.email);
console.log( jsuser[mySymbol]);

jsuser.email = "aqsayaseengoogle.com"
// Object.freeze(jsuser)
jsuser.email = "aniyagoogle.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello world");
    
}
jsuser.greetingtwo = function(){
    console.log('hello world , ${this.name}');
    
    
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


