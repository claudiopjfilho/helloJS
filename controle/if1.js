function soBoaNoticia(nota) {
    if (nota >=7) {
        console.log('aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.7)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})






