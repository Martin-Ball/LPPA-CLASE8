//Ejercicio 3-a

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);

//Ejercicio 3-b

meses.sort();
console.log(meses);

//Ejercicio 3-c

meses.unshift("Inicio");
meses.push("Fin");
console.log(meses);

//Ejercicio 3-d

meses.shift();
meses.pop();
console.log(meses);

//Ejercicio 3-e

meses.reverse();
console.log(meses);

//Ejercicio 3-f

var resultado = meses.join("-");
console.log(resultado);

//Ejercicio 3-g

var copiaMeses = meses.slice(4, 11);
console.log(copiaMeses);