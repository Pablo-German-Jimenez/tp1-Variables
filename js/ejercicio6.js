/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
*/
let num1 = parseInt(prompt('Vamos a ver cual número es mayor, dame el primero'))
let num2 = parseInt(prompt('Muy bien! dame el otro número'));

if(num1>num2){
    alert('El número mayor es '+ num1)
}else{
    alert('El número mayor es '+num2)
};