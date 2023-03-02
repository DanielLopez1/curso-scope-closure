// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function myMoneyBox(coins){
     let saveCoins = 0;

     function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
     }   
     return countCoins;
 }

 const moneyBox = myMoneyBox();
 moneyBox(5);
 moneyBox(5);

 const moneyBoxAnna = myMoneyBox();
 moneyBoxAnna(3);
 moneyBoxAnna(3);
 moneyBoxAnna(4);

 function createPetList() {
    // Tu código aquí ??
    const petList = [];
    function addPetList(pet){

        if(pet){
        petList.push(pet);
        console.log(petList);
        }
        return petList;
    }

    return addPetList;
  }
  
  const myPetList = createPetList();
  myPetList("michi");

  myPetList("firulais");
  
  myPetList();
 
 
