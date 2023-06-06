//Ejercicio 6-a

function suma(num1, num2) {
    return num1 + num2;
}

var resultado = suma(5, 3);
console.log(resultado);

//Ejercicio 6-b

function suma(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert("Error: Uno de los parámetros no es un número");
        return NaN;
    }
    return num1 + num2;
}

var resultado = suma(5, '3'); 
console.log(resultado);

//Ejercicio 6-c

function validateInteger(number) {
    return Number.isInteger(number);
}

console.log(validateInteger(5));
console.log(validateInteger(3.14));

//Ejercicio 6-d

function validateInteger(number) {
    if (!Number.isInteger(number)) {
      console.log("Error: El número no es entero");
      return Math.round(number);
    }
    return number;
}

function suma(num1, num2) {
num1 = validateInteger(num1);
num2 = validateInteger(num2);

if (isNaN(num1) || isNaN(num2)) {
    return NaN;
}

return num1 + num2;
}

var resultado = suma(5, 3.14);
console.log(resultado);

//Ejercicio 6-e

function validateInteger(number) {
    if (!Number.isInteger(number)) {
      console.log("Error: El número no es entero");
      return Math.round(number);
    }
    return number;
  }
  
function suma(num1, num2) {
    num1 = validateInteger(num1);
    num2 = validateInteger(num2);
    
    if (isNaN(num1) || isNaN(num2)) {
      return NaN;
    }
  
    return num1 + num2;
}

var resultado = suma(5, 3.14);
console.log(resultado);