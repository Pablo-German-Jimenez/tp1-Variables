/*11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)*/
/*let num= parseInt( prompt('Dame un numerito, veamos si es divisible por 2,3,5 o 7'));*/


const num = parseInt(prompt('Ingrese un numero: '))

if( num % 2 == 0 && num % 3 == 0 && num % 5 == 0 && num % 7 == 0 ){
    document.writeln('El numero '+num+' es divisible por 2, 3, 5 y 7')
}else{
    if( num % 2 == 0 && num % 3 == 0 && num % 5 == 0 ){
        document.writeln('El numero '+num+' es divisible por 2, 3 y 5')
    }else{
        if( num % 2 == 0 && num % 3 == 0 && num % 7 == 0 ){
        document.writeln('El numero '+num+' es divisible por 2, 3 y 7')
        }else{
            if( num % 2 == 0 && num % 5 == 0 && num % 7 == 0 ){
            document.writeln('El numero '+num+' es divisible por 2, 5 y 7')
            }else{
                if( num % 3 == 0 && num % 5 == 0 && num % 7 == 0 ){
                document.writeln('El numero '+num+' es divisible por 3, 5 y 7')
                }else{
                    if( num % 2 == 0 && num % 3 == 0 ){
                        document.writeln('El numero '+num+' es divisible por 2 y 3')
                    }else{
                        if( num % 2 == 0 && num % 5 == 0 ){
                            document.writeln('El numero '+num+' es divisible por 2 y 5')
                        }else{
                            if ( num % 2 == 0 && num % 7 == 0 ){
                                document.writeln('El numero '+num+' es divisible por 2 y 7')
                            }else{
                                if( num % 3 == 0 && num % 5 == 0 ){
                                    document.writeln('El numero '+num+' es divisible por 3 y 5')
                                }else{
                                    if( num % 3 == 0 && num % 7 == 0 ){
                                        document.writeln('El numero '+num+' es divisible por 3 y 7')
                                    }else{
                                        if( num % 5 == 0 && num % 7 == 0 ){
                                            document.writeln('El numero '+num+' es divisible por 5 y 7')
                                        }else{
                                            if( num % 2 == 0 ){
                                                document.writeln('El numero '+num+' es divisible por 2')
                                            }else{
                                                if( num % 3 == 0 ){
                                                    document.writeln('El numero '+num+' es divisible por 3')
                                                }else{
                                                    if( num % 5 == 0 ){
                                                        document.writeln('El numero '+num+' es divisible por 5')
                                                    }else{
                                                        if( num % 7 == 0 ){
                                                            document.writeln('El numero '+num+' es divisible por 7')
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}