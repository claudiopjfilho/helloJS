function tratarErroELancar(erro) {
    //throw new Error('Erro de processamento')
    //throw pitomba
    // throw true
    //throw 'mensagem'
    throw{
        nome: erro.nome,
        msg: erro.mesage,
        date: new Date

    }


}

function imprimirNomeGritado(obj) {
    
    try {
    console.log(obj.name.toUpperCase() + '!!!')
} catch (e) {
    tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Cláudio'}
imprimirNomeGritado(obj)

