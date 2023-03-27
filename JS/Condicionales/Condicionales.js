//Que son los Condicionales?
/*Por lo que vi en el video de Dalto, explica que una Condicional es un bloque, y lo utilizamos con el signo ({}), y esto solamente se puede ejecutar si
es true la operacion o solamente se puede ejecutar si algo es verdadero, ejemplo:*/

//if:

//False result:
if (10>15) {
    alert("hello");
    document.write("Hello, how are you");
}

//True results:

if (100>50) {
   let nombreusuario = prompt("What is your name?");

   alert("Hello, I hope you are well" + nombreusuario);
}

/*Se Ejecuta como es verdadero el resultado, que pusimos de que 100 era superior a 50, obviamente se va ejecutar, para esto hay de ver Operadores
para poder comprender la logica de JavaScript, y En JavaScript, al parecer si se utiliza mucha logica, y matematicas xD*/

//Tambien podemos hacerlo con textos, ejemplo:

if ("example" == "example") {
    alert("this is true");
    document.write("this operation is true");
}

operation = "true"

if(operation == "true") {
    alert("is true lol");
}
//tambien podemos hacerlo con variables, etc.

//Else if:
/*Esto se utiliza if, y else if, como lo dice su nombre, "mas si" esto nos quiere decir que si lo primero no ejecuta, que se vaya por la segunda.
Ejemplo:*/

nombreexample = "Kelley";

if(nombreexample == "Jared") {
    alert("i hate kelley");
}
//Como este es falso, nos pasamos al siguiente que seria else

else if(nombreexample === "kelley") {
    alert("I love kelley");
}
/*?Y como este si es verdadero nos sale como true :) (tambien podemos poner infinitos de if, hasta que se cumpla lo deseado), pero en cambio 
de que por ejemplo, esa condicion no se cumple con else, y ya queremos acabarlo, simplemente ponemos else, un ejemplo.*/

else {
    alert("i want kiss to kelley");
}
//esto es al final, si o si, tambien es solo para aclarar, ejemplo, lo primero if, es false, nos pasamos al else if, y si tampoco lo es, solo queda else.

