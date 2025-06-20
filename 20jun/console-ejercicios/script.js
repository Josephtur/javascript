// 1. Crear un array de colores
const colores = ["amarillo","azul","rojo","verde"];
console.log(colores);
// 2. Acceso y modificacion por indice 
// MOSTRAR INDICE
console.log(colores[1]) //azul SIEMPRE 0=1 1=2 2=3 3=4
// modificamos
colores[1]="naranja";
console.log(colores);
// 3. Añadir y eliminar elementos
// Crea el elemento al final del array
colores.push("morado");
// crea el elemento al incio
colores.unshift("rosa");
console.log(colores);
//Eliminar elementos
colores.pop(); //Elimina el morado ( el ultimo )
//Eliminar primer elemento
colores.shift(); //elimina rosa ( el primero )
console.log(colores);
// 4. Extraer subarrays con slice
const subColores = colores.slice(0,2);
console.log(subColores);
console.log(colores);
// 5. Recorrer el array con forEach
colores.forEach((color,indice) =>{
    console.log(`El color de la posicion ${indice} es ${color}`);
})
// 6. Insertar y eliminar con splice
const colores2 = ["rojo","naranja","azul","amarillo"];
//Ubica en el 1=1
//Elimina 1
//Inserta "verde", "marron"
colores2.splice(1,1,"verde","marron");
console.log(colores2);

//7. Invertir el array con reverse
const numeros = [1, 2, 3, 4, 5];
numeros.reverse();
console.log(numeros);

//8. Unir elementos con join
const colores3 = ["rojo", "verde", "azul"];
const cadena = colores3.join(" - ");
console.log(cadena);

//9. Recorrer con for ... of y condicion
const nums = [10, 15, 20, 25, 30];
// en cada vuelta, la variable n toma el valor de uno de los elementos de nums
for (let n of nums){
    // el operador  % devuelve el resto de la division si es 0
    // Si es 0 entonces es multiplo de 20
    if ( n % 20 === 0){
        console.log(`${n} es multiplo de 20`);
    }
}

// 10. declarar un array de frutas con 3 elementos
const frutas = ["manzana", "pera", "uva"];

// Usar el metodo .map() para transformar cada elemento del array
// La funcion flecha f => f.toUpperCase() recibe cada fruta (f) y devuelve su version en MAYUS
const FRUTAS_MAYUS = frutas.map(f => f.toUpperCase());

console.log(FRUTAS_MAYUS);