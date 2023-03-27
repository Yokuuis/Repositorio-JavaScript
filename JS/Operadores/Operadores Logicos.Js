//Que son los operadores logicos?

/*Los Operadores logicos nos devuelven un resultado a partir que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son 
valores logicos o asimilables a ellos*/

//Ejemplo Con "&&":
//Aqui debe salir si o si las 2 true, o si no va a tirar false.

num1 = 12;
num2 = 24;

confirmed1 = num1 < num2;
confirmed2 = num1 != num2;

document.write(confirmed1 && confirmed2)

//Ejemplo Con "||":
//Aqui solo con una con que sea real, va a salir true.

examplenumber = 12;
examplenumber1 = 24;

confirmed3 = examplenumber > examplenumber1;
confirmed4 = examplenumber != examplenumber1;

document.write(confirmed3 || confirmed4)

//Ejemplo con "!":
//Esto hace todo lo contrario, por ejemplo, si no uno es falso, y ponemos el signo, nos lo pone verdadero, tambien eso pasa si lo ponemos en verdadero
example = 12;
example1 = 24;
confirmed5 = example > example1;
confirmed6 = example == example1;

document.write(!confirmed5)

//en pocas palabras seria asi:
document.write(!false) 
//nos tira true

document.write(!true)
//nos tira false

//Tambien se pueden juntar todas, aca un ejercicio, y explicacion para resolverla:


numberexample1 = 12;
numberexample2 = 24;
numberexample3 = 25;
numberexample4 = 92;
numberexample5 = 91;

operation = (numberexample5 > numberexample2 && numberexample4 < numberexample3) || (!(numberexample1 === numberexample2) || numberexample3 != numberexample3)
//Primera Operacion: True (numb5 > numb2), True (numb4 < numb3) > TRUE

//Segunda Operacion: True (numb1 === numb2) False (numb3 != numb3)

//Resultado: True, razon, con tan solo tener uno true, TODO se vuelve TRUE, aunque uno se vuelva, false, asi se resuelve.
