/*
Type Conversion and Coercion

Type conversion is when we manually convert from one type to another.
Type Coercion is when JavaScript automatically converts types behind the scenes for us.
*/

const inputYear = '1991'
// This will concatenate the string '1991' with the number 18, resulting in '199118'
console.log(inputYear + 18);

// Type Conversion
// This will convert '1991' to the number 1991 and then add 18, resulting in 2009
console.log(Number(inputYear) + 18);

// This will result in NaN (Not a Number) because 'Leonardo' cannot be converted to a number))
console.log(Number('Leonardo'));

// This will log 'number' because NaN is considered a number in JavaScript
console.log(typeof NaN);

// This will convert the number 23 to the string '23'
console.log(String(23), 23);

/* TYPE COERCION */

// The number will be converted to a string and concatenated, resulting in 'I am 23 years old'
console.log("I'm", 23, 'years old');
console.log("I'm", String(23), 'years old');

// String to numbers
console.log('23' - '23' - 3);
console.log('21' * '22');
console.log('21' / '2');
// The + operator will concatenate the strings, resulting in '23233'
console.log('23' + '23' + 3);


let n = '1' + 1; // '11' (string)
n = n - 1; // '11' - 1 => 10 (number)
console.log(n);

