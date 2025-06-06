/*Convertir grados Fahrenheit a Celsius: Crear un algoritmo que permita al usuario ingresar una temperatura en grados Fahrenheit y convertirla a grados Celsius. La fórmula para convertir de Fahrenheit a Celsius es: C= (5/9)​*(F−32)*/

let temperaturaIngresada = parseInt(prompt('Ingresá la temperatura en grados fahrenheit'));

let convertirCelsius = (temperaturaIngresada-32 )*(5/9);

let respuesta = alert('Los grados Celsius son: '+convertirCelsius);

console.log(respuesta);