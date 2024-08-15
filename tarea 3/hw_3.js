
let naruto = new Map ([["Naruto", 7], ["Shikamaru", 10], ["Neji", 9], ["Sasuke", 7], ["Kiba", 8], ["Sakura",7]]);

function konohaTwelve (mapMap, checkValue){
    let containsValue = mapMap.has(checkValue);
    if (containsValue == false) {
        var valLen = checkValue.length;
        mapMap.set(checkValue,valLen)
        console.log(checkValue + " has been added.");
    }
    else {console.log(checkValue + " is already in.")}
};

// Crea una funcion que reciba como parametro dos numeros enteros (num1 y num2). 
//La funcion debe multiplicar num1 por el  num2 y guardar el resultado en num1 una cantidad 
//n de veces hasta que rebase el numero 1,000,000. La funcion debe de regresar cuantas veces se tuvo que 
//efectuar la operacion

function countValues (num1, num2) {
    let i = 0;

    while (num1 < 1000000){
        num1 = num1 * num2
        i ++
    }
    return("The operation was performed "+i+" times.")
};