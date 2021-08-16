// REKURZIJA

var person = {
    name : 'Davud',
    lastName : 'Novalic',
    adress : {
        street : 'Jalija',
        number : 24,
        city : 'Novi Pazar'
    },
    favouriteFood : [
        'mantije', 'gulas' , 'cevapi'
    ],
    school : {
        name1 : 'Gimnazija',
        year : '2017',
        headMaster : 'Zoran'
    }
}


function funkcija(value) {

    var array = Object.values(value)

    
    for(var i=0; i<array.lenght; i++){

        const element = array[i];

        console.log(element)
        if(Array.isArray(element)){

            for(var j = 0 ; j < element.length; j++){
                console.log(element[j]);
            }

        }
        if(typeof element === 'object' && !Array.isArray(element)){


    var niz = Object.values(element)
            
            for(var index = 0 ; index < niz.length; index++){


console.log(niz[index]);            

        }

    }

    // Array.isArray()
    // typeof array === 'object'
    
}


funkcija(person);