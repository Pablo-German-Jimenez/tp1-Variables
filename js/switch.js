/*Cree un programa al estilo de un cajero automatico con las siguientes opciones:

1- consultar el saldo

2- ingresar dinero

3- extraer dinero*/

const opcion = prompt('Seleccione una opción: 1- Consultar el saldo, 2- Inresar dinero ,3- Ingresar dinero,4-Extraer dinero');
let saldo ='10000';

switch(opcion){
case '1':alert('Su saldo es de $'+ saldo)
    break;
case '2':
    const deposito = parseFloat(prompt('Ingrese el monto que sea depositar'))
    console.log(deposito)
    saldo= saldo+ deposito;
    document.writeln(`Depositaste${deposito}, tu saldo actual es ${saldo}`)
}

