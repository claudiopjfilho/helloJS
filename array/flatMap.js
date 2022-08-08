const escola = [{
    nome: 'Turma M1', 
    alunos: [{
        nome: 'Elias',
        nota: 8.7
    }, {
        nome: 'Ana',
        nota: 9.3

    }]    
},{
    nome: 'Turma M2',
    alunos: [{
    nome: 'Joana',
    nota: 9.6
    }, {
    nome: 'André',
    nota: 8.2
    }
]}
]

const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)
const notas1 = escola.map(getNotasTurma)

console.log(notas1)

console.log([].concat( [ 8.7, 9.3 ], [ 9.6, 8.2 ] ))

Array.prototype.flatmap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatmap(getNotasTurma)
console.log(notas2)