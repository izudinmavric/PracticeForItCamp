'use strict'

// var, let , const (variables, scope, hoisting)
// const array mutation (arrays, array mutatiions
// Object.freze()
// arrow function (simlple function, function in a function)


// let a = [1,'string','afas',2,3,4,'fasfasf',5,6,7,8,9,10];

//  function printArray(params){

//     let min = params[0];

//     for(let i = 0; i<params.length;i++){

//         if(params[i]<min){
//             min = params[i]
//         } 
//     }

//     return min

//  }

// DA


//  function deleteString(params){

//   let  duzina = params.length;

//     for(let i = 0; i<duzina;i++){
//         const element = params[i];

//         if(typeof element === 'string'){
//             params.splice(i,1);
//             i--;
//         }

//     }

//     return params;

//  }

//  console.log(deleteString(a))



//  console.log(printArray(a));


let obj = {name: 'Izo', surname: 'Mavric', ocupation:'Babus'}
let key = 'age';
let value = 26;

function object(objekat, key, value){


    objekat[key] = value;

    delete obj.ocupation;


    console.log(obj)
}

object(obj, key, value);


// ARROW FUCNTION


const arrowFunction = (objekat, key, value) => {
    objekat[key] = value;

    delete obj.ocupation;


    console.log(obj)
}

const getName = objekat => objekat.name

console.log(getName(obj))


