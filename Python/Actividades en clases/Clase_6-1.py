num = int(input("Digite un número en el rango del 1 al 3: "))
numTexto = " "
if num == 1:
    numTexto = "Número uno"
elif num == 2:
    numTexto = "Número dos"
elif num == 3:
    numTexto = "Número tres"
else:
    numTexto = "Has ingresar un número fiera de rango"
print(f"El número ingresado es: {num} - {numTexto}") 