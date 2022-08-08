const imprimirResultado = function(nota) {
    if (nota > 7) {
        console.log('Aprovado!!!')
        
    }
    else {
        console.log('Reprovado!!!')
    }
}

imprimirResultado(9)
imprimirResultado(5)
imprimirResultado('Epa') // cuidado!!! deu false pois é string e não number



