//Que son las Arrays Asociativas?

/*Las arrays asociativas son lo mismo que las arrays, pero un poco distintas, en parte eso solo lo hacen para no utilizar los 0, si no el nombre, y tener
un poco mas especifico.
Ejemplo:*/

//Arrays Normales:
let pc1 = ["Kipaert", "Ryzen 5", "16GB", "1TB"];
//Nos muestra algo ESPECIFICO
document.write(pc1[0])


//Los Arrays Asociativos son asi:
let pc = {
    nombre: "KipaertPC",
    procesador: "Ryzen 5",
    ram: "16GB",
    espacio: "1TB"
};

let nombre = pc["nombre"]
let procesador = pc["procesador"]
let ram = pc["ram"]
let espacio = pc["espacio"]

frase = `El nombre de mi PC es: <b>${nombre}</b> <br>
         El procesador de mi PC es:<b>${procesador}</b> <br>
         La Ram de mi PC es: <b>${ram}</b> <br>
         El Espacio de mi PC es: <b>${espacio}</b>`;

document.write(frase)