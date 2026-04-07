const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)');
if (age == 18) console.log('You just became an adult :D (loose)');

// double equal does type coercion, so it will convert the string '18' to the number 18 before comparing
if (age == '18') console.log(age == '18'); // true

// triple equal does not perform type coercion
if (age === '18') console.log(age === '18'); // false

/* As a good practice and clean code use triple equal (===) */

const favourite = prompt("What's your favourite number ?");
console.log(favourite);
console.log(typeof favourite); // string

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
}
else {
    console.log('Triple equality does not perform type coercion');
}

const favouriteNumber = Number(prompt("What's your favourite number ?"));
console.log(favouriteNumber);
console.log(typeof favouriteNumber); // Number

if (favouriteNumber === 23) {
    console.log('Cool! 23 is an amazing number!');
}

