const mongoose = require('mongoose')

//Pega a API de Promise do Node e atribui a mongoose.Promise
//Para não gerar warning
mongoose.Promise = global.Promise

//Formato antigo
//module.exports = mongoose.connect('mongodb://localhost/mymoney')

//Novo formato para "mongoose": "^4.13.19"
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })


mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.Number.enum = "O '{VALUE}' não é válido para o atributo '{PATH}'."