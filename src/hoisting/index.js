//Hoisting
// El hoisting es un comportamiento de JavaScript en el que las declaraciones de variables y funciones son movidas al comienzo del �mbito actual antes de que cualquier otro c�digo sea ejecutado. Esto significa que las declaraciones de variables y funciones 
// pueden ser utilizadas antes de haber sido declaradas en el c�digo.

// var nameOfDog; // Undifined

// console.log(nameOfDog);
// var nameOfDog = 'Elmo';
// console.log(nameOfDog);
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`);
}

var elmo = 'Elmira'