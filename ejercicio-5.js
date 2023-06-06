//Ejercicio 5-a

var palabras = ["Hola", "Mundo", "JavaScript", "For", "Bucle"];

for (var i = 0; i < palabras.length; i++) {
  console.log(palabras[i]);
}

//Ejercicio 5-b

for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
    console.log(palabraModificada);
}

//Ejercicio 5-c

var sentence = "";

for (var i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}

console.log(sentence);

//Ejercicio 5-d

var numeros = [];

for (var i = 0; i < 10; i++) {
  numeros.push(i);
}

console.log(numeros);

