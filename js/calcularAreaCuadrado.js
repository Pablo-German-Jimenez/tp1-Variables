/* 
Calcular el perímetro y área de un rectángulo: Crear un algoritmo que permita al usuario ingresar el largo y el ancho de un rectángulo, y calcular su perímetro y área. Las fórmulas son:
Perímetro: P = 2*(largo+ancho)
Área: A=largo×ancho
*/
alert('Hola! vamos a sacar el perímetro y área de un rectángulo,dale ? comencemos!');
let largo = prompt('Ingresá el largo del rectángulo');
let ancho = prompt('y ahora dime el ancho del rectángulo');

let perimetro = largo+ancho;
let area = largo * ancho;

alert('El perímetro de tu rectángulo es:'+perimetro+' y su área es:'+area);
