Number.prototype.entre = function(inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota) {
    if(nota.entre(9, 10)) {
        console.log('Quadro de honra')
    } else if (nota.entre(7, 8.999)) {
        console.log('Aprovado')
    } else if(nota.entre(4, 6.999)){
        console.log('Recuperação!')
    } else if(nota.entre(0, 3.999)){
        console.log('Reprovado!')
    } else {
        console.log('Valor inválido')
    }

}

imprimirResultado(10)
imprimirResultado(9.7)
imprimirResultado(7.9)
imprimirResultado(5.5)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(23)


