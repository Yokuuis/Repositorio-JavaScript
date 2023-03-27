//Concatenacion:
greeting = "Hello Jared!";
//dando un saludo
question = " How are you?";
//dando una pregunta
resultado = greeting + question;
//juntando el saludo + la pregunta
document.write(resultado);


//Un String
number = 5;

number2 = 5;

resultado = "" + number + number2;
//Automaticamente por por poner las comillas dobles se vuelven una cadena d texto gracias a las comillas dobles
document.write(resultado);

//Concat
numberconcat1 = "15";
//para que pueda funcionar esta funcion, debemos poner las comillas dobles, solamente con el primer numero

numberconcat2 = 5;

resultado = numberconcat1.concat(numberconcat2);
//Tenemos que poner .concat(Variable name)
document.write(resultado);

//backtiks y la variable ${}

Name1 = "Kipaert";

say1 = "My name is " + name1 + " and i'm learning :)";

document.write(say1);

// Metodo ${}:

Name = "Kipaert";

say = `My name is ${Name} and i'm learning :)`;
document.write(say);

/*Se puede poner comillas Simples, pero no comillas dobles, la razon es que estamos comenzando la cadena de texto con las comillas dobles
y las estamos cerrando al utilizar las comillas dobles, pero si queremos usar comillas dobles, deberiamos hacer comillas simples y se viceversa
y tambien pasa lo mismo con los backtiks, para tener cuidado.*/