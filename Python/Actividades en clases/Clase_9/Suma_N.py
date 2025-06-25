# Inicializar la suma en 0
suma = 0

# Pedir al usuario un número entero
try:
    N = int(input("Digite la cantidad de números a sumarse: "))

    # Validar que N sea positivo
    if N > 0:
        for i in range(1, N + 1):
            suma += i
        print("La suma es:", suma)
    else:
        print("Por favor, introduce un número mayor que cero.")
except ValueError:
    print("Error: Debes introducir un número entero válido.")
