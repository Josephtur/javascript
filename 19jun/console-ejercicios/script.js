// 1. Saludo Personalizado
// Define la funcion saludar
function saludar(nombre){
    return `¡Hola, ${nombre}!`;
}
// Prueba en consola
console.log(saludar('Ruben'));
console.log(saludar('Joseph'));
console.log(saludar('Kevin'));
console.log(saludar('Azucena'));

//2. Suma de dos numeros
//Definir la funcion sumar
function sumar(a, b){
    return a + b;
}
console.log(sumar(3, 7));

////3. Verificar par/impar
//Define la funcion esPar

function esPar(numero){
    return numero % 2 === 0
}
console.log(esPar(4));
console.log(esPar(7));
console.log(esPar(14584));

//4. Longitud de una cadena
//Define la funcion longitud

function longitud(cadena){
    return cadena.length;
}
console.log(longitud('JavaScript'));
console.log(longitud('Ferrocarril'));
console.log(longitud('Entonces'));

//Repetir un texto

function repetir(texto, veces){
  let resultado = '';
  for (let i = 0; i < veces;i++){
    resultado += texto;
  }  
  return resultado;
}

console.log(repetir('Jagger', 3));


