// Validando contraseñas
/**
 * Dado un arreglo de contraseñas, recorre cada una de ellas y
 * muestra en consola si cumple con la siguiente regla:
 *  La contraseña contiene al menos 8 caracteres
 * Ejemplo:
 *  arreglo = ["admin", "clave1234", "pass", "supersegura123"]
 *  Contraseña 1 no es valida
 *  Contraseña 2 es valida
 *  ...
 */

const contraseñas = ["1234567", "12234567889", "fafhausifs", "asd", "dauo36a", "dasohfsau38", "!#$%&/()"];
contraseñas.forEach((contraseña, indice) => {
  if (contraseña.length >= 8) {
    console.log(`Contraseña ${indice + 1} es valida`);
  } else {
    console.log(`Contraseña ${indice + 1} no es valida`);
  }
});
