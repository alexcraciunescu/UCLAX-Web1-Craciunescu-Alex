/*===================================
||
|| Functions: Call Backs (First Class Functions)
||
===================================*/
console.group("Functions: Callbacks");

const myConsumerFn = (fn) => {
    console.log("My Consumer Function");
    fn();
};

const myFnToPas = () => {
    console.log("Passing this function in");
};

myConsumerFn(myFnToPas);

// Pass anonymous functions
myConsumerFn(() => {
    console.log("My Callback anonymous");
});

console.groupEnd();
