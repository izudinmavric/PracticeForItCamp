"use strict";

//callback
//object functions

function sum(a, b) {
  console.log(a + b);
}

function substract(a, b) {
  console.log(a - b);
}

function math(a, b, sign) {
  switch (sign) {
    case "+":
      sum(a, b);
    case "-":
      substract(a, b);
  }
}

math(2, 3, "-");
math(2, 3, "+");

//callbacks kada pozivamo jednu funckiju unutar druge funckije
