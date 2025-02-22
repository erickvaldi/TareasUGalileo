<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2025 by anonymous (http://jsbin.com/dizadotowa/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
// Variables útiles 
// Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final 
var precio_final = 0;

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números");

// Se verifica que el asegurado sea mayor de edad (mínimo 18)
if (parseInt(edad) < 18) {
  alert("El asegurado debe ser mayor de edad para cotizar el seguro.");
} else {
  // Preguntar estado civil
  var casado = prompt("¿Está casado actualmente? (SI/NO)");
  // Comprobamos la edad del cónyuge, solamente si se está casado/a
  var edad_conyuge;
  if ("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
  }
  
  // Convirtiendo las edades ingresadas a números 
  var edad_numero = parseInt(edad);
  var edad_conyuge_numero = 0;
  if ("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge);
  }
  
  var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)");
  // Comprobamos la cantidad de hijos solamente si los tiene
  var cantidad_hijos = 0;
  if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuántos hijos tiene?");
    /** 1. Convierta la cantidad de hijos a número */
    cantidad_hijos = parseInt(cantidad_hijos);
  }
  
  // -----------------------------
  // Cálculo de recargos y precio final
  
  // 2. Recargo por la edad del asegurado 
  if(edad_numero >= 18 && edad_numero < 25){
    recargo = precio_base * edad_18;
    recargo_total += recargo;
  } else if(edad_numero >= 25 && edad_numero < 50){
    recargo = precio_base * edad_25;
    recargo_total += recargo;
  } else if(edad_numero >= 50){
    recargo = precio_base * edad_50;
    recargo_total += recargo;
  }
  
  // 3. Recargo por la edad del cónyuge (si está casado)
  if("SI" == casado.toUpperCase()){
    if(edad_conyuge_numero >= 18 && edad_conyuge_numero < 25){
      recargo = precio_base * casado_18;
      recargo_total += recargo;
    } else if(edad_conyuge_numero >= 25 && edad_conyuge_numero < 50){
      recargo = precio_base * casado_25;
      recargo_total += recargo;
    } else if(edad_conyuge_numero >= 50){
      recargo = precio_base * casado_50;
      recargo_total += recargo;
    }
  }
  
  // 4. Recargo por la cantidad de hijos
  if("SI" == hijos.toUpperCase()){
    recargo = precio_base * hijos_recargo * cantidad_hijos;
    recargo_total += recargo;
  }
  
  precio_final = precio_base + recargo_total;
  
  // Resultados
  alert("Para el asegurado " + nombre);
  alert("El recargo total será de: " + recargo_total + " quetzales");
  alert("El precio final de la cotización es: " + precio_final + " quetzales");
}

</script>
</body>
</html>