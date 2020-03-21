//definindo uma porta para rodar a aplicação
const port = 3003


//referenciando alguns middle
const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//Para toda requição que checar "use" bodyParse para interpretar quando vier
//no formato "urlencoded"
server.use(bodyParser.urlencoded({extended: true}))

//Para toda requição que checar "use" bodyParse para interpretar quando vier
//no formato "json"
server.use(bodyParser.json())

//Chama o método "listen" para ficar escutando a porta "3003"
//e caso a porta consiga ser alocada pelo nosso serviço
//imprimi no console a mensagem descrita abaixo
server.listen(port, function() {
    console.log(`BACKEND is runnig on port ${port}.`)
})

module.exports = server