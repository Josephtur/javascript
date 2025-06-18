// Agregamos el evento clic
document.getElementById('btnCount').addEventListener('click', () => {

// obtiene el valor ingresado  en el input
let num = Number(document.getElementById('start').value);
// Obtiene la lisa <ul> donde se van a mostrar los numeros
const ul = document.getElementById('out4');
//Limpia el contenido anterior de la lista para no duplicar resultados 
ul.innerHTML = '';
//bucle que se ejectua mientras 'num' sea mayor o igual a 1
while (num >= 1){
    // crea un nuevo elemento <li> (item de lista) 
    const li = document.createElement('li');
    // Le asigna como contenido el numero actual
    li.textContent = num;
    // agrega el <li> como hijo del <ul>, es decir, lo muestra en la lista
    ul.appendChild(li);
    // decrementa el numero en 1 (cuenta regresiva)
    num--; 


}


});


