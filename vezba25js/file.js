// foEach
// map
// filter
// every
//some
//find -> pronalazi vrednost elementa iz niza koji ispunjava uslov
//findIndex -> pronalzi index niza prvog elementa iz niza koji ispunjava uslov
// reduce

// let array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

// let array2 = array.filter(el) =>
//     if(el){
//         return el;
//    } }

let array1 = [1, 0, 2, 3, 4];
let array2 = [3, 5, 6, 7, 8];

let array3 = array1.map(function niz(array1, array2) {
  let array3 = array1 + array2;
  return array3;
});

console.log(array3);
