package Clase_12;

import java.util.Scanner;

public class Ejercicio_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar al usuario los valores de a y b
        System.out.print("Ingrese el valor de a: ");
        double a = scanner.nextDouble();

        System.out.print("Ingrese el valor de b: ");
        double b = scanner.nextDouble();

        // Calcular usando la fórmula: (a + b)^2 = a^2 + b^2 + 2ab
        double aCuadrado = Math.pow(a, 2);
        double bCuadrado = Math.pow(b, 2);
        double dobleProducto = 2 * a * b;

        double resultado = aCuadrado + bCuadrado + dobleProducto;

        // Mostrar resultado
        System.out.println("El resultado de (a + b)^2 es: " + resultado);
    }  
}
