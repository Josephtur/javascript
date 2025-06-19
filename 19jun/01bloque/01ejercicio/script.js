// 1. Crear la funcion
function calcularDescuento(precio, descuentoPct){
    const ahorro = precio * (descuentoPct/100);
    const total = precio - ahorro;
    return {ahorro, total};
}

// 2. Evento de aplicar descuento

document.getElementById('btnAplicar').addEventListener('click', () => {
    //3. Leemos valores
    const precio = parseFloat(document.getElementById('precio').value) || 0;
    const pct = parseFloat(document.getElementById('porcentaje').value) || 0;
    //4. Calculamos y mostramos
    const {ahorro, total} = calcularDescuento(precio, pct);
    document.getElementById('ahorro').textContent = ahorro.toFixed(2);
    document.getElementById('final').textContent = total.toFixed(2);
});

