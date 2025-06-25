n_elementos = int(input("Digite la cantidad de elementos a ingresar: "))

# Inicializamos variables
suma_pares = 0
conteo_pares = 0
suma_impares = 0
conteo_impares = 0

# Bucle para procesar cada número
for i in range(n_elementos):
    num = int(input(f"Ingrese el número {i + 1}: "))
    if num % 2 == 0:
        suma_pares += num
        conteo_pares += 1
    else:
        suma_impares += num
        conteo_impares += 1

# Mostrar resultados para pares
if conteo_pares == 0:
    print("No se han digitado números pares.")
else:
    print("La suma de los números pares es:", suma_pares)
    print("El conteo de los números pares es:", conteo_pares)

# Mostrar resultados para impares
if conteo_impares == 0:
    print("No se han digitado números impares.")
else:
    promedio_impares = suma_impares / conteo_impares
    print("El promedio de impares es:", promedio_impares)