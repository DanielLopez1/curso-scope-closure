//Closure
// Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:

// Genera una función que retorna una función interna.
// Esta función interna tiene un scope, el cual puede ser accedido únicamente por esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
// Como resultado, esta función interna retornada con su scope será nuestro closure.


const  myGlobal = 0;

function myfunction(){
    const myNumber =1;
    console.log(myGlobal);

    function parent(){
        const inner = 2;
        console.log(myNumber, myGlobal); 

        function child() {
            console.log(inner, myNumber, myGlobal)
        }
        return child();
    }

    return parent();
}

myfunction();


 