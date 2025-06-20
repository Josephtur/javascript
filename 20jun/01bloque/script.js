// 1. To Do List
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasklist = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () =>{
 //leer valor del input
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // evitar tareas vacias

    // crear elemento <li> y asignar texto
    const li = document.createElement('li');
    li.textContent = taskText;

    //añadir a la lista y limpiar input
    tasklist.appendChild(li);
    taskInput.value = '';
});

//2. Formulario Dinamico
const registerForm = document.getElementById('registerForm');
const formResult = document.getElementById('formResult');

registerForm.addEventListener('submit', e =>{
    //evitamos que el formulario recargue la pagina
    e.preventDefault();
    // Recoger datos del formulario
    const nombre = registerForm.nombre.value.trim();
    const email = registerForm.email.value.trim();
    const edad = registerForm.edad.value.trim();

    // validar entradas basicas 
    // si falta alguno de los campos, mostramos mensaje de error
    if (!nombre || !email || !edad){
        formResult.textContent = 'Por favor completa todos los campos.';
    }
    // Mostrar resultados
    formResult.innerHTML = `
        <p><strong>Nombre:</strong>${nombre}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Edad:</strong>${edad}</p>
    `;
});

// 3. Calculadora de Gastos

const expenseInput = document.getElementById('expense');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const totalSpent = document.getElementById('totalSpent');

let total = 0;

addExpenseBtn.addEventListener('click', () =>{
    //leer y parsear el valor
    const value = parseFloat(expenseInput.value);
    if (isNaN(value) || value <= 0) return;

    // sumar al total y actualizar pantalla
    total += value;
    totalSpent.textContent = total.toFixed(2);

    //Limpiar campo
    expenseInput.value = '';
});

//Galeria de imagenes

const photos = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let current =0;
const photoEl = document.getElementById('photo');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
// funcion para actualizar la imagen mostrada
function updatePhoto(){
    //cambia el atributo src segun el indice
    photoEl.src = photos[current];
}

prevBtn.addEventListener('click', () =>{
    //Ejm: current = 1
    //current ? (1 - 1 + 3) %3
    //current = (0 + 3) 3%
    // current = 0 -- anterior 
    current = ( current - 1 + photos.length) % photos.length;
    updatePhoto();
});

nextBtn.addEventListener('click',() => {
    // incrementamos indice y volvemos al modulo
    current = (current +1) % photos.length;
    updatePhoto();
});


// 5.Clima con API

const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherResult = document.getElementById('weatherResult');

const apikey = 'f3fbbb2c935143afa60113750252006';

getWeatherBtn.addEventListener('click', async () =>{
    // Leer y limpiar el nombre de la cuidad
    const city = cityInput.value.trim();
    // si no hay cuidad mostramos error
    if (!city){
        weatherResult.textContent = 'Introduce el nombre de una cuidad.';
        return;
    }

    // URL con nuestra clave y cuidad
    const url = `https://api.weatherapi.com/v1/current.json?key=${apikey}` +
                `&q=${encodeURIComponent(city)}` +
                `&lang=es`;

    try {
        const res = await fetch(url); //hacemos la peticion HTTP
        const data = await res.json(); // parseamos la respuesta a json

        //verificar respuesta
        if (data.error){
            weatherResult.textContent = `Error: ${data.error.message}`;
            return;
        }

        // extraer dato
        const temp = data.current.temp_c; //temperatura en °C
        const desc = data.current.condition.text; //descripcion del clima
        const icon = data.current.condition.icon; // URL del icono clima
        const location = data.location.name; // Nombre de la cuidad validada por la API

        //Mostrar resultado
        weatherResult.innerHTML = `
        <p>
            <img src="${icon}" alt="${desc}">
            en <strong>${location}</strong> hace
            <strong>${temp}°C</strong> y esta "${desc}".
        </p>
        `;
    }catch (err) {  
        weatherResult.textContent = 'No se pudo contener el clima. Revisa tu conexion.';
        console.error(err);
    }            
});