/* 1. Crea una funcion que te reciba un array de numeros e imprima en la consola el numero mas chico y el numero mas grande del array
2. Crea una funcion que reciba un numero entero y regrese el numero pero en binario
3. CHALLENGE Crea una funcion que reciba un numero FLOTANTE y regrese el numero pero en binario (aqui ejemplo de como es https://stackoverflow.com/questions/35399920/convert-floating-point-number-1864-78-to-binary-and-ieee-format) 
4. Crea una funcion que reciba dos arrays y regrese una fusion de los arrays en el que el segundo de array se pone exactamente en el centro del primero. Ejemplo: [1,2,3,4] , [5,6,7,8] nos daria [1,2,5,6,7,8,3,4] Ejemplo 2: [1,2,3] [4,5,6] daria [1,4,5,6,2,3]
5. Limpiar todos los strings de un array Ejemplo: [1,2,"a","b",123.432] daria [1,2,123,432]
6. Haz una funcion que cuente cuantas letras hay en una oracion, no distingue mayusculas de minusculas
7. Crea una funcion que agarre un array de puros numeros y des la suma de los cubos de todos los numeros de adentro. Ejemplo: [1,2,3] daria 1+8+27=36

tarea adicional:
Investigar que es una Promise y promises encadenadas en contexto de Javascript, crea una funcion que no parezca sacada de internet ;)*/

//1//
let values = [1,2,3,4,5,6]

function one(ds) {
  var lenVal = ds.length
  let min = ds[0]
  let max = ds[0]
  for (let i=0; i < lenVal; i++){
      if (min >= ds[i] ) {min = ds[i];} else {min = min;}
  };
  for (let i=0; i < lenVal; i++){
      if (max >= ds[i] ) {max = max;} else {max = ds[i];}
  };
  return "Min Value: " + min + " Max Value: " + max;
}
var answerOne = one(values)
console.log(answerOne)

//2
function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
};
console.log(decimalToBinary(1))
//3

//4//
let values1 = [1,2,3,4,8]
let values2 = [5,6,7]

function four(a,b){
    let valLen = 2
    if (a.length % 2 == 0) {let valLen = a.length/2;} else {let valLen = (a.length-1)/2;}
    let partOne = a.slice(0, valLen)
    let partTwo = b
    let partThree = a.slice(valLen)
    return partOne.concat(partTwo).concat(partThree);
  
  };
  
  var answerFour = four(values1, values2)
  console.log(answerFour)

  // 6
  let frase = "El que Lo LEA ??? es JOTO"
  function six (letter){
    var count = 0
  
    for (i=0; i< letter.length; i++){
      if ((letter.charCodeAt(i) >= 65 && letter.charCodeAt(i) <= 97) || (letter.charCodeAt(i) >= 97 && letter.charCodeAt(i) <=122)) {count++;}
    }
    return count
  }
  var answerSix= six(frase)
  console.log(answerSix)

  //7//
let values7 = [1, 2, 3]
function seven(val) {
  var result = 0
  for (i=0; i<val.length;i++ )
    result+= values7[i]**3;
   return result
}
var answerSeven= seven(values7) 
console.log(answerSeven)


