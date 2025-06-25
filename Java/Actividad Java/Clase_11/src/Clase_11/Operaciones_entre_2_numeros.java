package Clase_11;

import java.util.Scanner;

public class Operaciones_entre_2_numeros {
     public static void main(String[] args) {
         try (Scanner scanner = new Scanner(System.in)) {
             double num1, num2, resultado;
             // Entrada de datos
             System.out.print("Digite el primer número: ");
             num1 = scanner.nextDouble();
             System.out.print("Digite el segundo número: ");
             num2 = scanner.nextDouble();
             // Lógica condicional según el problema
             if (num1 == num2) {
                 resultado = num1 * num2;
             } else if (num1 > num2) {
                 resultado = num1 - num2;
             } else {
                 resultado = num1 + num2;
             }    // Salida de resultado
             System.out.println("El resultado es: " + resultado);
         }
    }
}

