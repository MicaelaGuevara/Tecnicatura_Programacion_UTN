
package Clase_11;

import java.util.Scanner;

public class Descuento_Compra {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            double compra, descuento, precioFinal;
            // Entrada de datos
            System.out.print("Digite la cantidad a pagar: ");
            compra = scanner.nextDouble();
            // Verificar si aplica el descuento
            if (compra > 100) {
                descuento = compra * 0.20;
            } else {
                descuento = 0;
            }   // Calcular precio final
            precioFinal = compra - descuento;
            // Mostrar resultado
            System.out.println("El precio a pagar es: " + precioFinal);
        }
    }
}

