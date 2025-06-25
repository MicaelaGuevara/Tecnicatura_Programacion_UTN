package Clase_12;

import java.util.Scanner;

public class Ejercicio_1 {
    public static void main(String[] args) {
        // Ingreso de datos
        try (Scanner scanner = new Scanner(System.in)) {
            // Ingreso de datos
            System.out.print("Ingrese el total de horas: ");
            int totalHoras = scanner.nextInt();
            
            // Cálculos
            int semanas = totalHoras / (7 * 24);
            int horasRestantes = totalHoras % (7 * 24);
            int dias = horasRestantes / 24;
            int horas = horasRestantes % 24;
            
            // Resultado
            System.out.println(totalHoras + " horas equivalen a:");
            System.out.println(semanas + " semanas, " + dias + " días y " + horas + " horas.");
        }
    }
}

