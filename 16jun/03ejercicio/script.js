//Logica Booleana
//true = verdadero
let llueveHoy = false;
// false = falso
let tengoParaguas= false;

if(llueveHoy){
    if (tengoParaguas){
        console.log("Salgo con paraguas");
    } else {
        console.log ("No tengo paraguas, busco un refugio o compro uno");
    }
} else { 
    console.log ("no llueve, salgo sin paraguas");
}