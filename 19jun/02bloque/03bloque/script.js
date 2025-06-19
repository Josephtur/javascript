// 1. referencias del input, boton y mensaje
const nombreInput = document.getElementById('nombre');
const btnEnviar = document.getElementById('btnEnviar');
const msg = document.getElementById('mensaje');

//2. Funcion que valida que nombre no este vacio

function validar(nombre){
    return nombre.trim().lenght > 0;
}

//3. envento clic / valida y muestra

btnEnviar.addEventListener('click',() => {
    const nombre = nombreInput.value;
    if(validar(nombre)){
        msg.textContent = `¡Bienvenido, ${nombre}!`
    }else{  
        msg.textContent = ' Por favor, ingrese tu nombre'
    }

});