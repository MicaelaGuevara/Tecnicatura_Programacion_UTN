package Clase_9;
import java.util.Scanner;
public class Ejercicio_5 {
    public static void main(String[] args) {
        // Pedir las calificaciones al usuario
        try (Scanner scanner = new Scanner(System.in)) {
            // Pedir las calificaciones al usuario
            System.out.print("Ingrese la primera calificación: ");
            double calificacion1 = scanner.nextDouble();
            
            System.out.print("Ingrese la segunda calificación: ");
            double calificacion2 = scanner.nextDouble();
            
            System.out.print("Ingrese la tercera calificación: ");
            double calificacion3 = scanner.nextDouble();
            
            // Calcular la suma
            double suma = calificacion1 + calificacion2 + calificacion3;
            
            // Imprimir el resultado
            System.out.println("La suma de las tres calificaciones es: " + suma);
        }
    }
}

