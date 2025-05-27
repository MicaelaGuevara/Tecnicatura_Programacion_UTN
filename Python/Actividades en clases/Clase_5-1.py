valor = int(input("Digite un número dentro del rango 0 al 5: "))
valorMinimo = 0
valorMaximo = 5
dentroRango = valor >= valorMinimo and valor <= valorMaximo
if dentroRango:
    print(f"El valor {valor} esta detro del rango")
else:
    print(f"El valor {valor} No esta dentro del rango")