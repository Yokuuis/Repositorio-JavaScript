// Que es una variable?
/*
Una variable es un contenedor para almacenar datos
Una variable se comporta como si fuera el valor que contiene

debemos hacer dos pasos:

Declaracion (Var, Let, Const) (no obligadamente debemos utilizar estas definiciones, tambien podemos hacer una variable sin una decaracion)
Asignación (= operador de asignación)
*/

//ejemplo basico de una variable sin una declaracion:

Recipiente = "none";
alert(Recipiente);


//tipo de datos: String (Cadena d texto), number, y boolean.

String = "Cadena d texto"

Number = 19 
//no deba llevar comillas dobles o simples

Booleano = true 
//no deba llevar comillas dobles o simples

//caso especiales de datos: Undefined, null, nan
/*Undefined: 

Null: Es una aclaracion o puede ser un error, pero en el
caso que es una aclaracion, ya que estamos aclarando, ejemplo:

let text = null;

significa que por el momento, le ponemos que no tiene ningun valor y le aclaramos el "Null"


nan: not a number no es un numero, eso significa que 
estamos sumando un valor pero el valor no tiene un numero
por ejemplo:

let number = "1";
let number2 = "name";

alert(number * number2)
*/

//Ejemplos de Variables En Var:
var TextoA = "comillas dobles";
var TextoB = 'comillas simples';
var TextoC = "Comillas 'simples' dentro de comillas dobles";

console.log(TextoA);
console.log(TextoB);
console.log(TextoC);

//Ejemplos de Variables En Let:

//Que significa let? 
/*La función LET asigna nombres a los resultados de los cálculos
Esto permite almacenar cálculos intermedios, valores o definir nombres en una fórmula
Estos nombres solo se aplican en el ámbito de la función LET*/
let age, ageold, agenew;
age = 12;
age = age + 1; //btw tambien podemos hacer suma con la edad sumandola

ageold = 50;

agenew = 1;
alert(age)
    alert(ageold)
        alert (agenew)

//Ejemplos de Variables En Const:

const nombre = "name";

alert(nombre)

/*Pedir datos con prompt

Esto lo que que nos puede ayudar es almanecar datos
con preguntas que le hacemos al usuario, y que el pueda
interactuar con la pagina web
*/

prompt("hello world!");

//otro ejemplo con una aclaracion:

let age3 = prompt("Welcome, what is your age?")

alert(age3);

//otro ejemplo:

let nombreusuario = prompt("dime tu nombre")

alert("Hola, espero que seas bienvenido " + nombreusuario)

