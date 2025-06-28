package Clase_8;
import java.util.Scanner;
public class Ejercicio_1 {
   public static void main(String[] args) {
       // Pedir al usuario la base y la altura
       try (Scanner scanner = new Scanner(System.in)) {
           // Pedir al usuario la base y la altura
           System.out.print("Ingresa la base del rectángulo: ");
           double base = scanner.nextDouble();
           
           System.out.print("Ingresa la altura del rectángulo: ");
           double altura = scanner.nextDouble();
           
           // Calcular área y perímetro
           double area = base * altura;
           double perimetro = 2 * (base + altura);
           
           // Mostrar resultados
           System.out.println("Área del rectángulo: " + area);
           System.out.println("Perímetro del rectángulo: " + perimetro);
       }
    }  
}
