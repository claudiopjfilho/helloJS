function celular(modelo, preco) {
    return {
        modelo,
        preco,
        desconto: 0.2

    }
}

console.log(celular('Xiaomi', 1200))
console.log(celular('Galaxy a10s', 720))
