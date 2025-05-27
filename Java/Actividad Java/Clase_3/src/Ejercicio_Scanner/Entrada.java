
package Ejercicio_Scanner;

import java.util.Scanner;

public class Entrada{
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Digite su nombre: ");
        var usuario2 = entrada.nextLine();
        System.out.println("usuario2 = " + usuario2);
        System.out.println("Escribe el titulo: ");
        var titulo2 = entrada.nextLine();
        System.out.println("Resultado: " + titulo2+ " " + usuario2);
        
    }
}

    
    
