function calcAge(birthYear) {
    return 2026 - birthYear;
}

const age1 = calcAge(1990);
console.log(age1); // Output: 36

// I can store a function in a variable. That's powerful!
const func = function (birthYear) {
    return 2026 - birthYear;
};

const arrowFunction = birthYear => 2026 - birthYear;

console.log(`My function expression is ${func(1995)}`);
console.log(`My arrow function is ${arrowFunction(1995)}`);

const randomNumber = () => Number(Math.random().toFixed(2));

const number = randomNumber();
console.log(`My random number is ${number}`);
console.log(number + 3);

/* FUNCTION CALING OTHER FUNCTIONS */
