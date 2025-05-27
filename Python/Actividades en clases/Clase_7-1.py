Usuario = int(input("Ingrese un mes del año: "))

if Usuario > 1 and Usuario <= 3 :
    print("Es verano - fecha: 21/12 al 21/03")

elif Usuario > 4 and Usuario <= 6 :
    print("Es otoño - fecha: 21/03 al 21/06")

elif Usuario > 7 and Usuario <= 9 :
    print("Es invierno - fecha: 21/06 al 21/09")

elif Usuario > 10 and Usuario <= 12:
    print("Es primavera - fecha: 21/09 al 21/12")

else:
    print("el mes no es correcto")