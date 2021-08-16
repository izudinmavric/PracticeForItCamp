// NIZOVI ARRAY

// var array = [[1], 2, 3, 4, 5, 6]

// array[0][0]  // 1

// var array = [1, 2, 3, 4, 5, 6]

// function niz(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }


// }

// niz(array)
// // console.log(niz());


// var array = [1, 2, 3, 4, 5, 6]

// function niz(arr, index, element) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }

//     arr = [index] + [element]
// }

// niz(array, [0], 'string')


// pop , push, delete , shift sklanja element, unshift da dodamo na pocetak niza
// slice, splice

// var array = [1, 2, 3, 4, 5, 6]

// function funckija(arr, index, value) {

//     if (arr[index] === value) {
//         array.splice(index, 1, 10)
//         return array
//     }

// }

// console.log(funckija(array, 1, 2))

//////

// var string = 'This is random string'

// function funckija(string) {

//     // if (arr[index] === value) {
//     //     array.splice(index, 1, 10)
//     //     return array
//     // }

//     console.log(string.substring(0, 2));

//     // string.substring(2, 3)

// }
// funckija(string);


var array = [[1, 2, 3], 2, [3, 2, 1]]

function funkcija(array) {
    for (i = 0; i < array.lenght; i++) {
        console.log(array[index])
        if (Array.isArray(array[index])) {
            for (j = 0; j < array[index].lenght; j++) {
                console.log(array[index][j])
            }
        }
    }

    funkcija()