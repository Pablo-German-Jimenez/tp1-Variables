/*8.- Escribe un programa que pida un número y diga si es divisible por 2*/
let numeroIngresado= parseInt(prompt('Dame un numerito para ver si es divisible por dos'));

if(numeroIngresado%2===0){
    document.writeln('El numerito '+numeroIngresado+' es divisible por 2')
}else{
    alert('El número '+numeroIngresado+' no es divisible por 2')
};