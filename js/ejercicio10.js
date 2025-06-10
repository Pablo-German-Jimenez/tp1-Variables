/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/
let frase = parseInt(prompt('Veamos si tu numerito es multiplo de 2,3,5 o 7'));
if(frase%2===0){
    alert('El numerito '+frase+' es multiplo de 2')
}else if(frase%3===0){
    alert('El numerito '+frase+' es multiplo de 3')
}else if(frase%5===0){
    alert('El numerito '+frase+' es multiplo de 5')
}else if(frase%7===0){
    alert('El numerito '+frase+' es multiplo de 7')
}else{alert('no es multiplo de 2,3,5 ni 7 ')};