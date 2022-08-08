const moduloA = require('../../moduloa') //funciona no mac/windows mas não funciona no linux se errar a letra
//const moduloA = require('/Users/DICKSON/CF/Udemy/Curso FULL STACK - Udemy/exerciciosJS/node/moduloA.js')  *módulo absoluto*

console.log(moduloA.ola)

const saudacao = require('saudacao') //arquivo index em uma pasta do node modules
console.log(saudacao.ola)

const c = require('./pastaC/index.js')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Good Morning!')
    res.end()
}).listen(8080)