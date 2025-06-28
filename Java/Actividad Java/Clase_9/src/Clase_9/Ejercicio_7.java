package Clase_9;
import java.util.Scanner;
public class Ejercicio_7 {
   public static void main(String[] args) {
        final double SALARIO_BASE = 1000.0;
        final double COMISION_POR_CARRO = 150.0;
        final double PORCENTAJE_VENTA = 0.05;

       try (Scanner scanner = new Scanner(System.in)) {
           System.out.print("Ingrese el número de carros vendidos: ");
           int carrosVendidos = scanner.nextInt();
           
           double totalValorVentas = 0;
           for (int i = 1; i <= carrosVendidos; i++) {
               System.out.print("Ingrese el valor del carro " + i + ": ");
               double valorCarro = scanner.nextDouble();
               totalValorVentas += valorCarro;
           }
           
           double salarioFinal = SALARIO_BASE +
                   (COMISION_POR_CARRO * carrosVendidos) +
                   (PORCENTAJE_VENTA * totalValorVentas);
           
           System.out.println("El salario mensual del vendedor es: $" + salarioFinal);
       }
    } 
}
