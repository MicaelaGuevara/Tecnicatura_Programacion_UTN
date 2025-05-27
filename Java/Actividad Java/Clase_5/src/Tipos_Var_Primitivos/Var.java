package Tipos_Var_Primitivos;

public class Var {
    public static void main(String[] args) {
        var numEntero = 20; //Las literales sin puntos automaticamente son de tipo int  
        System.out.println("NumEntero = +" + numEntero);
        var numFloat = 10.0F; //automaticamente con el punto se transforma en tipo double
        System.out.println("numFloat = " + numFloat);
        var numDouble = 10.0;
        System.out.println("numDoable = " + numDouble);
    }
}
