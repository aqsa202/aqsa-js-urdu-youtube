const mySymbol = Symbol("key1");

const jsuser = {
    name: "aqsa",
    "full name": "aqsayaseen",
    [mySymbol]: "key1",
    age: 19,
    location: "arzanipur",
    email: "aqsa@google.com",
    inLoggedIn: false,
    lastlogindays: ["monday", "tuesday"]
};

console.log(jsuser["full name"]);
console.log(jsuser["email"]);
console.log(jsuser[mySymbol]);

// Update email
jsuser.email = "aqsayaseen@google.com";

// Freeze to prevent further changes (optional)
// Object.freeze(jsuser);
jsuser.email = "aniya@google.com"; // Will be ignored if frozen

console.log(jsuser);

// Add methods
jsuser.greeting = function () {
    console.log("Hello world");
};

jsuser.greetingtwo = function () {
    console.log(`Hello world, ${this.name}`);
};

// Call methods
jsuser.greeting();
jsuser.greetingtwo();
