// ASIGNA AL BOTON 'BTNFRUIT' EL EVENTO ADDEVENTLISTENER "CLICL"
document.getElementById('btnFruit').addEventListener('click', () => {
    // ASIGNAMOS LA VARIABLE CONSTANTE "O" PUEDE SER 'OPTION'
    //LA VARIABLE O RECIBE EL CONTENIDO DEL INPUT DE ID 'OPT'
    // Y LO TRANSFORMA CON UN NUMBER = CAMBIAR DE TEXTO A NUMERO

    const o = Number(document.getElementById('opt').value);
    let fruta;
    // asignamos la variable imgSrc de tipo let porque cambiara la imagen segun la opcion del usuario
    let imgSrc = '';

      switch(o){
        case 1:
            fruta = 'Manzana';
            imgSrc = 'manzana.jpg';
            break;
        case 2:
            fruta = 'Banana';
            imgSrc = 'banana.jpg' ;
            break;
        case 3:
            fruta = 'Naranja';
            imgSrc = 'naranja.jpg' ;
            break;
        default:
            fruta = 'Opcion invalida'
            imgSrc = 'error.jpg'; 
    }

    document.getElementById('out2').textContent = fruta;
    document.getElementById('fruitImage').src = imgSrc;



});