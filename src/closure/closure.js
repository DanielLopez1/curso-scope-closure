function greeting(){
    let username = 'Dan';
    function displayUserName(){
        return `Hello ${suername}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g);
console.log(g());

function sumWithClosure(firstNum) {
    // Tu código aquí ??
        
    return function sum(secondNum) {
    //   let a = firstNum + secondNum;
        // if(!secondNum){
        //     console.log('error');
        // }else {
        // console.log(a);
        // return a;
        // }
        if (secondNum) {
            return secondNum + firstNum;
          }
          return firstNum;
    }
   
  }

  sumWithClosure(90)(3);