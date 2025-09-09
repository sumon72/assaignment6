# assaignment6

1) What is the difference between var, let, and const?
 
 var: function-scoped, redeclarable, avoid in modern code.
 let: block-scoped, reassignable.
 const: block-scoped, not reassignable.

2) What is the difference between map(), forEach(), and filter()?

map(): Creates a new array by applying a function to each element. A new array of the same length value return.
       It use to transform the array.

forEach(): Executes a function once for each array element. does not create a new array.

filter(): Creates a new array containing only elements that Match value. To use select certain elements.

3) What are arrow functions in ES6?

map, filter, forEach.

4) How does destructuring assignment work in ES6?

Array Destructuring

const numbers = [5, 10, 40];
const [a, b, c] = numbers;
console.log(a, b, c); // 5 10 40

Object Destructuring

const person = { name: "Sumon", age: 34 };

const { name, age } = person;
console.log(name, age); // Sumon 40


5) Explain template literals in ES6. How are they different from string concatenation?

Template literals use backticks (`), not quotes.
example : 
const name = "Sumon";
const newvalue = `Hello, ${name}!`;
console.log(newvalue); // Hello, Sumon!








