
package Clase_11;

import java.util.Scanner;

public class Aprovado_Desaprobado {
    public static void main(String[] args) {
        // Declaración de variables
        try (Scanner scanner = new Scanner(System.in)) {
            double nota1, nota2, nota3, promedio;
            // Entrada de datos
            System.out.print("Digite la primera calificación: ");
            nota1 = scanner.nextDouble();
            System.out.print("Digite la segunda calificación: ");
            nota2 = scanner.nextDouble();
            System.out.print("Digite la tercera calificación: ");
            nota3 = scanner.nextDouble();
            // Cálculo del promedio
            promedio = (nota1 + nota2 + nota3) / 3;
            // Evaluar si aprueba o reprueba
            if (promedio >= 70) {
                System.out.println("El alumno está aprobado con: " + promedio);
            } else {
                System.out.println("El alumno está desaprobado con: " + promedio);
            }
        }
    }
}

