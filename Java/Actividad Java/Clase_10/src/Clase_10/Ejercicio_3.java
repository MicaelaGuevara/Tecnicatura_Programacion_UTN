package Clase_10;

import java.util.Scanner;

public class Ejercicio_3 {
    public static void main(String[] args){
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite un numero de mes: ");
        var mes = Integer.parseInt(entrada.nextLine());
        var estacion = "Estacion desconocida";
        switch(mes){
            case 1: case 2: case 3:
                estacion = "Verano";
                break;
            case 4: case 5: case 6:
                estacion = "Otoño";
                break;
            case 7: case 8: case 9:
                estacion = "Invierno";
                break;
            case 10: case 11: case 12:
                estacion = "Primavera";
        }
        System.out.println("estacion = " + estacion);
    }
}
