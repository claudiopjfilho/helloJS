// par //nome // valor //identificador

const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Dalle' //contesto léxico 2
    return saudacao
}

//objetos são grupos aninhados de pares nome//valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso:90,
    endereco: {
        logradouro: 'Lugar Muito Legal!!!',
        numero: 123
        
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)

