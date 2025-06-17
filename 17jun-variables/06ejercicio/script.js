// ===== Ejercicio 2: Área de un rectángulo =====

// 1) Solicitamos al usuario el ancho del rectángulo
const anchoEntrada = prompt("Ingresa el ancho del rectángulo:");

// 2) Solicitamos el alto del rectángulo
const altoEntrada = prompt("Ingresa el alto del rectángulo:");

// 3) Convertimos las entradas de string a número
const ancho = Number(anchoEntrada);
const alto  = Number(altoEntrada);

// 4) Calculamos el área (base × altura)
const area = ancho * alto;

// 5) Mostramos el resultado
//    toFixed(2) formatea a dos decimales, en caso de que sean decimales
alert(`El área de un rectángulo de ${ancho} × ${alto} es: ${area.toFixed(2)}`);
