// El modo estricto es una funcionalidad que le permite al motor de JavaScript cambiar la manera en que ejecuta el c�digo. En este modo, se reduce las cosas que podemos hacer, esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript sobreentiende y ayuda a su compilaci�n para corregirlos.

// Este en el c�digo colocando en la primera l�nea "use strict" para todo el archivo. Tambi�n puede utilizarse en la primera l�nea de una funci�n, pero no para un bloque en espec�fico.

// Ejemplo usando el modo estricto
// Si realizas el siguiente c�digo que contiene una asignaci�n sin una declaraci�n, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

nombre = "Andres"
console.log(nombre) // "Andres"

// En modo estricto, no te permitir� realizar esto y provocar� un error.

"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined

// Ejemplo usando el modo estricto en una funci�n
// Si realizas el siguiente c�digo que retornas una variable no declarada, no va a ocurrir un error y el programa se va a ejecutar con normalidad.

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // 3.14

// En modo estricto, no te permitir� realizar esto y provocar� un error.

"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined