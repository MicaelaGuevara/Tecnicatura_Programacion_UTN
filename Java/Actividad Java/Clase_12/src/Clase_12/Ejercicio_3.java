package Clase_12;

import java.util.Scanner;

public class Ejercicio_3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir las calificaciones al usuario
        System.out.print("Ingrese la calificación de participación (10%): ");
        double participacion = scanner.nextDouble();

        System.out.print("Ingrese la calificación del primer examen parcial (25%): ");
        double parcial1 = scanner.nextDouble();

        System.out.print("Ingrese la calificación del segundo examen parcial (25%): ");
        double parcial2 = scanner.nextDouble();

        System.out.print("Ingrese la calificación del examen final (40%): ");
        double examenFinal = scanner.nextDouble();

        // Calcular la calificación final con los pesos indicados
        double calificacionFinal = (participacion * 0.10) + 
                                   (parcial1 * 0.25) + 
                                   (parcial2 * 0.25) + 
                                   (examenFinal * 0.40);

        // Mostrar el resultado
        System.out.println("La calificación final del estudiante es: " + calificacionFinal);
    }  
}
