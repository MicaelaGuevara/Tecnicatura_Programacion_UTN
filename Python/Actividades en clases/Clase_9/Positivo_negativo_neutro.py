# Inicializamos contadores
positivos = 0
negativos = 0
neutros = 0

print("Introduce 10 números:")

# Leer 10 números usando un bucle
for i in range(1, 11):
    num = float(input(f"Número {i}: "))
    
    if num > 0:
        positivos += 1
    elif num < 0:
        negativos += 1
    else:
        neutros += 1

# Mostrar resultados
print("\nResumen:")
print(f"Números positivos: {positivos}")
print(f"Números negativos: {negativos}")
print(f"Números neutros (cero): {neutros}")
