//coleção dinãmica de pares chave/valor

const produto = new Object

produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genéricos'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['Marca do produto']

console.log(produto)

const carro = {
    modelo: 'Golf',
    valor: 65000,
    proprietario: {
        nome: 'Tyler',
        idade: 25,
       endereco: {
           logradouro: 'Rua dos não fumantes',
           numero: 666
       }
    },
        condutores: [{
            nome: 'Rinauro',
            idade: 32
        }, {
            nome: 'Lucas',
            idade: 19
        }, {
        nome: 'Otaniana',
        idade: 23
        },
        ],

    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av canceriana'


console.log(carro)
console.log('AAAAAAA')
delete carro.proprietario.endereco
console.log(carro)