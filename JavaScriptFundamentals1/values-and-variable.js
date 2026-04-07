// usamos let para criar variaveis que podem reatribuir valores.
let firstName = "Leonardo";

// const é usado para criar variaveis que não podem reatribuir valores.
const birthYear = 1995;
birthYear = 1996; // TypeError: Assignment to constant variable.

const job; // SyntaxError: Missing initializer in const declaration

var oldWay = "This is the old way of declaring variables.";
olway = "It's mutable, but it's not recommended to use var in modern JavaScript.";
// var is function-scoped and can lead to bugs due to hoisting
// and lack of block scope.It's generally recommended to use let and const
// instead of var in modern JavaScript development.

dontDeclareLikeThis = "This is not recommended, as it creates a global variable unintentionally.";