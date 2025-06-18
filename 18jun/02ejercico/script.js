// Al hacer clic en el boton..  
document.getElementById('btnCheck').addEventListener('click',() => {
//Leemos y convertimos el valor del input
const n = Number(document.getElementById('num').value);
const out = document.getElementById('out1');

// Si n es mayor que 0 -> positivo; si es menor -> negativo; si no ->cero

if (n > 0){
    out.textContent = 'El numero es POSITIVO';
}else if (n < 0){
    out.textContent = 'El numero es NEGATIVO.';
     } else { 
        out.textContent = 'El numero es CERO.';
     }
});