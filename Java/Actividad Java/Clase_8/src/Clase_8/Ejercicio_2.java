package Clase_8;

import java.util.Scanner;
public class Ejercicio_2 {
  public static void main(String[] args) {
      // Pedir al usuario dos números
      try (Scanner scanner = new Scanner(System.in)) {
          // Pedir al usuario dos números
          System.out.print("Ingresa el primer número: ");
          int numero1 = scanner.nextInt();
          
          System.out.print("Ingresa el segundo número: ");
          int numero2 = scanner.nextInt();
          
          // Usar operador ternario para encontrar el mayor
          int mayor = (numero1 > numero2) ? numero1 : numero2;
          
          // Mostrar resultado
          System.out.println("El mayor es: " + mayor);
      }
    }  
}
