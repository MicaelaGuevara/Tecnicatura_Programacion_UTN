num = int(input("Digite un número: "))

if num == 0:
    factorial = 1
else:
    i = 1
    factorial = 1
    while i <= num:
        factorial *= i
        i += 1

print("El factorial es:", factorial)