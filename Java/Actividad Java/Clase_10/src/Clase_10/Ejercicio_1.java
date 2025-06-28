package Clase_10;
public class Ejercicio_1 {
    public static void main(String[] args){
        var condicion = false;
        if(condicion) {
            System.out.println("Condicíon Verdadera");
        }
        else{
            System.out.println("Condicíon Falsa");
        }
        
        var numero = 2;
        var numeroTexto = "Numero Desconcido";
        if (numero == 1){
            numeroTexto = "Numero uno";
        }
        else if(numero == 2){
            numeroTexto = "Numero dos";
        }
        else if(numero == 3){
            numeroTexto = "Numero tres";
        }
        else if(numero == 4){
            numeroTexto = "Numero cuatro";
        }
        else{
            numeroTexto = "Numero no encontrado";
        }
         System.out.println("numeroTexto = " + numeroTexto);
    }   
}
