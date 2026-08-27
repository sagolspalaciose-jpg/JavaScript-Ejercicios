// Control de intentos para iniciar sesion
/**
 * Instrucciones:
 * Simula un proceso de inicio de sesion que permita maximo 3 intentos.
 * Cada intento pedira una contraseña a traves de un prompt.
 * Considera lo siguiente: 
 *  Si el usuario ingresa "admin123", muestra el mensaje "Acceso concedido".
 *  Si falla las 3 veces, muestra el mensaje "Cuenta bloqueada"
 * Usa un bloque do while.
 */

let intentos = 0;
let contraseña = "";

do {
  contraseña = prompt("Ingresa tu contraseña:");
  intentos++;

  if (contraseña === "admin123") {
    console.log("Acceso concedido");
    break;
  }

  if (intentos === 3) {
    console.log("Cuenta bloqueada");
  }

} while (contraseña !== "admin123" && intentos < 3);