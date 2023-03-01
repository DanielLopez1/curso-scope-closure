// Con var
var nombre // declaraci�n (undefined) ?
nombre = "Andres" // asignaci�n ?
nombre = "Valeria" // reasignaci�n ?
var nombre = "Oscar" // redeclaraci�n y reasignaci�n ?

// Con let
let nombre // declaraci�n (undefined) ?
nombre = "Andres" // asignaci�n ?
nombre = "Valeria" // reasignaci�n ?
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ?

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ?
const nombre = "Andres" // declaraci�n y asignaci�n ?
nombre = "Valeria" // TypeError: Assignment to constant variable. ?
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. 

// Las estructuras de datos, como los arrays u objetos, 
// declaradas con const pueden cambiar las referencias de sus elementos,
//  a este concepto se lo denomina mutabilidad. Sin embargo, 
// siguen las mismas reglas ya mencionadas, no puedes redeclarar ni reasignar una variable de estructura de datos.

const array = ["manzana", "pera"] // declaraci�n y asignaci�n ?
array[0] = "pi�a" // Cambio de valor en un elemento del array 
console.log(array) // [ 'pi�a', 'pera' ]
const array = [1,2,3] // SyntaxError: Identifier 'array' has already been declared. ?