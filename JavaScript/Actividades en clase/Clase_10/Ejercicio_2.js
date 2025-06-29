let horaDia = 19;
let mensaje;
if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Good Morning";
}
else if(horaDia >= 12 && horaDia <= 16){
    mensaje = "Good afternoon";
}
else if(horaDia >= 17 && horaDia <= 19){
    mensaje = "Good everning";
}
else if(horaDia >= 20 && horaDia <= 23){
    mensaje = "Good night";
}
else{
    mensaje = "Valor Incorrecto";
}
console.log(mensaje);