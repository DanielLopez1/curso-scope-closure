//Block scope

function fruits(){
    if (true){
        var  fruit1 = 'Apple'; //funtion scope
        let fruit2 = 'kiwi';  //Block scope
        const fruit3 = 'Bannana' //Block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

// Lo que sucede es:
// fruit1 al estar declarada con var tiene scope de funci�n, 
// por ende puede ser accedida desde cualquier parte de la funci�n fruits, 
// ergo, imprimir� Apple por consola.
// fruit2 y fruit3 est�n declaradas con let y const respectivamente, por ende tienen scope de bloque, 
// en otras palabras solo pueden ser accedidas desde el cuerpo del if y no as� desde toda la funci�n fruits.
