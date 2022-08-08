const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(6, 4)
imprimirResultado(3, 7, soma)
imprimirResultado(3, 1, function(x, y){
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    viver: function() {
        console.log('Vida')
    }
}

pessoa.viver()

const people = {
    live() {
        console.log('Life')
    }
}

people.live()


