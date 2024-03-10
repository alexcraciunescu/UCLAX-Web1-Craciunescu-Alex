/*===================================
||
|| Functions: Destructuring Objects as Arguments
||
===================================*/
console.group("Functions: Destructing");

const readPerson = ({ first, last, email, colors }) => {
    // const { first, last, email, colors } = personObj;
    console.log(`Hey ${first} ${last}, your email is: ${email}`);

    console.log("Your favorite colors are:");

    colors.forEach((color, idx) => {
        console.log(color);
    });
};

const person1 = {
    first: "Alex",
    last: "Craciunescu",
    email: "craciunescualex@gmail.com",
    colors: ["red", "green", "blue"],
};

const person2 = {
    first: "Justin",
    last: "Craciunescu",
    email: "craciunescujustin@gmail.com",
    colors: ["cyan", "magenta", "yellow"],
};

readPerson(person1);
readPerson(person2);

console.groupEnd();
