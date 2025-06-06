/*Determinar si un número es par o impar: Crear un algoritmo que permita al usuario ingresar un número y determinar si es par o impar. Mostrar el resultado.*/

let numIngresado = parseInt(prompt('Veamos si el número es par o impar, ingresá un numerito'));

if(numIngresado%2===0){
    alert('El número ingresado es par')
}else{ 
    alert('El número ingresado es impar');
};

