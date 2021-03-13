const roteador = require('express').Router()
const Centralizador = require('../../usecase/Centralizador')

roteador.get('/',(req, res) => {
    const centralizador = new Centralizador(req.header('login'), req.header('senha'))
    const result = centralizador.process()
    
    res.send(result)
})

module.exports = roteador