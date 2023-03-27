//Que significa Operadores De Comparacion?

/* Los Operadores de comparacion comparan dos expresiones y devuelven un valor boolean que representa la relacion de sus valores.
Lo que se refiere es que vamos a estar comparando mas de 2 valores y para saber si es false o true*/

//Signo De Igualdad:

//Ejemplo False con signo de igual:
let Numberfalse = 20;
let Numberfalse1 = 10;

document.write(numberfalse == numberfalse);

/*recordar que si vas a utilizar el "=" que se utilice "==" por que recuerda que si se utiliza el = estamos dando un valor, lo que queremos
saber si es que es igual el valor de number al number2 (obviamente no son iguales de valor) y tambien se puede comparar siendo un texto, osea si lleva las comillas dobles
tambien puede ser contado*/

//Ejemplo True con signo de igual:

let numbertrue1 = 5;
let numbertrue2 = 5;

document.write(numbertrue1 == numbertrue2);
//Una vez entendido eso, siguen los siguientes Operadores De Comparacion

//Signo De Desigualdad False:
//aqui estamos preguntando si son distintos
let numberInequalityF1 = 5;

let numberInequalityF2 = 5;

document.write(numberInequalityF1 != numberInequalityF2)

//Signo De Desigualdad True:
let numberInequalityT1 = 10;

let numberInequalityT2 = 11;

document.write(numberInequalityT1 != numberInequalityT2)

//Tambien esto puede ser usado con textos, ejemplo:

let textHello = "Hello"
let textHi = "Hi"

document.write(textHello != textHi)


//Signo De Identico (forzado):

let numberidentity = 100;

let numberidentity2 = 100;

document.write(numberidentity === numberidentity2)
//Aca esta forzando que si son estrictamente los datos, siendo los mismos numeros y los mismos datos (ejemplo si lleva o no lleva las comillas dobles)

//Signo De No Identico:

let numbernot = 12;

let textnot = "12";

document.write(numbernot !== textnot)
//Aca estamos preguntando si no son los mismos tipo de datos, osea nos va a tirar true, por que no son el mismo tipo de texto, por que uno es numero y el otro es texto.

//Sigo De Superior que:

let numbersuperior = 100

let numbernotsuperior = 50

document.write(numbersuperior > numbernotsuperior)

document.write(numbersuperior < numbernotsuperior)

document.write(numbersuperior >= numbernotsuperior)

document.write(numbersuperior <= numbernotsuperior)

//Se puede hacer de esa manera pero tambien de la forma de resultado.
