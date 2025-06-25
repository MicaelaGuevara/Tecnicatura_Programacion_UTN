let miNumero = "25";
console.log(typeof miNombre);
let edad2 = Number(miNumero);
console.log(typeof edad2);
//Funsion isNaN

if(isNaN(edad2)){
    console.log("Esta variable no contiene solo numeros")
}
else{
    if(edad2 >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}