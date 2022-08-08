function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(6))
console.log(soma(9, 6))
console.log(soma(9, 8, 123, 48392,9.4))
console.log(soma(1.2, 3.5, 9.9, 576, "PSJnfs"))
console.log(soma(0, "a", "b", "C"))


