package Operadores_Aritméticos;

public class Aritméticos {
     public static void main(String[] args) {
         
         int num1 = 5, num2 = 4;
         var solucion = num1 + num2;
         System.out.println("Solucion de la suma = " + solucion);
         
         solucion = num1 - num2;
         System.out.println("solucion de la resta = " + solucion);
         
         solucion = num1 * num2;
         System.out.println("solucion de la multiplicacion = " + solucion);
         
         solucion = num1 / num2;
         System.out.println("solucion de la division = " + solucion);
         
         var solucion2 = 3.4 / num2;
         System.out.println("solucion2 resultadp de la division = " + solucion2);
         
         solucion = num1 % num2;
         System.out.println("solucion = " + solucion);
         
         if (num1 % 2 == 0)
             System.out.println("Es un número Par");
         else
             System.out.println("Es un número Impar");
         
     }
}
