/*===================================
||
|| Data Types: Objects
||
===================================*/
/*---------------------------
| Data Types: Objects
---------------------------*/
console.group("DataTypes: Objects");

let myObj = {
    "My String": "Red",
    num: 8712,
    arr: [10, 23, 45],
    fn: () => {
        console.log("This is a function assigned to an object.");
    },
};

myObj.fn();

// Everything is an object:
let myArr = ["up", "down", 23];

console.log(myArr);

if (myArr.length > 2) {
    console.log("Array has more than 2 elements");
}

myArr.sayWhat = "Say Who?";
console.log(myArr);

console.groupEnd();
