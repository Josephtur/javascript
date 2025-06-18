// 1. Condicionales
// 1.1 if / else if / else 

// const nota = Number(prompt("Ingresa la nota (0-100):"));

// if (nota >=90){
//     console.log("Calificacion: A");
// } else if (nota >= 80){
//     console.log("Calificacion: B");

// } else if (nota >=70) {
//     console.log("Calificacion C");

// } else if (nota >=60){
//     console.log("Calificacion D");

// } else {
//     console.log("Calificacion: F");
// }

// 2. switch

// const diaNum = Number(prompt("Dia de la semana (1-7):"));
// let nombreDia;
// switch (diaNum) {
//     case 1:
//         nombreDia= "Lunes";
//         break;
//     case 2:
//         nombreDia = "Martes";
//         break;
//     case 3:
//         nombreDia = "Miercoles";
//         break;
//     case 4:
//         nombreDia = "Jueves";
//         break;
//     case 5:
//         NombreDia = "Viernes";
//         break; 
//     case 6:
//         NombreDia = "Sabado";
//         break;
//     case 7:
//         NombreDia = "Domingo";
//         break;
//     default:
//         nombreDia="Numero de dia invalido";                    
// }
// console.log(nombreDia);

// 2. bucles
// 2.1 for

// for (let i = -50; i <= 50; i++){
//    console.log(i); 
// }

// while (Conocemos el numero de iteraciones)
// let contador = 1;
// while (contador <=10) {
//     console.log(contador);
//     contador++;
// }


// do...while (Si no conocemos cuantas veces iteraremos)

let num;
do{
    num = Number(prompt("Ingresa un numero mayor que 10:"));
}while (num <=10);
console.log("¡Gracias! Ingresaste: ", num);

