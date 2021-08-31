"use strict";

//destructurin object
// assign new names
//nested object
//destructuring arrauas
// rest of array
//destructuring funtion propss
//template literals ```
//object propery shorthand

// let car = {
//   name: "BMW",
//   year: "2021",
//   horsePower: "220ks",
// };

// const person = {
//   name: "Milan",
//   surname: "Milanovic",
//   adress: {
//     street: "1.maj",
//     city: "NewPazar",
//   },
// };

// let { name, year, horsePower } = car;
// let {
//   name: personsName,
//   surname,
//   adress: { street, city },
// } = person;

// console.log(name, year, horsePower);

// function destr(person) {
//   let { name: personsName, surname } = person;

//   console.log(name, surname);
// }

// destr(person);

// DESTRUCTING ARRAYS

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// // const [a, b] = array;
// // PISE 1,2

// // const [a, b, , , , c] = array;
// // PISE 1,2,6
// const [a, b, ...c] = array;
// // 1 2 [ 3, 4, 5, 6, 7, 8 ]
// console.log(a, b, c);

//destructuring funtion propss

// const person = {
//   name: "Milan",
//   surname: "Milanovic",
//   adress: {
//     street: "1.maj",
//     city: "NewPazar",
//   },
// };

// function name1({ name, surname, adress }) {
//   console.log(name, surname, adress);
// }

// name1(person);

// // object propery shorthand

// let name = "Ivan";
// let surname = "nestorovic";

// let user = {
//   name,
//   surname,
// };

// console.log(user);

// //template literals ```
// let name = "Ivan";
// let string = `This ${name} `;

let sentence = "This has happend long time ago.";

function wordtoUpper(string) {
  let array = string.split(" ");
  for (let i = 0; i < string.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
    console.log(array);
  }
}
wordtoUpper(sentence);

// let sentence = "this has happend long time ago. but i don't think so!";
// function wordtoUpper(string) {
//   let array = string.split(".");
//   for (let i = 0; i < string.length; i++) {
//     array[i] = array[i].trim();
//     array[i] = array[i][0].toUpperCase() + array[i].slice(1);
//     console.log(array.join(". "));
//   }
// }
// wordtoUpper(sentence);
