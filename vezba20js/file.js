var musicRecord = {
    name: 'Hard',
    year: '1997',
    author: 'Ivan Slavkovic',
    numberSold: 5,
    // address:{
    //     street: 'Jalija',
    //     number: '23',
    //     country: 'Serbia'
    // }
    songs:[
        {
            name: 'Go hard',
            duration: '2.3m'
        },
        {
            name: 'Draga',
            duration: '4.3m'
        },
        {
            name: 'Moja',
            duration: '5.3m'
        }
    ]

}


// // console.log(musicRecord.songs)

// // var key = 'songs'


// // console.log(musicRecord['songs'])


// console.log(musicRecord.songs[1].name)


// console.log(musicRecord.songs[2].duration)
// console.log(musicRecord.songs[0].name)


// musicRecord.kompozitor = 'Betoven'

// console.log(musicRecord.kompozitor)

// // delete musicRecord.numberSold; // BRISEMO IZ OBJEKTA

// function numberOfSongs(record){


//     // var songs = 0;

//     // songs = musicRecord.songs.length;

//     console.log(record.songs.length)


//     // console.log(songs)
    




// }

// numberOfSongs(musicRecord);



// function numberOfSongs1(record, key, value){

//     if(record.key === 'songs'){
//         if(record.songs !== undefined && record.songs.length !== 0){   //!undefined znaci da postoji

//             record.songs.push(value)

//         }else{

//             record.songs = value;

//         }   
//     }
//     console.log(record)
// }


// numberOfSongs1(musicRecord, 'songs', [{name: 'nest', duration: 'nesto'}, {{name: 'nest', duration: 'nesto'}}])


// function itHas(object, key){

//     if(object[key] !== undefined){

//         console.log('Imate ovo');

//     }else{
//         console.log('Nemate ovo')
//     }


// }


// itHas(musicRecord, 'author')


// Object.keys(object)  // ==> pravi niz od kljuceva

// Object.values(object)  // ==>  pravi niz od vrednosti

// Object.keys(object).includes(key); // ==> da proverimo da li neki kljuc postoji
// Object.keys(values).includes(values); // ==> da proverimo da li neka vrednost postoji

console.log(Object.keys(musicRecord))
console.log(Object.values(musicRecord))