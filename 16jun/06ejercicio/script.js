//definir numero de cuenta
let numeroCuenta = "12345";
let dinero = 200; //monto que queremos depositar

//2. Definimos un saldo inicial
let saldo = 1000; //saldo previo

//3 definimos la cuenta
const cuentaValida ="12345";
// 4 comparamos 
if(numeroCuenta === cuentaValida){
    saldo = saldo + dinero;
    console.log("deposito exitoso. Nuevo saldo es : ", saldo);
} else {
    console.log("cuenta no valida. Regrese el dinero :(, dinero");
}
