// ===== Ejercicio 1: Promedio de tres notas =====

// 1) Pedimos al usuario la primera nota con prompt()
//    prompt() siempre devuelve un string.
const entrada1 = prompt("Ingresa la primera nota:");

// 2) Pedimos la segunda nota
const entrada2 = prompt("Ingresa la segunda nota:");

// 3) Pedimos la tercera nota
const entrada3 = prompt("Ingresa la tercera nota:");

// 4) Convertimos cada entrada de string a número
//    Si la conversión falla, resultará en NaN
const nota1 = Number(entrada1);
const nota2 = Number(entrada2);
const nota3 = Number(entrada3);

// 5) Calculamos el promedio
const promedio = (nota1 + nota2 + nota3) / 3;

// 6) Mostramos el resultado con alert()
//    Utilizamos toFixed(2) para limitar a dos decimales
alert(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);

// ¿Por qué en los ejemplos se usó const?
// En los ejercicios que te pasé, cada variable recibe justo una vez su valor a partir de prompt() y luego no se vuelve a cambiar. Por eso tiene sentido marcarlas como const:


// const entrada = prompt("…");   // nunca reasignarás `entrada`
// const numero  = Number(entrada);
// alert(numero);
// Si en algún punto quisieras reasignar esa misma variable (por ejemplo, volver a pedir otra nota), entonces sí cabría usar let:


// let nota = Number(prompt("Ingresa una nota:"));
// // …validas o procesas…
// nota = Number(prompt("Nota corregida:"));  // reasignación válida solo con let
// Resumen de cuándo usar cada uno
// Situación	Declaración
// Variable que nunca vas a reasignar tras la inicialización	const
// Variable que cambiará de valor dentro de su bloque de código	let
// Evitar usar var (por hoisting y ámbito menos predecible)	N/A

// Adoptar esta práctica (const por defecto, let sólo cuando sea necesario) hace tu código más robusto y fácil de mantener.