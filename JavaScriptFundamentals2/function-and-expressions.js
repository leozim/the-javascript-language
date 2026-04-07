function calcAge(birthYear) {
    return 2026 - birthYear;
}

const age1 = calcAge(1990);
console.log(age1); // Output: 36

// I can store a function in a variable. That's powerful!
const func = function (birthYear) {
    return 2026 - birthYear;
};

const arroFunction = birthYear => 2026 - birthYear;

console.log(`My function expression is ${func(1995)}`);
console.log(`My arrow function is ${arroFunction(1995)}`);