/*Calcular el precio con descuento: Crear un algoritmo que permita ingresar el precio de un producto y aplicar un descuento del 15% si el precio es mayor a 1000. Mostrar el precio final.*/

let precioIngresado = parseInt(prompt('Hoy nuestros productos tienen descuentos! Dime el precio del que quieres comprar'));

if(precioIngresado>1000){
    let precioDescuento = precioIngresado *0.15;
    alert('El valor con descuento es '+precioDescuento)
}else{
    alert('No tenemos descuento para ese valor rey!')
};