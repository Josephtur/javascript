document.addEventListener.EventListener('DOMContentLoaded', () => {
    const picker = document.getElementById('colorPicker');
    const btn = document.getElementById('btnCambiar');

    btn.addEventListener('click', () => {
        // tomamos el valor del color y lo aplicamos en el body
        document.body.style.backgroundColor = picker.value;

    })
});