function getValorInteiroEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getValorInteiroEntre(-1, 10)
    console.log(`Número sorteado: ${opcao}`)
}while (opcao != -1) 


console.log('Fim')





