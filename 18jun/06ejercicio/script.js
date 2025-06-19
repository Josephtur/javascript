// Agregamos el evento clic
document.getElementById('btnGuess').addEventListener('click', () => {



    do{
        intento = prompt('Ingresa la palabra secreta:');
        // sera un bucle MIENTRAS prompt no sea un 'hola'
    } while(intento !== 'murcielago');

    document.getElementById('out5').textContent = '¡Correcto!';
    document.getElementById('imgCorrect').style.display ='block';

  

    
});


// === = es igual en typo como en contenido (exactamente igual)
// !== no es igual en tipo ni en contenido (totalmente diferente)