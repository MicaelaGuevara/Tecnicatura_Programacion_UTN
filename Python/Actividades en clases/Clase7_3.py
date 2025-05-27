nota = float(input("Ingrese una nota del 0 al 10: "))

if nota == 9 and nota == 10:
    print("A")

elif nota >= 8 and nota < 9:
    print("B")

elif nota >= 7 and nota < 8:
    print("C")

elif nota >= 6 and nota < 7:
    print("D")

elif nota >= 0 and nota < 6:
    print("F")

else:
    print("El valor ingresado es incorrecto")