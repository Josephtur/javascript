// Funcion auxiliar: lee y convierte  el valor de un input (texto) en un numero
function leerNumero(id){
    //Obtiene el elemento por su id y extrae su valor como texto
    const val = parseFloat(document.getElementById(id).value);
    //Si el valor no es un numero valido, devuelve null, si no , el numero converti
    //Verifica si 'val' No es un numero para esto usa NaN
    //Si es asi, devuelve null (para indicar valor invalido)
    //si 'val' si es un numero valido, devuelve tal cual
    //operador ternario(? :) = if ...else
    return isNaN(val) ? null : val;
}

//1. Calcula el perimetro de un rectangulo
function calcularPerimetro(){
    //Lee la base y la altura usando la funcion auxiliar 
    const b = leerNumero('baseRect');
    const h = leerNumero('alturaRect');

    // Si cualquiera de los dos es un null (valor invalido), mostrar
    //esta alerta y sale

    if (b === null || h === null ) 
        return alert('Por favor ingresa valores validos.');
    // Formula del perimetro; 2 * (base + altura)
    const p = 2 * (b + h);

    //Escribe el resultado en el <p> con id = "resPerimetro"</p>
    document.getElementById('resPerimetro').textContent = `Perimetro: ${p}`; 
}

// 2. convertir grados celsius a fahrenheit 

function convertirFahrenheit() {
    //Lee el valor en celsius
    const c = leerNumero ('celsius');
    //valida el numero
    if (c === null) return alert('Por favor ingresa un valor valido.');
    // Formula : (°C X9/5) + 32
    const f = (c * 9/5) + 32;
    //Mostrar la converseion redondeando a dos decimales
    document.getElementById('resFahrenheit').textContent =
    `${c.toFixed(2)} °C = ${f.toFixed(2)} °F`;
}