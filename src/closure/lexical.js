//Closure
// Un closure es la combinaci�n entre una funci�n y el �mbito l�xico en el que esta fue declarada. Con esto, la funci�n recuerda el �mbito con el cual se cre�. Puedes entender los closures como: funci�n interna + scope. Mira estos pasos:

// Genera una funci�n que retorna una funci�n interna.
// Esta funci�n interna tiene un scope, el cual puede ser accedido �nicamente por esta funci�n, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la funci�n interna.
// Como resultado, esta funci�n interna retornada con su scope ser� nuestro closure.


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


 