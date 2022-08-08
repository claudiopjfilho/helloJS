//notação literal
const obj1 = {}
console.log(obj1)

//object em JS
console.log(typeof Object,typeof new Object)
const obj2 = {}
console.log(obj2)
console.log('==========================')

//funções construtoras
function produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new produto('caneta', 2.99, 0.1)
const p2 = new produto('Chapéu', 35.99, 0.1)
const p3 = new produto('Celular', 2399, 0.2)


console.log(p1.getPrecoComDesconto(),p3.getPrecoComDesconto(),p2.getPrecoComDesconto())

//Função factory
function criaFuncionario(nome, salarioBase,faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
console.log('==========================')
const f1 = criaFuncionario('João', 1800, 4)

const f2 = criaFuncionario('Joana', 2200, 8)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)



