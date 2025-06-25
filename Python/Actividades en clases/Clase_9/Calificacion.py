# Inicializar variables
suma = 0
calificacion_baja = float('inf')  # Usamos infinito para encontrar la menor nota

# Bucle para ingresar 10 calificaciones
for i in range(1, 11):
    try:
        calificacion = float(input(f"Digite la calificación del alumno {i}: "))

        # Sumar calificaciones
        suma += calificacion

        # Verificar si es la más baja
        if calificacion < calificacion_baja:
            calificacion_baja = calificacion

    except ValueError:
        print("Entrada inválida. Por favor ingrese un número real.")
        exit()

# Calcular promedio
calificacion_promedio = suma / 10

# Mostrar resultados
print(f"\nLa calificación promedio es: {calificacion_promedio}")
print(f"La calificación más baja es: {calificacion_baja}")
