// var number = 20;

// if(number<55){
//   console.log('50 evrica manje')
// }else if(number>56 && number<65){
//   console.log('6')
// }else if(number>66 && number<75){
//   console.log('7')
// }else if(number>76 && number<85){
//   console.log('8')
// }else if(number>86 && number<95){
//   console.log('9')
// }else (number>96){
//   console.log('10') }


// var dan = "Monday";

// switch(dan){
//     case "Monday":
//     console.log('Ponedeljak')
//     break;

//     case "Tuesday":
//     console.log('Utorak')
//     break;

//     case "Wednesday":
//     console.log('Sreda')
//     break;

//     case "Thursdau":
//     console.log('Cetvrtak')
//     break;

//     case "Friday":
//     console.log('Petak')
//     break;

//     case "Saturday":
//     console.log('Subota')
//     break;

//     case "Sunday":
//     console.log('Nedelja')
//     break;
// }



// var a = 315;
// var b = 316;

// if (typeof a == "string"){
//     a = parseInt(a)
// if (typeof b == "string"){
//     b = parseInt(b)
//     console.log(a+b)
// }else {
//     console.log(a+b)
// }else if(typeof a == "number"){
//    if (typeof b == "string"){
//        b = parseInt(b)
//        console.log(a+b)
//    }else{
//        console.log(a+b)
//    }
// }
// }

// var iterate = 6;
// for(var i=0; i<iterate;i++){
//     console.log('JavaScript')
// }


// var uslov = 0;
// while(uslov){
//     console.log('Java')
// }


// var number = 100;
// for(var i=0; i<number; i+=10){
//     console.log(i)
// }


// var number = 100;
// var i=-10;
// while(i<number){
//     i += 10; 
//     console.log(i);
// }

// var number = 100;
// var steps = 0;
// for(var i=0; i<number; i+=10){
    
//     steps ++;
//     if(steps % 2 === 0){
//         continue
//     }

//     console.log(i)

// }

// var number = 100;
// for(var i=0; i<number; i+=10){
    
//     if((i/10)%2 === 0){
//         continue
//     }

//     console.log(i)

// }

// for(var i=1; i<100; i+=4){

//     if(i%4 === 0){
//         // % ostatak od podeljeno sa 4 da nije nula
//         break
//     }

//     console.log(i)

// }


// var suma = 55;
// var niz = [1,2,3,4,5,7,8,9,10]
// var zbir = 0;
// for(var i=0; i<niz.length; i++){
// zbir = zbir + niz[i];
// }
// console.log(suma-zbir)


let n = 5; 
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);