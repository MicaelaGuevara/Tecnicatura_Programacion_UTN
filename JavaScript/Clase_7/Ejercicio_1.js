// Pedimos al ususario que ingrese un numero par o impar
let almacenamientoNumero = parseInt(prompt("¿Cuantos numeros vas a ingresar? "));
if(almacenamientoNumero % 2 == 0){
    console.log("El número es par", almacenamientoNumero);
}
else{
    console.log("El número es impar", almacenamientoNumero);
}