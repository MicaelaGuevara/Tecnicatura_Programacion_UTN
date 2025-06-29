// === Versión con switch ===
function obtenerNombreMes(numeroMes) {
  let nombreMes;

  switch (numeroMes) {
    case 1:
      nombreMes = "Enero";
      break;
    case 2:
      nombreMes = "Febrero";
      break;
    case 3:
      nombreMes = "Marzo";
      break;
    case 4:
      nombreMes = "Abril";
      break;
    case 5:
      nombreMes = "Mayo";
      break;
    case 6:
      nombreMes = "Junio";
      break;
    case 7:
      nombreMes = "Julio";
      break;
    case 8:
      nombreMes = "Agosto";
      break;
    case 9:
      nombreMes = "Septiembre";
      break;
    case 10:
      nombreMes = "Octubre";
      break;
    case 11:
      nombreMes = "Noviembre";
      break;
    case 12:
      nombreMes = "Diciembre";
      break;
    default:
      nombreMes = "Mes inválido";
  }

  return nombreMes;
}

// Prueba con switch
console.log("Versión switch: ", obtenerNombreMes(5)); // Debería mostrar "Mayo"


// === Versión mejorada con arreglo y función ===
function obtenerNombreMesMejorado(numeroMes) {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  if (numeroMes >= 1 && numeroMes <= 12) {
    return meses[numeroMes - 1];
  } else {
    return "Mes inválido";
  }
}

// Prueba con versión mejorada
console.log("Versión mejorada: ", obtenerNombreMesMejorado(5)); // Debería mostrar "Mayo"
