// array con rutas de imagenes
const foto = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
// 2. referencias al <img> y al boton
const img = document.getElementById('imagen');
const btn = document.getElementById('btnSiguiente');
// Indice actual 
let indice = 0;
//Funcion que avanza al siguiente indice y actualiza la imagen
function siguienteFoto(){
    indice = (indice + 1) % foto.length;
    // cambia la imagen mostrada en el 
    img.src = foto[indice];
}

//Evento clic
btn.addEventListener('click', siguienteFoto);