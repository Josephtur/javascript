// // ===== Ejercicio 3: Suma de dos números =====

// // 1) Pedimos el primer número
// const num1Entrada = prompt("Ingresa el primer número:");

// // 2) Pedimos el segundo número
// const num2Entrada = prompt("Ingresa el segundo número:");

// // 3) Convertimos ambos valores a número
// const num1 = Number(num1Entrada);
// const num2 = Number(num2Entrada);

// // 4) Calculamos la suma
// const suma = num1 + num2;

// // 5) Mostramos la suma al usuario
// alert(`La suma de ${num1} + ${num2} es: ${suma}`);

// Ejemplo con validación en Ejercicio 3 (Suma de dos números)

// const entrada1 = prompt("Ingresa el primer número:");
// const num1 = Number(entrada1);

// // Validamos que la conversión dio un número válido
// if (Number.isNaN(num1)) {
//   alert("¡Error! No ingresaste un número válido para el primer valor.");
//   // Podemos terminar aquí o volver a pedirlo...
//   throw new Error("Entrada no numérica");
// }

// const entrada2 = prompt("Ingresa el segundo número:");
// const num2 = Number(entrada2);

// if (Number.isNaN(num2)) {
//   alert("¡Error! No ingresaste un número válido para el segundo valor.");
//   throw new Error("Entrada no numérica");
// }

// const suma = num1 + num2;
// alert(`La suma de ${num1} + ${num2} es: ${suma}`);

// ===== Ejercicio 3 con re-prompt hasta que sea un número válido =====

// Función auxiliar: pide un número hasta que la conversión con Number() no sea NaN

function pedirNumero(mensaje) {
  let valor;
  do {
    const entrada = prompt(mensaje);
    valor = Number(entrada);
    if (Number.isNaN(valor)) {
      alert("Entrada no válida. Por favor, ingresa un número.");
    }
  } while (Number.isNaN(valor));
  return valor;
}

// 1) Pedir el primer número (hasta que sea válido)
const num1 = pedirNumero("Ingresa el primer número:");

// 2) Pedir el segundo número (hasta que sea válido)
const num2 = pedirNumero("Ingresa el segundo número:");

// 3) Calcular la suma
const suma = num1 + num2;

// 4) Mostrar el resultado
alert(`La suma de ${num1} + ${num2} es: ${suma}`);

// Vamos a desglosar línea a línea la función y luego aclarar el uso de ${…} en los strings.

// function pedirNumero(mensaje) {
// function pedirNumero(mensaje) {

// Aquí definimos una función llamada pedirNumero.

// Entre paréntesis vemos mensaje: es un parámetro, es decir, un nombre local que va a recibir el valor que tú le pases cuando llames a la función. Normalmente será un texto para mostrar en el prompt.


//   let valor;
// let valor;

// Declaramos una variable valor sin inicializar.

// La usaremos después para guardar el número que el usuario ingrese y convertirlo con Number().


//   do {
// do { … } while (Number.isNaN(valor));

// Un bucle do‑while ejecuta el bloque al menos una vez, y luego repite mientras la condición sea true.

// Aquí queremos repetir la lectura del prompt hasta que valor deje de ser NaN (no‑número).


//     const entrada = prompt(mensaje);
// const entrada = prompt(mensaje);

// Llamamos a prompt(...), que abre un diálogo pidiendo texto al usuario.

// Le pasamos mensaje, el texto que recibimos como parámetro. Por ejemplo, si llamas pedirNumero("Ingresa tu edad:"), el prompt mostrará exactamente ese texto.

// Guardamos la cadena que el usuario teclea en entrada.

// Usamos const porque esa variable no se volverá a reasignar dentro de esta iteración del bucle: recibe un valor, lo usamos y luego, en la siguiente vuelta, se crea otra entrada nueva.


//     valor = Number(entrada);
// valor = Number(entrada);

// Convertimos la cadena entrada a número con Number().

// Si el usuario escribió algo como "42", valor será 42.

// Si escribió "hola", valor será NaN.


//     if (Number.isNaN(valor)) {
//       alert("Entrada no válida. Por favor, ingresa un número.");
//     }
// Validación

// Number.isNaN(valor) comprueba si valor es exactamente NaN.

// Si es true, mostramos un alert() de error para avisar al usuario y que vuelva a intentar.

// Al terminar este if, el bucle do…while revisa la condición y, como valor sigue siendo NaN, repite el bloque.


//   } while (Number.isNaN(valor));
// Condición de repetición

// Mientras valor sea NaN, el bucle sigue. En cuanto el usuario teclee algo que Number() convierta en un número válido, Number.isNaN(valor) será false y el bucle terminará.


//   return valor;
// }
// return valor;

// Una vez fuera del bucle, valor ya es un número válido.

// La función termina devolviendo ese número, y quien llamó a pedirNumero(...) recibirá ese valor para usarlo (por ejemplo para sumar, restar, etc.).

// ¿Y las ${…} en los strings?
// ${…} forma parte de los template literals (cadenas entre `backticks`).

// Ejemplo:


// const a = 5, b = 3;
// alert(`La suma de ${a} + ${b} es ${a + b}`);
// Aquí:

// Las comillas invertidas (`) crean un template literal.

// Dentro, ${a} inserta el valor de la variable a en esa posición de la cadena.

// Sin ${}, tendrías que concatenar con +, así:

// alert("La suma de " + a + " + " + b + " es " + (a + b));
// No todas las variables “deben” ir entre ${…}: solo cuando quieras interpolar su valor dentro de un template literal.

// Si usas comillas normales ('texto' o "texto"), no existe ${…}; tendrías que hacer concatenaciones manuales con +.

// Resumen
// mensaje es el parámetro que decide qué texto se muestra en el prompt.

// Usamos const entrada porque dentro de cada vuelta del bucle la entrada concreta no cambia; si el bucle repite, creamos una nueva entrada.

// let valor está fuera del bucle para poder reutilizarla y, tras convertirla, comprobar si es NaN.

// ${…} solo se usa dentro de `...` (template literals) para incrustar variables o expresiones de forma cómoda en una cadena.