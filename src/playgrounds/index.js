function isLeapYear(year ) {
    // Tu código aquí ??
  
      if(year <= 0){
          return false;
      }else if ((( year % 4 === 0) && (year % 400 > 0 )) || (( year % 100 === 0) && (year % 400 === 0 ) )) {
          return true;
         
      
      }else{
          return false
      }
  }
  
  isLeapYear(-2024);
  
  function getPetExerciseInfo(type, age) {
      // Tu Código aquí ??
      switch(type){
          case 'perro': 
              if(age < 1){
                  return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego';
              }else if(age <= 7){
                   return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego';
              }else{
                 return 'Los perros viejos necesitan caminatas más cortas';
              }
              break;
          case 'gato': 
              if(age < 1){
                  return'Los gatitos necesitan frecuentes sesiones de juego';
              }else if(age <= 7){
                  return'Los gatos a esta edad necesitan jugar diariamente';
              }else{
                  return'Los gatos viejos necesitan sesiones de juego más cortas';
              }
              break;
          case 'ave': 
              if(age < 1){
                  return 'Las aves jóvenes necesitan mucho espacio para volar';
              }else if(age <= 7){
                  return'Las aves necesitan jugar diariamente y un lugar para vola';
              }else{
                  return 'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar';
              }
              break;
          default:
              return'Tipo de mascota inválida';
      }
    }
    
    getPetExerciseInfo("perro", 3);
    getPetExerciseInfo("gato", 8);
    getPetExerciseInfo("Mamut", 25);
  
    function printTriangle(size, character) {
      // let string = ""
      // for (let i = 1; i <= size; i++) {
    
      //   string += `${" ".repeat(size - i)}${character.repeat(i)}\n`
      // }
      // string = string.slice(0, -1)
      // console.log(string); 
      let letter = ""; 
      let characterNumber = 1 ;
      
      while (characterNumber <= size){
          for (let i = 1; i <= (size-characterNumber); i++) {
                  letter +=" ";
          }
          for (let j = 1; j <= characterNumber; j++) {
              // console.log(character);
              letter += character;
          }
          console.log(letter); 
          letter="";
          characterNumber++;
          }
    }
    printTriangle(5, "*");
    printTriangle(6, "$");


    function findFamousCats(cats) {
        // Se crea un objeto con un arrgelo para guardar 
        // los nombres de los gatos y el numero maximo de seguidores
        let famousStats = {
            catNames:[],
            maxNumOfFollowers: 0,
        };
        //Creamos un for para recorrer el arreglo de objetos
        for(let i = 0; i < cats.length; i++ ){
        //guardamos los objetos en un nuevo arreglo uno por uno
            const cat = cats[i];
        //Creamos una variable con la sumat total de follower de cada objeto
        //utilizando reduce 
            const totalFollowers = cat.followers.reduce((acum, currentVal) => acum + currentVal,
            0
          );
          console.log(totalFollowers);
         // comparamos si el total de followers del actual gatito es IGUAL
         // al del objeto que declaramos al inicio (maxNumOfFollowers)
            if(totalFollowers === famousStats.maxNumOfFollowers){
            // De ser así, solo agregamos el nombre del gatito 
            famousStats.catNames.push(cat.name);
            }
            
            // Por otro lado, si es MAYOR
            if (totalFollowers > famousStats.maxNumOfFollowers) {
                // Reiniciamos el array de nombres, volvemos a dejar vacio el array de catNames
                famousStats.catNames = [];
                    // Agregamos a nuestro gatito influencer
                famousStats.catNames.push(cat.name);
                    // Para al final asignar el número máximo de seguidores
                    // a la debida propiedad del objeto
                famousStats.maxNumOfFollowers = totalFollowers;
               console.log(totalFollowers);
            }
      
        }
          // Al final solo retornamos LOS NOMBRES
          console.log(famousStats.catNames);
            return famousStats.catNames;
           
      }

      findFamousCats([
        {
          name: "Mimi",
          followers: [320, 120, 70]
        },
        {
          name: "Milo",
          followers: [400, 300, 100, 200]
        },
        {
          name: "Gizmo",
          followers: [250, 750]
        }
      ])
      

      findFamousCats([
        {
          name: "Luna",
          followers: [500, 200, 300]
        },
        {
          name: "Michi",
          followers: [100, 300]
        },
      ])


      function getStudentAverage(students) {
        // Tu código aquí ??
        const promedios = [];
        let classAverage = {
            averageGrades: 0,
           students: [],
        };

        for(let i = 0; i < students.length; i++){
            const alumnos = students[i];
            
           const averegeGradesForStundent = alumnos.grades.reduce(
            (acum, currentVal) => acum + currentVal, 0)/ alumnos.grades.length;
            const NumberAveregeGrades = Number(averegeGradesForStundent.toFixed(2));
            classAverage.students.push({name:alumnos.name, average:NumberAveregeGrades} );

            promedios.push(averegeGradesForStundent);
            
        }

        let averageGrades = promedios.reduce((acum, currentVal) => acum + currentVal, 0)/ promedios.length;
        classAverage.averageGrades = Number(averageGrades.toFixed(2));
        console.log(classAverage);
         return classAverage;
       
      }

      getStudentAverage([
        {
          name: "Pedro",
          grades: [90, 87, 88, 90],
        },
        {
          name: "Jose",
          grades: [99, 71, 88, 96],
        },
        {
          name: "Maria",
          grades: [92, 81, 80, 96],
        },
      ])


      function findLargestPalindrome(words) {
        // Tu código aquí ??
            let bolsita= {
                 arrayLetter:[],
                 arrayReverseLetter:[],
                 palindromos:[],
            };
            for(let i = 0; i < words.length ; i++){
                let letter = words[i];
                // console.log(letter.split(''));
                bolsita.arrayLetter.push(letter.split(''));
            }
            for(let j=0; j <  bolsita.arrayLetter.length; j++){
                // let letterPieces = bolsita.arrayLetter[j];
             
                // console.log(bolsita.arrayLetter.length);
                for(let k= bolsita.arrayLetter[j].length; k >= 0; k-- ){
                    // console.log(k);
                    // let indice = 0;
        
                    let letterPiecesReverse = bolsita.arrayLetter[j][k];
                  
                    console.log(letterPiecesReverse);
                    console.log(letterPieces);

                    // bolsita.arrayReverseLetter.push(letterPiecesReverse.split(''));
                    
                }
            }
            // con

            // console.log(bolsita.arrayLetter);
            //  console.log(bolsita.arrayReverseLetter);

      }
      
      findLargestPalindrome(["racecar", "level", "world", "hello"])


      function findLargestPalindrome(words) {
             // Primero definimos que la palabra más larga es null
            // Debido a que no se tiene un valor 
            let largest = null;
            // Después iteramos por cada una de las palabras
            for (const word of words) {
              // con split("") creamos un array donde cada elemento es una letra
              // Ejemplo "hola" => ["h","o","l","a"]
              // con reverse() "volteamos" el array
              // Ejemplo ["h","o","l","a"] => ["a"","l","o","h"]
              // y con .join("") volvemos a convertirlo en un string
              // Ejemplo  ["a"","l","o","h"] => "aloh"
              const reversedWord = word.split("").reverse().join("");
              // La primer validación que hacemos es para ver si efectivamente es un array
              if (reversedWord === word) {
                // Si si lo es, primero verificamos que se reemplace la variable largest
                // por el primer palindromo si es que no existe uno aún
                if (largest == null || word.length > largest.length) {
                  // En caso de existir, se compara su longitud con el palindromo existente
                  largest = word;
                }
              }
            }

            // Al final siempre retornamos la variable largest
            // Ya que si no existe ni uno solo en el array, su valor se mantiene como null
            return largest;
        }

      
      findLargestPalindrome(["racecar", "level", "world", "hello"])


      function createCalculator() {
        // Tu código aquí ??
        let number = 0;
        return{
          add(value){
            number += value;
            return number;
          },
          subtract(value){
            number -= value;
            return number;
          },
          multiply(value){
            number = number * value;
            return number;
          },
          divide(value){
            number = number / value;
            return number;
          },
          clear(value){
            number = 0
            return number;
          },
          getTotal(value){
            return number;
          }
        }; 
      }
      
      const calculator = createCalculator();

      
      console.log(calculator.add(10));
      console.log(calculator.subtract(-10));
      console.log(calculator.multiply(10));


      function myMap(array, func) {
        // Tu código aquí 
        resultado = [];

        for(let i = 0; i< array.length; i++){
          let elemento = array[i];
          resultado.push(func(elemento));
        }
        return resultado
      }
      myMap([1,2,3,4], (num) => num * 2)

      // for(let i = 0; i < cats.length; i++ ){
      //   //guardamos los objetos en un nuevo arreglo uno por uno
      //       const cat = cats[i];
      //   //Creamos una variable con la sumat total de follower de cada objeto
      //   //utilizando reduce 
      //       const totalFollowers = cat.followers.reduce((acum, currentVal) => acum + currentVal,
      //       0
      //     );

      var twoSum = function(nums, target) {
       let resultado= [];
        let acum = 0 ;
          for (let i = 0;i < nums.length; i++ ){
              let arrNum = nums[i];
              let suma = arrNum;
              console.log(suma);
              if (suma === target){
                  return target;
              }
          }
        return resultado;
    };
    console.log(twoSum([2,7,11,15], 9));
    