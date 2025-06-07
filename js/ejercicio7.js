/*7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/
let num1 = parseInt(prompt('Dime el primer numerito'));
let num2 = parseInt(prompt('Dime el segundo numerito'));
let num3 = parseInt(prompt('Dime el tercer numerito'));

if(num1 > num2 &&num1>num3){
    alert('El más alto número es: '+num1)
}else if(num2 > num3 && num2>num1){
    alert('El numero más alto es :'+num2)
}else {
    alert('El número más alto es :'+num3);
}