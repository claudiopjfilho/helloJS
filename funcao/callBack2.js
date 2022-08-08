const boletim = [3.4, 5.6, 7.8, 9.4, 8.2, 6.9]

//sem callback

const notasBaixas1 = []
for(let i in boletim) {
    if (boletim[i] < 7) {
        notasBaixas1.push(boletim[i])
    }
}

console.log(notasBaixas1)

//com callback

const notasBaixas2 = boletim.filter(function(nota) {
   return nota < 7
})

console.log(notasBaixas2)


const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = boletim.filter(notasMenorQue7)
console.log(notasBaixas3)


