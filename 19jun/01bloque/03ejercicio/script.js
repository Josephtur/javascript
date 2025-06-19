// Crear la funcion calcularIMC
function calcularIMC(peso, altura){
    return peso / (altura * altura);
}

function etiquetaIMC(imc){
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Normal';
    if (imc <30) return 'Sobrepeso';
    return 'Obesidad';
}

document.getElementById('btnCalcular').addEventListener('click', function(){
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value)|| 0;
    // calcular IMC
    let imc = calcularIMC(peso,altura);
    
    // mostramos el imc formateado a dos decimales
    document.getElementById('imcVal').textContent = imc.toFixed(2);
///obtenemos y mostramos la etiqueta, usando la funcion
document.getElementById('imcEtiqueta').textContent = etiquetaIMC(imc);
 


});