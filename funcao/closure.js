// Closure é o excopo criado  quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função
//contexto lexico em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const myFunction = fora()

console.log(myFunction())

