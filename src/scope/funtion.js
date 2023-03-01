// Local Scope  o Funtion Scope
// Al declarar variables dentro de una funcion estas solo podran ser utilizadas dentro de la misma,
//  si se trata de invocar desde afuera la consola marcara un error y aplica solo al usar let o const.


//Funciones Scope
function greeting(){
    let userName = 'Ana';
    console.log(userName);

    if (userName === 'Ana'){
        console.log(`Hello ${userName}!`)
    }
}

greeting();