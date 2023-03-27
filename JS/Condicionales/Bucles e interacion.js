//Que es un Blucles e interacion?
/*En general, un bucle es una estructura de control que permite repetir un bloque de instrucciones las veces que sea necesario. 
El bloque de instrucciones que se repite se suele llamar cuerpo del bucle y cada repetición se suele llamar iteración.*/

//Sentencia While:
/*Es LITERALMENTE lo mismo que los condicionales, pero, simplemente se vuelve a repetir. pero en vez de poder if, ponemos while, y literalmente no para
if solo te pregunta UNA VEZ, y While NO PARA, y hasta que sea falsa esta condicion va a correr la pagina web, pero en caso que sea true, literal no va dar
pagina web, pero hay otra forma para que nos corra el programa.*/

//Ejemplo:
 //sin que nos sume:
 let number = 0;

while (number < 10){
    document.write(number);
}

//Pero en cambio si le damos un limite (el 6):

let number1 = 0;

while(number1 < 6){
    number1++;
    document.write(number1 + "<br>");
}
//lo que hace es que hasta la cantidad limite nos va a dar (123456 0<6 (true) y le pedimos que nos sume y se va reproducir infinitamente hasta llegar la cantidad)

//con condicionales if:
let numberCondicional = 0;

if(numberCondicional < 10){
    numberCondicional++;
    numberCondicional++;
    document.write(number);
}

//Sentencia do while:
/*Con el do while, primero te ejecuta, y luego se hace la pregunta, es igual a las condicionales con lo de if, else if y else, pero cambiambo, en este
Primero se ejecuta y luego la pregunta pregunta final.
Ejemplo:*/


let numberDo = 0;

//Primero se ejecuta
do {
    document.write(numberDo + "<br>");
    numberDo++
}
//luego pregunta, si no es cierto no nos va a poner 0,1,2,3,4,5,6. Solamente nos va a salir el 0
while (numberDo > 6)

//sentencia break:
//El break es el que termina la sentencia:

let numberBreak = 0;
while (numero < 1000) {
    numberBreak++;
    document.write(numberBreak);
    if (numberBreak == 10){
        break;
    }
}
//Esto lo que hace hasta que encuentre el numero lo finalice, pero en cambio nos mostraria en pantalla hasta el 1k, pero le dijimos que hasta el 10 finalice.


//Sentencia for:
/*Es igual que el while, pero este es un bucle determinado, pero hay gente que le dice que son un bucles finitos y infinitos o bucles determinados o 
indeterminados, por ejemplo al while no le decimos cuantas vueltas van a dar pero hay bucles que le decimos cuantas vueltas van a dar, por ejemplo
el while no esta determinado, pero por ejemplo el for se ejecuta las veces que les indiquemos, y se forma de varias partes.
Ejemplo:*/

//Declaramos
//Iniciamos
//Iteramos (Iterar es hacer lo mismo varias veces)

for (let i = 0; i < 6; i++) {
    document.write(i + "br")
}

//Sentencia for in:

//Sentencia for of:

//Sentencia Label:

//Sentencia Continue: