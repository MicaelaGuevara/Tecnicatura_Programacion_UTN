
package Numeros_Enteros;


public class Enteros {
    public static void main(String[] args) {
        
        byte numEnteroByte = 127;
        System.out.println("numEnteroByte = " + numEnteroByte);
        System.out.println("Valor minimo del Byte :" + Byte.MIN_VALUE);
        System.out.println("Valor maximo del Byte :" + Byte.MAX_VALUE);
        
        short numShort = 32767;
        System.out.println("numShort = " + numShort);
        System.out.println("Valor minimo del Short :" + Short.MIN_VALUE);
        System.out.println("Valor maximo del Short :" + Short.MAX_VALUE);
        
        int numEnteroInt = 2147483647;
        System.out.println("numEnteroInt = " + numEnteroInt);
        System.out.println("Valor minimo del Int :" + Integer.MIN_VALUE);
        System.out.println("Valor maximo del Int :" + Integer.MAX_VALUE);
        
        long numEnteroLong = 10;
        System.out.println("numEnteroLong = " + numEnteroLong);
        System.out.println("Valor minimo del Long: " + Long.MIN_VALUE);
        System.out.println("Valor maximo del Long: " + Long.MAX_VALUE);
    }
}
