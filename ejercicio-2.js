//Ejercicio 2-a

var texto = "ejemplo de texto";
var textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);

//Ejercicio 2-b

var texto = "abcdefghij";
var primerosCincoCaracteres = texto.substring(0, 5);
console.log(primerosCincoCaracteres);

//Ejercicio 2-c

var texto = "abcdefghij";
var ultimosTresCaracteres = texto.substring(texto.length - 3);
console.log(ultimosTresCaracteres);

//Ejercicio 2-d

var texto = "eJEMPLO DE tEXTO";
var primeraLetraMayuscula = texto.substring(0, 1).toUpperCase();
var restoDelTextoMinuscula = texto.substring(1).toLowerCase();
var resultado = primeraLetraMayuscula + restoDelTextoMinuscula;
console.log(resultado);

//Ejercicio 2-e

var texto = "Hola mundo";
var posicionEspacio = texto.indexOf(" ");
console.log(posicionEspacio);

//Ejercicio 2-f

var texto = "ejemplo STRING";
var primeraPalabra = texto.substring(0, texto.indexOf(" "));
var segundaPalabra = texto.substring(texto.indexOf(" ") + 1);
var resultado = primeraPalabra.substring(0, 1).toUpperCase() + primeraPalabra.substring(1).toLowerCase() + " " + segundaPalabra.substring(0, 1).toUpperCase() + segundaPalabra.substring(1).toLowerCase();
console.log(resultado);