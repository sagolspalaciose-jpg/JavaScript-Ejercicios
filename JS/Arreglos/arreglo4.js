// Promediar calificaciones enviadas por usuarios
/**
 * Dentro de una ecommerce de aparatos electronicos, uno 
 * de sus productos mas populares recibio una gran cantidad
 * de calificacione y se registraron dentro del siguiente a
 * arreglo
 * 
 *      Tu tarea es calcular el promedio de las calificaciones
 *      enviadas
 * 
 *      Muestra en consola el resultado utilizando solo un decimal
 * 
 */

const calificaiones = [4.3, 5.0, 4.1, 4.4, 3.1, 4.0];


const suma = calificaiones.reduce((acumulador, calificacion) => acumulador + calificacion, 0);
/**
 * La funcion necesita dos cosas, la suma y un valor inicial 
 */
const promedio = suma / calificaiones.length;

console.log(promedio.toFixed(1));