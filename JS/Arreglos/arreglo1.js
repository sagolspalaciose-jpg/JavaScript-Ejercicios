// Contar registros procesados
/**
 * Crea un programa que reciba un numero "n" (cantidad de registros a procesar) 
 * a través de un prompt, y muestre en la consola un mensaje por cada registro
 * procesado de la siguiente manera:
 *  Proceso 1 registrado
 *  Proceso n registrado
 * Cuando se hayan completado todos los registros, mostrar en consola:
 *  "Todos los procesos han sido registrados con exito"
 */

let cantidadDeRegistros = Number (prompt("Dime la cantidad de registros a procesar:"));

for (let i=1; i <= cantidadDeRegistros; i++){
    console.log (`Proceso ${i} registrado`);
}

console.log ("Todos los procesos han sido registrados con exito");

