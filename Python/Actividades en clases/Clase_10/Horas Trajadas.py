suma = 0

for i in range(1, 6):
    print(f"Empleado {i}")
    horas = float(input("Digite las horas trabajadas: "))
    tarifa = float(input("Digite la tarifa por hora: "))
    
    salario = horas * tarifa
    print(f"El salario del empleado {i} es: ${salario:.2f}")
    
    suma += salario

print(f"La suma de todos los salarios es: ${suma:.2f}")